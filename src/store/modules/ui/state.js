export default () => ({
  loginTitle: 'Spartan Dashboard',
  loginInfoBlocks: [
    {icon: 'lock_outline', header: 'Authentication', text: 'Login with your Rotterdam University username and password.'},
    {icon: 'security', header: 'Security', text: 'For security reasons, please log out and exit your web browser when you are done accessing services that require authentication!'}
  ],
  toolbarTitle: '',
  navigationTitle: 'Spartan Dashboard',
  navigationItems: [
    { title: 'Dashboard', icon: 'dashboard', link: '/' },
    { title: 'Calender', icon: 'view_day', link: '/calender' },
    { title: 'Students', icon: 'school', link: '/students' },
    { title: 'Teachers', icon: 'supervisor_account', link: '/teachers' },
    { title: 'Servicedesk employees', icon: 'ac_unit', link: '/servicedesk' },
    { title: 'Admins', icon: 'verified_user', link: '/admins' }
  ],
  DashboardOverviewToolbarTitle: 'Dashboard',
  CalenderOverviewToolbarTitle: 'All Calender Events',
  StudentsOverviewToolbarTitle: 'All Students',
  TeachersOverviewToolbarTitle: 'All Teachers',
  ServicedeskOverviewToolbarTitle: 'All Servicedesk Employees',
  AdminsOverviewToolbarTitle: 'All Admins',
  DemoToolbarTitle: 'Demo'
})
