<template>
  <v-container v-if="loaded">
    <v-layout wrap>
      <v-flex xs4>
          <div class="container">
            <h1>Scan report for {{wholeResponse.data.report.filename}}</h1>
            <!-- <p>Time: <span>{{ wholeResponse.data.report.date | moment("YYYY-MM-DD, hh:mm:ss") }}</span></p> -->
            <!-- <span>{{ wholeResponse.data.report.date | formatDate}}</span> -->
            <p>Time: {{myDate}}</p>
            <h2>Scan result</h2>
            <div v-if="wholeResponse.data.report.status === 'OK'">
              <p class="green--text">{{wholeResponse.data.report.status}}</p><br>
            </div>
            <div v-else>
              <p class="red--text">{{wholeResponse.data.report.status}}</p><br>
            </div>
            <p>SHA-256 <br> {{wholeResponse.data.sha256}}</p>
            <p>SHA-1 <br> {{wholeResponse.data.sha1}}</p>
            <p>MD5 <br> {{wholeResponse.data.md5}}</p><br><br>
            <h3>Antivirus reports</h3>
            <v-divider></v-divider>
            <div v-for="result in wholeResponse.data.report.results" :key="result">
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
            <!-- <div v-for="data in wholeResponse" :key="data">data: {{data}}</div> -->
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
            <h1>Scan file</h1><br>
            <p>Scan can take up to 50 seconds.</p><br>
            <div class="large-12 medium-12 small-12 cell">
              <label>
                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
              </label>
              <br>
            </div><br>
            <!-- <v-checkbox label="Upload hash to external services like VirusTotal"></v-checkbox> -->
            <input type="checkbox" value="Upload hash to external services like VirusTotal" v-model="checked" @change="check(checked)">Upload hash to external services like VirusTotal
            <v-btn v-on:click="submitFile()">Scan file</v-btn>
          </div>
      </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  import axios from 'axios'

  export default {
    // Defines the data used by the component
    data(){
      return {
        wholeResponse: Object,
        file: '',
        loaded: false,
        loading: false,
        checked: false
      };
      let timestamp = { seconds: 1549843200, nanoseconds: 0 };     
      let myDate = new Date(timestamp.seconds * 1000);
    },

    methods: {
      check (e) {
        checked = !checked;
        console.log(checked)
      },
      
      // Submits the file to the server
      submitFile () {
            this.loading = true;
            // Initialize the form data
            let formData = new FormData();

            //Add the form data we need to submit
            formData.append('file', this.file);
            

            // Make the request to the POST /multiScanFile URL
            axios.post( '/multiScanFile',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(response => {
        this.wholeResponse = response,
        this.loading = false,
        this.loaded = true,
        timestamp = this.wholeResponse.data.report.date,   
        myDate = new Date(timestamp.seconds * 1000),
        console.log('SUCCESS');
        })
        .catch(function(){
          console.log('FAILURE');
        });
      },

      // Handles a change on the file upload
      handleFileUpload () {
        this.file = this.$refs.file.files[0];
      },
    }
  }
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>