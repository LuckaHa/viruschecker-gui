import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicInfo from '@/components/BasicInfo'
import DriversInfo from '@/components/DriversInfo'
import MultiScanFile from '@/components/MultiScanFile'
import SearchReports from '@/components/SearchReports'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'BasicInfo',
      component: BasicInfo
    },
    {
      path: '/driversInfo',
      name: 'DriversInfo',
      component: DriversInfo
    },
    {
      path: '/multiScanFile',
      name: 'MultiScanFile',
      component: MultiScanFile
    },
    {
      path: '/scanReportBy?search=',
      name: 'SearchReports',
      component: SearchReports
    }
  ],
  mode: 'history'
})
