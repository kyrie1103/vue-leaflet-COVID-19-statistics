<template>
  <div id="main" style="width: 600px; height: 400px"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  setup() {
    onMounted(() => {
      const mycharts = echarts.init(
        document.getElementById("main") as HTMLElement
      );
      const option: echarts.EChartsCoreOption = {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      };
      mycharts.setOption(option);
    });

    return {};
  },
});
</script>
