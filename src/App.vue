<script setup>
import { ref } from "vue"
import { useDevice } from "./composables/useDevice";
import { useDeviceTimeSinceUpdate } from "./composables/useDeviceTimeSinceUpdate";
import { useDeviceBattery } from "./composables/useDeviceBattery"
import { useDeviceLocation } from "./composables/useDeviceLocation"
import centeredLayout from "./components/centeredLayout.vue";
import deviceStatCard from "./components/deviceStatCard.vue";
import deviceLocationCard from "./components/deviceLocationCard.vue";
import deviceInfoCard from "./components/deviceInfoCard.vue";
import card from "./components/card.vue";

import { LightningBoltIcon, GlobeAltIcon, LocationMarkerIcon } from "@heroicons/vue/outline";

const { data, error } = useDevice("koga-miyata")
const { timeSinceUpdateStr } = useDeviceTimeSinceUpdate(data)
const { batteryVoltageStr } = useDeviceBattery(data)
const { deviceLocation } = useDeviceLocation(data)
</script>

<template>
    <centeredLayout>
      <div class="flex flex-col w-full max-w-lg gap-4 py-10">
        <deviceInfoCard deviceName="Koga Miyata" approxAddress="Broerstraat 5"/>
        <div class="flex gap-4 h-28">
          <deviceStatCard :icon="LightningBoltIcon" class="w-1/2" :value="batteryVoltageStr" subtext="Battery voltage"/>
          <deviceStatCard :icon="GlobeAltIcon" class="w-1/2" :value="timeSinceUpdateStr" subtext="Since last update"/>
        </div>
        <deviceStatCard :icon="LocationMarkerIcon" class="w-full h-28" value="Broerstraat 5" subtext="Nearest address"/>
        <deviceLocationCard :location="deviceLocation" class="h-56"/>
        <card> {{ data }} </card>
      </div>
    </centeredLayout>
</template>


