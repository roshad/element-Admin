<template>
  <div class="chart-container">
    <div id="chart" style="width: 600px;height:400px;" />
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'LineChart',
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById('chart')
      console.log(echarts)
      var myChart = echarts.init(chartDom)
      var option

      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      }

      option && myChart.setOption(option)
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
