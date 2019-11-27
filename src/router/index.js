import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicInfo from '@/components/BasicInfo'
import DriversInfo from '@/components/DriversInfo'
import MultiScanFile from '@/components/MultiScanFile' 

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
    }
  ],
  mode: 'history'
})
