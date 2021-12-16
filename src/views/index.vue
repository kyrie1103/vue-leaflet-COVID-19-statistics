<template>
  <div id="map"></div>
  <el-button type="primary">11</el-button>
</template>

<script>
import * as L from "leaflet";
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  setup() {
    const center = [30, 120];
    const url = "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const map = ref();

    onMounted(() => {
      map.value = L.map("map", {
        center: center,
        zoom: 15,
      });
      L.tileLayer(url, {
        maxZoom: 18,
      }).addTo(map.value);
    });
  },
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 800px;
}
</style>
