<template>
  <p>确诊</p>
  <p :style="{ color: color }"></p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props:{
      title:{
          type:String,
          required:true,
      },
      color:{
        type:String,
        required:true,
      },
      addCount:{
        type:Number,
        required:true,
      },
      Count:{
          type:Number,
          required:true,
      }
  }
  setup(){

  },
});
</script>

<style scoped></style>
