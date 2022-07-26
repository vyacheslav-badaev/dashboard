<template>
  <v-layout row wrap>
    <v-flex xs12 md2>
      <v-select :items="rooms" v-model="room" item-value="text" item-text="text" label="Room" autocomplete/>
    </v-flex>
    <v-flex xs12 md2>
      <v-menu
        ref="startDateMenu"
        :close-on-content-click="false"
        v-model="startDateMenu"
        :nudge-right="40"
        :return-value.sync="startDate"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="startDate"
          label="Start Date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="startDate" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="startDateMenu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.startDateMenu.save(startDate)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs12 md2>
      <v-menu
        ref="endDateMenu"
        :close-on-content-click="false"
        v-model="endDateMenu"
        :nudge-right="40"
        :return-value.sync="endDate"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="endDate"
          label="End Date"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="endDate" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="endDateMenu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.endDateMenu.save(endDate)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs12 md2 offset-md4>
      <v-btn block outline large color="black" @click="update" :loading="loading">Update</v-btn>
    </v-flex>
    <v-flex xs2 v-for="(lesson, index) in lessons" v-bind:key="index">
      <v-card>
        <v-card-media :src="parseLatLongImage(lesson.room)" height="200px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{lesson.Text}}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span class="grey--text">{{lesson.Subject}}</span><br>
            <span>{{lesson.Teacher}}</span><br>
            <span>{{lesson.Class}}</span>
          </div>
        </v-card-title>
        <v-card-text>
          <v-icon>date_range</v-icon> {{parseDate(lesson.Date)}} <br/>
          <v-icon>access_time</v-icon> {{lesson.StartTime}} <br/>
          <v-icon>access_time</v-icon> {{lesson.EndTime}} <br/>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex v-if="lessons.length == 0" xs12 class="text-sm-center">
      Select a room and data range above.
    </v-flex>
  </v-layout>
</template>
<script>
import moment from 'moment'
export default {
  name: 'ScheduleOverview',
  data () {
    return {
      rooms: [
        {text: 'EXT'},
        {text: 'H.1.110'},
        {text: 'H.1.112'},
        {text: 'H.1.114'},
        {text: 'H.1.206'},
        {text: 'H.1.306'},
        {text: 'H.1.308'},
        {text: 'H.1.312'},
        {text: 'H.1.315'},
        {text: 'H.1.318'},
        {text: 'H.1.403'},
        {text: 'H.2.111'},
        {text: 'H.2.204'},
        {text: 'H.2.306'},
        {text: 'H.2.308'},
        {text: 'H.2.318'},
        {text: 'H.2.403'},
        {text: 'H.3.206'},
        {text: 'H.3.308'},
        {text: 'H.3.312'},
        {text: 'H.3.403'},
        {text: 'H.4.308'},
        {text: 'H.4.312'},
        {text: 'H.4.318'},
        {text: 'H.5.314'},
        {text: 'W.0.116'},
        {text: 'WD.01.003'},
        {text: 'WD.01.016'},
        {text: 'WD.01.019'},
        {text: 'WD.02.002'},
        {text: 'WD.02.016'},
        {text: 'WD.02.019'},
        {text: 'WD.03.005'},
        {text: 'WD.03.033'},
        {text: 'WD.04.002'},
        {text: 'WD.05.002'},
        {text: 'WD.05.005'},
        {text: 'WD.05.013'},
        {text: 'WD.05.018'},
        {text: 'WN.01.022'},
        {text: 'WN.02.007'},
        {text: 'WN.02.017'},
        {text: 'WN.02.022'},
        {text: 'WN.02.026'},
        {text: 'WN.03.007'},
        {text: 'WN.03.017'},
        {text: 'WN.03.022'},
        {text: 'WN.05.025'},
        {text: 'WD.04.020'},
        {text: 'WD.04.016'},
        {text: 'H.3.111'},
        {text: 'Spreekkamer'},
        {text: 'T30'},
        {text: 'Extern'},
        {text: 'extern'},
        {text: 'auditorium RDM'},
        {text: 'WN.01.014'},
        {text: 'Maaspodium'},
        {text: 'geen lokaal'},
        {text: 'WD.00.026'}
      ],
      lessons: [],
      room: null,
      startDate: null,
      endDate: null,
      startDateMenu: false,
      endDateMenu: false,
      loading: false,
      snackbar: false,
      snackbarMessage: ''
    }
  },
  methods: {
    update () {
      let self = this
      this.lessons = []
            if (this.room && this.startDate && this.endDate) {
        this.loading = true
        this.$store.dispatch('hr/getSchedule', {room: self.room, startDate: self.startDate, endDate: self.endDate})
          .then((lessons) => {
            this.lessons = lessons
            this.loading = false
          })
          .catch((error) => {
            this.lessons = []
            this.loading = false
            this.$store.dispatch('ui/setSnackbarMessage', error.message)
          })
      }
    },
    parseDate (date) {
      let momentDate = moment(date, 'YYYY-MM-DD[T]HH:mm:ssZZ')
      return momentDate.format('dddd, LL') + ' (' + momentDate.fromNow() + ')'
    },
    parseLatLongImage (room) {
      let latLong = room.latitude + ',' + room.longitude
      return 'https:    }
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.ScheduleOverviewToolbarTitle)
  }
}
</script>
