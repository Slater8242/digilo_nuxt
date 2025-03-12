<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'


ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      intersect: false
    }
  },
  scales: {
    x: { display: true },
    y: { display: false }
  }
}


const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Sales',
      data: [10, 20, 15, 30, 25],
      borderColor: 'blue',
      borderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
      fill: false
    }
  ]
}

</script>

<template>
  <Line
    :options="chartOptions"
    :data="chartData"
  />
</template>

<style scoped>

</style>