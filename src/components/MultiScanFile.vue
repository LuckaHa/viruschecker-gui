<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
      </label>
      <button v-on:click="submitFile()">Submit</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    // Defines the data used by the component
    data(){
      return {
        file: ''
      }
    },

    methods: {
      // Submits the file to the server
      submitFile(){
            // Initialize the form data
            let formData = new FormData();

            //Add the form data we need to submit
            formData.append('file', this.file);

            // Create hash
            var sha256File = require('sha256-file');
            sha256File(this.file); 
            sha256File(this.file, function (error, sum) {
              if (error) return console.log(error);
              console.log(sum)
            })

            // Make the request to the POST /single-file URL
            axios.post( '/scanFile',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
            ).then(function(){
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