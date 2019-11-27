import axios from 'axios'

export default {

  basicInfo () {
    return axios.get()
      .then(response => {
        return response.data
      })
  },

  driversInfo() {
    return axios.get('/driversInfo')
      .then(response => {
        return response.data
      })
  }
}
