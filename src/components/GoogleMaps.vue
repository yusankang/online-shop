<template>
    <GoogleMap :api-key="apiKey"
        style="width: 100%; height: 400px" :center="{ lat: lat, lng: lng }" :zoom="15">
        <Marker :options="{ position: { lat: lat, lng: lng } }" />
    </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map';

export default {
  components: {
    GoogleMap,
    Marker,
  },
  data() {
    return {
      apiKey: process.env.VUE_APP_GOOGLE_MAP_API,
      lat: 25.014446148261754,
      lng: 121.46735576904118,
    };
  },
};
</script>
