<template>
  <el-container>
    <el-header>
      <el-tabs>
        <el-tab-pane label="疫情地图"
          ><el-row>
            <el-col :span="6" offset="6">
              <el-input placeholder="输入国家" v-model="input"
                ><template #append>
                  <el-button :icon="Search"></el-button>
                </template> </el-input
            ></el-col> </el-row
        ></el-tab-pane>

        <el-tab-pane label="疫情消息">
          <News :newslist="state.newsList" />
        </el-tab-pane>
      </el-tabs>
    </el-header>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from "vue";
import { Search } from "@element-plus/icons-vue";
import { getVirusData } from "@/service/getdata";
import dayjs from "dayjs";
import News from "@/components/news.vue";
import { HomeState } from "@/common/homestate";
export default defineComponent({
  setup() {
    const origin: HomeState = {
      newsList: [],
      caseList: [],
      virusDesc: {
        confirmedCount: 0,
        suspectedCount: 0,
        deadCount: 0,
        curedCount: 0,
        seriousCount: 0,
        modifyTime: 0,
        note1: "",
        note2: "",
        note3: "",
        remark1: "",
        remark2: "",
        confirmedIncr: 0,
        suspectedIncr: 0,
        deadIncr: 0,
        curedIncr: 0,
        seriousIncr: 0,
      },
      staticList: [],
      mapList: [],
      rumorList: [],
      provinceName: "全国", //是否点击了某个省份
      dateList: [],
      confirmedTrendList: [],
      suspectedTrendList: [],
      deadTrendList: [],
      curedTrendList: [],
      provinceList: [],
      loading: true,
      trendLoading: true,
    };
    const input = ref("");
    const state = reactive(origin);
    const getdata = async () => {
      const res = await getVirusData();
      if (res.status === 200) {
        const { news } = res.data.newslist[0];
        news.forEach((item: any) => {
          item.pubDate = dayjs(item.pubDate).format("YYYY年MM月DD日 HH:mm");
        });
        state.newsList = news;
      }
    };
    onMounted(() => {
      getdata();
    });
    return {
      input,
      state,
      Search,
    };
  },
  components: { News },
});
</script>

<style></style>
