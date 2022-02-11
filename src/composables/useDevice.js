import { ref } from 'vue'

export function useDevice (deviceName) {
  const data = ref(null)
  const error = ref(null)

  var api_url = import.meta.env.VITE_API_URL
  var post_data = { device_name: deviceName }

  fetch(api_url + '/api/latest', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post_data)
  })
    .then(res => res.json())
    .then(json => (data.value = json))
    .catch(err => (error.value = err))

  return { data, error }
}
