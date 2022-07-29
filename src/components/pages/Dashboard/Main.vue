<template>
  <v-layout row wrap>
    <v-flex tile d-flex xs6>
      <v-card>
        <v-container fluid grid-list-lg>
          <v-layout row>
            <v-flex xs4>
              <v-card-media
                :src="require('@/assets/logos/spear/spear-logo.png')"
                height="125px"
                contain
              ></v-card-media>
            </v-flex>
            <v-flex xs8>
              <div>
                <div class="headline">Team Spartans</div>
                <br/>
                <div>Rinesh Ramadhin</div>
                <div>Shervin Ramautar</div>
                <div>Stefan Schmeltz</div>
                <div>Tareq Saleem</div>
                <div>Wilco Muit</div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
    <v-flex tile d-flex xs2>
      <ApiCounter collection="notifications" color="blue"/>
    </v-flex>
    <v-flex tile d-flex xs2>
      <ApiCounter collection="rooms" color="red"/>
    </v-flex>
    <v-flex tile d-flex xs2>
      <ApiCounter collection="roomscalender" color="green" name="Room Calender Events"/>
    </v-flex>
    <v-flex tile d-flex xs12>
      <ApiLineChart collection="notifications" keyValue="timestamp"/>
    </v-flex>
    <v-flex tile d-flex xs4>
      <ApiPieChart collection="notifications" keyValue="location"/>
    </v-flex>
    <v-flex tile d-flex xs4>
      <ApiHorizontalBarChart collection="notifications" keyValue="username"/>
    </v-flex>
    <v-flex tile d-flex xs4>
    <ApiDoughnutChart collection="notifications" keyValue="username"/>
    </v-flex>
    <v-flex tile d-flex xs12>
      <ApiTable collection="notifications"/>
    </v-flex>
    <v-flex tile d-flex xs8>
      <ApiHorizontalBarChart collection="rooms" keyValue="temperature"/>
    </v-flex>
    <v-flex tile d-flex xs4>
      <ApiDoughnutChart collection="rooms" keyValue="humidity"/>
    </v-flex>
    <v-flex tile d-flex xs6>
      <ApiBarChart collection="roomscalender" keyValue="creator"/>
    </v-flex>
    <v-flex tile d-flex xs6>
      <ApiBarChart collection="roomscalender" keyValue="room"/>
    </v-flex>
  </v-layout>
</template>
<script>
import ApiCounter from '../../common/infoBlocks/ApiCounter'
import ApiLineChart from '../../common/infoBlocks/ApiLineChart'
import ApiHorizontalBarChart from '../../common/infoBlocks/ApiHorizontalBarChart'
import ApiPieChart from '../../common/infoBlocks/ApiPieChart'
import ApiDoughnutChart from '../../common/infoBlocks/ApiDoughnutChart'
import ApiTable from '../../common/tables/ApiTable'
import ApiBarChart from '../../common/infoBlocks/ApiBarChart'
export default {
  name: 'Dashboard',
  components: {
    ApiCounter,
    ApiLineChart,
    ApiHorizontalBarChart,
    ApiPieChart,
    ApiDoughnutChart,
    ApiTable,
    ApiBarChart
  },
  data () {
    return {
    }
  },
  created () {
    this.$store.dispatch('ui/setToolbarTitle', this.$store.state.ui.DashboardToolbarTitle)
  }
}
</script>
