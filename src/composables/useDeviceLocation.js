import { ref, watch } from 'vue'

export function useDeviceLocation (deviceDataRef) {
  const deviceLocation = ref([0.0, 0.0])
  watch(deviceDataRef, device => {
    deviceLocation.value = [device['lon'], device['lat']]
  })

  return { deviceLocation }
}
