import { ref, watch, computed } from 'vue'

export function useDeviceBattery (deviceDataRef) {
  const batteryVoltage = ref(null)
  watch(deviceDataRef, device => {
    batteryVoltage.value = device['battery_voltage']
  })
  const batteryVoltageStr = computed(() => {
    return (Math.round(batteryVoltage.value * 1000) / 1000).toString() + 'V'
  })
  return { batteryVoltageStr }
}
