<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link
        to='/'
        tag='span'
        style='cursor: pointer'>
        Virus Checker
        </router-link>
      </v-toolbar-title>

      <v-btn flat @click="getGatewayVersion">
        <span class="mr-2">Home</span>
      </v-btn>

      <v-btn flat @click="getDriversInfo">
        <span class="mr-2">Info about drivers</span>
      </v-btn>

      <v-btn flat @click="multiScanFile">
        <span class="mr-2">Scanner</span>
      </v-btn>

      <v-btn flat @click="searchReports">
        <span class="mr-2">Search Reports</span>
      </v-btn>
    </v-toolbar>

    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import MultiScanFile from '@/components/MultiScanFile'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      searchString: ''
    }
  },
  methods: {
    getGatewayVersion () {
      this.$router.push('/')        
    },
    getDriversInfo () {
      this.$router.push('/driversInfo')        
    },
    multiScanFile () {
      this.$router.push('/multiScanFile')
    },
    searchReports () {
      this.$router.push('/scanReportBy?search=')
    }
  },
  computed: {
    dataAvailable () {
      return this.searchString !== null && this.searchString !== ''
    }
  }
}
</script>
