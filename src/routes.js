import React from 'react';

var path=''
switch(localStorage.getItem('access'))
{
  case '1':
  path='Admin'
  break;
  case '2':
  path="Client"
  break
  case '3':
  path='Manager'
  break
  case '4':
  path='Tl'
  break
  default:
  path='Employees'
  break;

}
const Client = React.lazy(() => import('./views/'+path+'/Client'));
const ProjectList = React.lazy(() => import('./views/'+path+'/Project/List'));
const Task = React.lazy(() => import('./views/'+path+'/Project/Task'));
const Report = React.lazy(() => import('./views/'+path+'/Project/Report'));
const Employee = React.lazy(() => import('./views/'+path+'/Employee'));
const Leaves = React.lazy(() => import('./views/'+path+'/Leaves'));
const Notification = React.lazy(() => import('./views/'+path+'/Notification'));
const Calendar = React.lazy(() => import('./views/'+path+'/Calendar/to_do'));
const UserAccount = React.lazy(() => import('./views/'+path+'/User/Account'));
const UserLogin = React.lazy(() => import('./views/'+path+'/User/Login'));
const Ticket = React.lazy(() => import('./views/'+path+'/Ticket'));
const Dashboard = React.lazy(() => import('./views/'+path+'/Dashboard/Dashboard'));
 


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/client', exact: true, name: 'Client', component: Client },
  { path: '/project/list', name: 'List', component: ProjectList },
  { path: '/project/task', name: 'Task', component: Task },
  { path: '/project/report', name: 'Report', component: Report },
  { path: '/employee', name: 'Employee', component: Employee },
  { path: '/leaves', name: 'Leaves', component: Leaves },
  { path: '/notification', exact: true, name: 'Notification', component: Notification },
  { path: '/calendar/to_do', name: 'Events', component: Calendar },
  { path: '/user/account', exact: true,  name: 'Account', component: UserAccount },
  { path: '/user/login', exact: true, name: 'Login History', component: UserLogin },
  { path: '/ticket', exact: true, name: 'Raise Ticket', component: Ticket },
];

export default routes;
