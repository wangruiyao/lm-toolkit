const Home = r => require.ensure([], () => r(require('../examples/Examples')), 'Home')

const BroadbandAddress = r => require.ensure([], () => r(require('../modules/broadbandAddress/BroadbandAddress')), 'BroadbandAddress')
export default [{
  path: '/',
  component: Home,
  children: [
    { // 首页
      path: '',
      redirect: '/broadbandAddress'
    },
    { // 首页
      path: '/broadbandAddress',
      name: 'broadbandAddress',
      component: BroadbandAddress
    }
  ]
}]