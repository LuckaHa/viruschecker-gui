<template>


  <v-container v-if="loaded">
    <v-layout wrap>
      <v-flex xs4>
          <div class="container">
            <div v-for="data in wholeResponse" :key="data">data: {{data}}</div>
          </div>
      </v-flex>
    </v-layout>
</v-container>

<v-container v-else grid-list-xl>
  <v-layout wrap>
      <v-flex xs4>
          <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
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
        loaded: false
      }
    },

    methods: {
      // Submits the file to the server
      submitFile(){
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
        this.loaded = true,
        console.log('SUCCESS');  
        })
        .catch(function(){
          console.log('FAILURE');
        });
      },

      // Handles a change on the file upload
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>