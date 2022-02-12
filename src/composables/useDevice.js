import { ref } from 'vue'

export function useDevice (deviceName) {
  /* Composable providing access to updated device data from api */

  // get update frequency or set to default value
  var update_frequency = import.meta.env.VITE_DEVICE_UPDATE_FREQ
  update_frequency = !update_frequency ? 5 : update_frequency

  const data = ref(null)
  const error = ref(null)

  var api_url = import.meta.env.VITE_API_URL
  var post_data = { device_name: deviceName }

  // fetching the data
  function doFetch () {
    fetch(api_url + '/api/latest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post_data)
    })
      .then(res => res.json())
      .then(json => (data.value = json[deviceName]))
      .catch(err => (error.value = err))
      .finally(() => {
        // update again after a given delay
        setTimeout(() => {
          doFetch()
        }, update_frequency * 1000)
      })
  }

  doFetch()

  return { data, error }
}
