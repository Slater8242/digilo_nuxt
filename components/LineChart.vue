<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

const chartCanvas = ref(null);

onMounted(() => {
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");

    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, "rgba(0, 200, 0, 0.3)");
    gradient.addColorStop(1, "rgba(0, 200, 0, 0)");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Dec", "Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "Account Value",
            data: [2700, 2500, 2900, 2800, 3200, 3400],
            borderColor: "#2ecc71",
            backgroundColor: gradient,
            fill: true,
            tension: 0.3,
            pointRadius: 0,
            pointBackgroundColor: "#ffffff",
            pointBorderColor: "#2ecc71",
            pointHoverRadius: 14,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            mode:"index",
            intersect:false,
            callbacks: {
              label: (tooltipItem) => `$ ${tooltipItem.raw}`,
            },
          },
        },
        scales: {
          x: { 
            grid: { display: false },
            ticks: {color: "#444", font: { weight: "bold" }}
          },
          y: { display: false },
        },
      },
    });
  }
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 250px;
  position: relative;
}
</style>
