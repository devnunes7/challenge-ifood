// script.js

// Revenue chart
const revenueChartCanvas = document.getElementById('revenueChart');
const revenueChartData = {
    labels: ['09/01', '10/01', '11/01', '12/01', '13/01', '14/01', '15/01'],
    datasets: [{
        label: 'Receita Diária',
        data: [50, 55, 45, 60, 55, 40, 65],
        borderColor: '#dc3545',
        borderWidth: 2,
        fill: false,
    }]
};
const revenueChartOptions = {
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                callback: function(value) {
                    return 'R$ ' + value;
                }
            }
        }
    }
};
const revenueChart = new Chart(revenueChartCanvas, {
    type: 'line',
    data: revenueChartData,
    options: revenueChartOptions
});

// Popular products chart
const popularProductsChartCanvas = document.getElementById('popularProductsChart');
const popularProductsChartData = {
    labels: ['pizza 1', 'pizza 2', 'pizza 3', 'pizza 4'],
    datasets: [{
        label: 'Popular Products',
        data: [40, 20, 15, 25],
        backgroundColor: ['#4CAF50', '#2196F3', '#9C27B0', '#00BCD4'],
        borderWidth: 0,
    }]
};
const popularProductsChartOptions = {
    plugins: {
        legend: {
            display: false
        }
    }
};
const popularProductsChart = new Chart(popularProductsChartCanvas, {
    type: 'doughnut',
    data: popularProductsChartData,
    options: popularProductsChartOptions
});

// Mercadoria chart
const mercadoriaChartCanvas = document.getElementById('mercadoriaChart');
const mercadoriaChartData = {
    labels: ['Mercadoria'],
    datasets: [{
        label: 'Mercadoria',
        data: [50],
        backgroundColor: '#dc3545',
        borderWidth: 0,
    }]
};
const mercadoriaChartOptions = {
    plugins: {
        legend: {
            display: false
        }
    }
};
const mercadoriaChart = new Chart(mercadoriaChartCanvas, {
    type: 'doughnut',
    data: mercadoriaChartData,
    options: mercadoriaChartOptions
});

// Chart 2
const chart2Canvas = document.getElementById('chart2');
const chart2Data = {
    labels: ['....'],
    datasets: [{
        label: '....',
        data: [25],
        backgroundColor: '#dc3545',
        borderWidth: 0,
    }]
};
const chart2Options = {
    plugins: {
        legend: {
            display: false
        }
    }
};
const chart2 = new Chart(chart2Canvas, {
    type: 'doughnut',
    data: chart2Data,
    options: chart2Options
});

// Chart 3
const chart3Canvas = document.getElementById('chart3');
const chart3Data = {
    labels: ['....'],
    datasets: [{
        label: '....',
        data: [27],
        backgroundColor: '#dc3545',
        borderWidth: 0,
    }]
};
const chart3Options = {
    plugins: {
        legend: {
            display: false
        }
    }
};
const chart3 = new Chart(chart3Canvas, {
    type: 'doughnut',
    data: chart3Data,
    options: chart3Options
});

// Chart 4
const chart4Canvas = document.getElementById('chart4');
const chart4Data = {
    labels: ['....'],
    datasets: [{
        label: '....',
        data: [100],
        backgroundColor: '#dc3545',
        borderWidth: 0,
    }]
};
const chart4Options = {
    plugins: {
        legend: {
            display: false
        }
    }
};
const chart4 = new Chart(chart4Canvas, {
    type: 'doughnut',
    data: chart4Data,
    options: chart4Options
});