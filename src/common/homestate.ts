export interface HomeState {
  newsList?: [];
  caseList?: [];
  staticList: [];
  mapList: [];
  rumorList: [];
  dateList: [];
  confirmedTrendList: [];
  suspectedTrendList: [];
  deadTrendList: [];
  curedTrendList: [];
  provinceList: [];
  virusDesc?: {
    confirmedCount: number;
    suspectedCount: number;
    deadCount: number;
    curedCount: number;
    seriousCount: number;
    seriousIncr: number;
    modifyTime: number | string;
    note1: string;
    note2: string;
    note3: string;
    remark1: string;
    remark2: string;
    confirmedIncr: number;
    suspectedIncr: number;
    deadIncr: number;
    curedIncr: number;
  };
  provinceName?: string;
  loading: boolean;
  trendLoading: boolean;
}
