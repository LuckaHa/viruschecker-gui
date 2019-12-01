<template>

  <v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="blue">
      </v-progress-circular>
    </div>
  </v-container>

  <v-container v-else grid-list-xl>
    <v-layout wrap>
      <div id="app">
        <h1>Welcome</h1><br>
        <p>This is a web interface of the VirusChecker, version: {{ wholeResponse.gatewayVersion }}</p>
        <p>These are the currently deployed antivirus drivers.</p>
        <p>Antivirus: Kaspersky, Microsoft, VirusTotal <br> Driver version: 0.23.0</p>
      </div>
  </v-layout>
</v-container>
</template>

<script>
import api from '@/services/Api'

export default {
  data () {
    return {
      wholeResponse: [],
      loading: true
    }
  },
  mounted () {
    api.basicInfo()
      .then(response => {
        this.wholeResponse = response
        this.loading = false
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
