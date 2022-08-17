export default () => ({
  loginTitle: 'Spartan Dashboard',
  loginInfoBlocks: [
    {icon: 'lock_outline', header: 'Authentication', text: 'Login with your Rotterdam University username and password.'},
    {icon: 'security', header: 'Security', text: 'For security reasons, please log out and exit your web browser when you are done accessing services that require authentication!'}
  ],
  toolbarTitle: '',
  toolbarButtons: [],
  snackbarMessage: '',
  navigationTitle: 'Spartan Dashboard',
  navigationItems: [
    { title: 'Dashboard', icon: 'dashboard', link: '/' },
    { title: 'Schedule', icon: 'today', link: '/schedule' },
    { title: 'Notifications', icon: 'contact_support', link: '/notifications' },
    { title: 'Rooms', icon: 'meeting_room', link: '/rooms' },
    { title: 'Calenders', icon: 'view_day', link: '/calendar' }
  ],
  DashboardToolbarTitle: 'Spartan Dashboard',
  ScheduleOverviewToolbarTitle: 'HR Schedule',
  NotificationsOverviewToolbarTitle: 'All Notifications',
  RoomsOverviewToolbarTitle: 'All Rooms',
  CalendarOverviewToolbarTitle: 'All Rooms Calendars',
  DemoToolbarTitle: 'Demo'
})
