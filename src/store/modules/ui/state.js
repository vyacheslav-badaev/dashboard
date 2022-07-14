export default () => ({
  loginTitle: 'Spartan Dashboard',
  loginInfoBlocks: [
    {icon: 'lock_outline', header: 'Authentication', text: 'Login with your Rotterdam University username and password.'},
    {icon: 'security', header: 'Security', text: 'For security reasons, please log out and exit your web browser when you are done accessing services that require authentication!'}
  ],
  toolbarTitle: '',
  toolbarButtons: [],
  navigationTitle: 'Spartan Dashboard',
  navigationItems: [
    { title: 'Dashboard', icon: 'dashboard', link: '/' },
    { title: 'Calender', icon: 'view_day', link: '/calender' },
    { title: 'Schedule', icon: 'today', link: '/schedule' },
    { title: 'Notifications', icon: 'contact_support', link: '/notifications' }
  ],
  DashboardOverviewToolbarTitle: 'Dashboard',
  ScheduleOverviewToolbarTitle: 'HR Schedule',
  NotificationsOverviewToolbarTitle: 'Notifications',
  CalenderOverviewToolbarTitle: 'All Calender Events',
  TicketsOverviewToolbarTitle: 'All notification tickets',
  DemoToolbarTitle: 'Demo'
})
