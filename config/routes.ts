export default [
  {
<<<<<<< HEAD
    path: '/login',
    layout: false,
    routes: [
      {
        path: '/login',
        routes: [
          {
            name: 'login',
            path: '/login',
            component: './Login',
=======
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
<<<<<<< HEAD
=======
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
<<<<<<< HEAD
    path: '/dashboard',
    name: 'dashboard',
    icon: 'PieChartOutlined',
    access: 'canJunge',
    routes: [
      {
        path: '/dashboard',
        redirect: '/dashboard/analysis'
      },
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        component: './dashboard/analysis'
      }
    ]
  },
  { 
    path: '/usersetting',
    name: 'usersetting',
    icon: 'UserOutlined',
    access: 'canJunge',
    routes: [
      {
        path: '/usersetting',
        redirect: '/usersetting/userlist'
      },
      {
        path: '/usersetting/userlist',
        name: 'userlist',
        component: './usersetting/userlist'
      }
    ]
  },
  { 
    path: '/goodsetting',
    name: 'goodsetting',
    icon: 'ShoppingOutlined',
    access: 'canJunge',
    routes: [
      {
        path: '/goodsetting',
        redirect: '/goodsetting/goodlist'
      },
      {
        path: '/goodsetting/goodlist',
        name: 'goodlist',
        component: './goodsetting/goodlist'
      }
    ]
  },
  {
    path: '/person',
    name: 'person',
    icon: 'crown',
    component: './person'
  },
  {
    path: '/',
    redirect: '/person',
=======
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
>>>>>>> 223b9a9473b60b7f598598f40e4c843d9aa3ae39
  },
  {
    component: './404',
  },
];
