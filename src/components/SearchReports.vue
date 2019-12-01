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
      <v-flex xs4>
        <v-data-iterator :items="wholeResponse">
          <v-flex slot="item" slot-scope="props">
							<v-card>
								<v-list dense>
									<v-list-tile>
										<v-list-tile-content>URL:</v-list-tile-content>
										<v-list-tile-content class="align-end">{{ props.item.url }}</v-list-tile-content>
									</v-list-tile>
								</v-list>
                <v-divider></v-divider>
                <v-list dense>
									<v-list-tile>
										<v-list-tile-content>Success:</v-list-tile-content>
										<v-list-tile-content class="align-end">{{ props.item.success }}</v-list-tile-content>
									</v-list-tile>
								</v-list>
                <v-divider></v-divider>
                <v-card-title>
									<h4>Info</h4>
								</v-card-title>
                <v-list dense>
									<v-list-tile>
										<v-list-tile-content>Driver Version:</v-list-tile-content>
										<v-list-tile-content class="align-end">{{ props.item.info.driverVersion }}</v-list-tile-content>
									</v-list-tile>
								</v-list>
                <v-list dense>
									<v-list-tile>
										<v-list-tile-content>Antivirus:</v-list-tile-content>
										<v-list-tile-content class="align-end">{{ props.item.info.antivirus }}</v-list-tile-content>
									</v-list-tile>
								</v-list>
							</v-card>
          </v-flex>
        </v-data-iterator>
      </v-flex>
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
    api.driversInfo()
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
