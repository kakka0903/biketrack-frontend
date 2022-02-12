<script setup>
import { computed } from "vue";
import card from "./card.vue";
import { ChartPieIcon } from "@heroicons/vue/outline";

const props = defineProps({
    value: String,
    subtext: String,
    icon: {
        type: Function,
        default: ChartPieIcon
    },

})

</script>

<template>
    <card class="gap-5">
        <div class="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-400">
            <component class="w-6 h-6" :is="icon"/>
        </div>
        <div class="flex-col">
            <p class="text-xl">{{value}}</p>
            <p class="text-xs text-gray-500">{{subtext}}</p>
        </div>
    </card>
</template>