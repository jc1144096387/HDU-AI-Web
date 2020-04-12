<template>
  <div :id="chartId" style="width: 100%; height: 100%;"></div>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 引入折线图
require("echarts/lib/chart/line");
// 引入提示框、标题组件、图例
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");

export default {
  name: "chart",
  props: {
    chartId: String,
    xData: Array,
    // itemData: Array,
    series: Array,
    legend: Object
  },
  data() {
    return {};
  },
  watch: {
    // xData: function(val){
    //   this.renderChart();
    // },
    series: function(val) {
      this.renderChart();
    }
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    // 渲染折线图
    renderChart() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(this.chartId));
      // 绘制图表
      myChart.setOption({
        // title: {
        //   text: "调用总量（近30天）",
        //   textStyle: {
        //     color: "#323232",
        //     fontSize: 20,
        //     fontWeight: "normal"
        //   }
        // },
        legend: this.legend,
        //设置canvas内部表格的内距
        grid: {
          x: 40,
          y: 20,
          x2: 40,
          y2: 60,
          borderWidth: 10
        },
        tooltip: {
          trigger: "axis"
          // formatter: '{b0}<br />{a0}:{c0}'
        },
        xAxis: {
          type: "category",

          data: this.xData,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            interval: 5
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        },
        series: this.series
      });
    }
  }
};
</script>
<style>
</style>
