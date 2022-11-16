<script setup>
import card from "./card.vue";

defineProps({
    isDeviceExpanded: Boolean,
    deviceName: String,
    approxAddress: String,
})
</script>

<template>
    <card class="flex h-20 gap-4 p-2">
        <div class="w-16 h-full overflow-hidden bg-white border border-blue-100 rounded-xl">
            <img class="scale-150 -translate-x-3 translate-y-1 " src="../public/bike.png" alt="">
        </div>
        <div class="flex flex-col text-lg">
            <div class="flex items-center text-2xl h-2/3">{{deviceName}}</div>
            <div class="flex items-start -mt-1 text-xs text-gray-600 h-1/3">Near <i class="ml-1">{{approxAddress}}</i> </div>
        </div>
        <button class="flex items-center self-center justify-end h-full grow" @click="isDeviceExpanded = !isDeviceExpanded " >
            <div class="flex items-center p-2 px-2 mr-4 text-xs font-bold text-blue-700 transition border border-blue-700 rounded-full shadow-md cursor-pointer hover:bg-blue-700 hover:text-white">
                <div class="transition" :class="{'rotate-90': isDeviceExpanded }">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
                </div>
            </div>
        </button>
    </card>
</template>