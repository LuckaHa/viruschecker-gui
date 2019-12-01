<template>
  <v-container v-if="loaded">
    <v-layout wrap>
      <v-flex xs4>
          <div class="container">
          <p>Loaded</p>
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
      <p>Loading</p>
    </div>
  </v-container>

<v-container v-else grid-list-xl>
  <v-layout wrap>
      <v-flex xs4>
          <div class="container">
            <h1>Scan reports</h1>
            <input v-model="message" placeholder="edit me">
            <p>Message is: {{ message }}</p>
            <v-btn v-on:click="submit()">Search</v-btn>
          </div>
      </v-flex>
  </v-layout>
</v-container>
</template>

<script>


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
    // Submits the file to the server
    submit () {

    }
  }
}
</script>

<style lang="stylus" scoped>
  .v-progress-circular
    margin: 1rem
</style>
