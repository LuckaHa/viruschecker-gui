<template>
  <v-container v-if="loaded">
    <v-layout wrap>
      <v-flex xs4>
          <div class="container">
            <div v-for="scan in wholeResponse.data" :key="scan">
              <h1>Scan report for {{scan.report.filename}}</h1>
                <!-- <p>Time: <span>{{ wholeResponse.data.report.date | moment("YYYY-MM-DD, hh:mm:ss") }}</span></p> -->
                <!-- <span>{{ wholeResponse.data.report.date | formatDate}}</span> -->
                <p>Time: {{myDate}}</p>
                <h2>Scan result</h2>
                <div v-if="scan.report.status === 'OK'">
                  <p class="green--text">{{scan.report.status}}</p><br>
                </div>
                <div v-else>
                  <p class="red--text">{{scan.report.status}}</p><br>
                </div>
                <p>SHA-256 <br> {{scan.sha256}}</p>
                <p>SHA-1 <br> {{scan.sha1}}</p>
                <p>MD5 <br> {{scan.md5}}</p><br><br>
                <h3>Antivirus reports</h3>
                <v-divider></v-divider>
                <div v-for="result in scan.report.results" :key="result">
                  <div v-if="result.malwareDescription === 'OK'">
                    <div class="green--text">{{result.malwareDescription}}</div> {{result.antivirus}}  {{result.virusDatabaseVersion}}
                  </div>
                  <div v-else>
                    <div class="red--text">{{result.malwareDescription}}</div> {{result.antivirus}}  {{result.virusDatabaseVersion}}
                  </div>
                  <v-divider style="width: 20px;"></v-divider>
                </div>
                <div v-if="checked">
                  <p class="red--text">TODO: VirusTotal</p><br>
                </div>
                <br>
            </div>
          </div>
      </v-flex>
    </v-layout>
</v-container>

<v-container v-else-if="loading">
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
      <v-flex xs4>
          <div class="container">
            <h1>Scan reports</h1>
            <input v-model="message" placeholder="edit me">
            <v-btn v-on:click="submit()">Search</v-btn>
          </div>
      </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import axios from 'axios'

export default {
  // Defines the data used by the component
  data () {
    return {
      wholeResponse: Object,
      file: '',
      loaded: false,
      loading: false,
      message: ""
    }
  },

  methods: {
    // Submits message to the server
    submit () {
          this.loading = true;
          // upravit hladany vyraz tak, aby boli scany oddelene ciarkami
          this.message = this.message.replace(/, /g, ",");
          this.message = this.message.replace(/ /g, ",");
          if(!this.message.endsWith(',')) {//charAt(this.message.length-1).en) {
            this.message = this.message.concat(',');
          }
          // najst vysledky
          axios.get( '/scanReportBy/'.concat(this.message))
          .then(response => {
      this.wholeResponse = response,
      this.loading = false,
      this.loaded = true,
      console.log('SUCCESS')
      })
      .catch(function(){
          console.log('FAILURE')
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
