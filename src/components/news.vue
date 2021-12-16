<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(news, index) in newslist"
        :key="index"
        :timestamp="news.pubDate"
        placement="top"
      >
        <el-card>
          <h4>{{ news.title }}</h4>
          <p>{{ news.summary }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    newslist: Array,
  },
  setup() {},
});
</script>
