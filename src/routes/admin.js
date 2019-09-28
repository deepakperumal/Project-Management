export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
         
      },
    },
 
    {
      name: 'Clients',
      url: '/client',
      icon: 'icon-user',
    },
 
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Projects',
      url: '/project',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Project List',
          url: '/project/list',
          icon: 'icon-puzzle',
        },
        {
          name: 'Task Management',
          url: '/project/task',
          icon: 'icon-puzzle',
        },
        {
          name: 'Project Report',
          url: '/project/report',
          icon: 'icon-puzzle',
        },
       
      ],
    },
    {
      name: 'Employee',
      url: '/buttons',
      icon: 'icon-user',
      children: [
        {
          name: 'Employee List',
          url: '/employee',
          icon: 'icon-user',
        },
 
      ],
    },
    {
      name: 'Leave Requests',
      url: '/leaves',
      icon: 'icon-login',
    },

    {
      name: 'Notification',
      url: '/notification',
      icon: 'icon-bell',
    },
    {
      name: 'Calender',
      url: '/calendar',
      icon: 'icon-calendar',
      children: [
        {
          name: 'To-do List',
          url: '/calendar/to_do',
          icon: 'icon-calendar',
 
        },
        
      ],
    },
    {
      name: 'User Management',
      url: '/user',
      icon: 'icon-user',
      children: [
        {
          name: 'User Accounts',
          url: '/user/account',
          icon: 'icon-user',
        },
        {
          name: 'User Login History',
          url: '/user/login',
          icon: 'icon-user',
        },
  
      ],
    },

    {
      divider: true,
    },
    {
      title: true,
      name: 'Extras',
    },
    {
      name: 'Raise Tickets',
      url: '/ticket',
      icon: 'icon-star',
 
    },
     
  ],
};
