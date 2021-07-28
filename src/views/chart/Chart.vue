<template>
  <div
    :id="id"
    :data="data"
    :class="className"
    style="height:100%;width:100%;"
  />
</template>

<script>
import * as echarts from 'echarts'
import resize from './resize'
import { getChart } from '@/api/general'
export default {
  name: 'LineChart',
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return { data: undefined, loading: true }
  },
  created() {
    getChart().then(
      res => {
        this.data = res.data
        this.initChart()
      },
      err => console.log(err)
    )
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.data,
            type: 'line'
          }
        ]
      })
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
