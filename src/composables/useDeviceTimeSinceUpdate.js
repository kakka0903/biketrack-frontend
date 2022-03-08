import { ref, watchEffect, watch, computed } from 'vue'

export function useDeviceTimeSinceUpdate (deviceDataRef) {
  const isTicking = ref(false)
  const timeSinceUpdate = ref(null)

  const timeSinceUpdateStr = computed(() => {
    var mins = timeSinceUpdate.value / 60
    var secs = timeSinceUpdate.value % 60
    return (
      Math.floor(mins).toString() + 'm ' + Math.floor(secs).toString() + 's'
    )
  })

  watch(deviceDataRef, data => {
    if (data) {
      timeSinceUpdate.value = data['secs_since_update']
    }
    if (!isTicking.value) {
      tickTime()
      isTicking.value = true
    }
  })

  function tickTime () {
    timeSinceUpdate.value += 1
    setTimeout(() => {
      tickTime()
    }, 1000)
  }

  return { timeSinceUpdate, timeSinceUpdateStr }
}
