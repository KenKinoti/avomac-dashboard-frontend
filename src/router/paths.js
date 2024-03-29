/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },  {
    path: '/payments',
    name: 'Payments',
    view: 'Payments'
  },  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },  {
    path: '/typography',
    view: 'Typography'
  },  {
    path: '/icons',
    view: 'Icons'
  },  {
    path: '/maps',
    view: 'Maps'
  },  {
    path: '/notifications',
    view: 'Notifications'
  },  {
    path: '/delivery',
    name: 'Delivery',
    view: 'Delivery'
  },  {
    path: '/supplier',
    name: 'Supplier',
    view: 'Supplier'
  },  {
    path: '/add-delivery',
    name: 'Add Delivery',
    view: 'AddDelivery'
  },  {
    path: '/add-supplier',
    name: 'Add Supplier',
    view: 'AddSupplier'
  },  {
    path: '/add-Production',
    name: 'Add Production',
    view: 'AddProduction'
  },  {
    path: '/production',
    name: 'Production Management',
    view: 'Production'
  },  {
    path: '/quality',
    name: 'Quality Analysis',
    view: 'Quality'
  },
]
