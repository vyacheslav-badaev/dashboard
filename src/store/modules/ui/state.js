export default () => ({
  loginTitle: 'Spartan Dashboard',
  loginInfoBlocks: [
    {icon: 'lock_outline', header: 'Authentication', text: 'Login with your Rotterdam University username and password.'},
    {icon: 'security', header: 'Security', text: 'For security reasons, please log out and exit your web browser when you are done accessing services that require authentication!'}
  ],
  navigationTitle: 'Spartan Dashboard',
  navigationItems: [
    { title: 'Dashboard', icon: 'dashboard' },
    { title: 'Calender', icon: 'view_day' },
    { title: 'Students', icon: 'school' },
    { title: 'Teachers', icon: 'supervisor_account' },
    { title: 'Servicedesk employees', icon: 'ac_unit' },
    { title: 'Admins', icon: 'verified_user' }
  ]
})
