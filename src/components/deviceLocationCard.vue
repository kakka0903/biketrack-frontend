<script setup>
import { onMounted, watch } from 'vue'
import card from "./card.vue";
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

var map = null
var marker = null

const props = defineProps({
    location: Array
})

function mountMap() {
    console.log("creating map")
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    map = new mapboxgl.Map({
        container: 'mapbox-map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: props.location,
        zoom: 14,
        interactive: true,

    }); 
}

function update(location) {
    if (map != null) {
        if (marker === null) { 
            console.log("creating marker")
            marker = new mapboxgl.Marker().setLngLat(location).addTo(map) 
        } else {
            console.log("updating marker")
            marker.setLngLat(location)
        }
        map.panTo(location)
    }
}


watch(() => props.location, (newVal) => { update(newVal) });

onMounted(() => {
    setTimeout(() => { 
        mountMap() 
        update(props.location)
    }, 500);
})

</script>

<template>
    <card class="overflow-hidden" >
        <div class="w-full h-full" id="mapbox-map"></div>
    </card>
</template>