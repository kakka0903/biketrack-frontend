import { ref, watchEffect, watch, computed } from 'vue'

export function useDeviceBattery (deviceDataRef) {
  const batteryVoltage = ref(null)
  watch(deviceDataRef, device => {
    batteryVoltage.value = device['data']['battery_voltage']
  })
  const batteryVoltageStr = computed(() => {
    return (Math.round(batteryVoltage.value * 1000) / 1000).toString() + 'V'
  })
  return { batteryVoltageStr }
}
