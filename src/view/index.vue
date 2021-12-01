<template>
  <div id="map"></div>
</template>

<script>
import * as L from "leaflet";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const center = [51.055, -0.09];
    const url = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const map = ref();

    onMounted(() => {
      map.value = L.map("map", {
        center: center,
        zoom: 13,
      });
      L.tileLayer(url, {
        maxZoom: 18,
      }).addTo(map.value);
    });
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
  width: 100%;
  height: 800px;
}
</style>
