<template>
  <div>{{ count }}</div>
</template>

<script>
import { defineComponent, ref } from "vue";
import * as L from "leaflet";
export default defineComponent({
  setup() {
    const count = ref(1);

    return {
      count,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
