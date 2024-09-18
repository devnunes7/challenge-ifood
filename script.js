const receitaChartCanvas = document.getElementById('receitaChart');
const receitaChart = new Chart(receitaChartCanvas, {
    type: 'line',
    data: {
        labels: ['09/01', '10/01', '11/01', '12/01', '13/01', '14/01', '15/01'],
        datasets: [{
            label: 'Receita',
            data: [50, 40, 60, 70, 65, 50, 75],
            borderColor: 'red',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const produtosChartCanvas = document.getElementById('produtosChart');
const produtosChart = new Chart(produtosChartCanvas, {
    type: 'doughnut',
    data: {
        labels: ['pizza 1', 'pizza 2', 'pizza 3', 'pizza 4'],
        datasets: [{
            data: [30, 25, 20, 25],
            backgroundColor: ['#4CAF50', '#2196F3', '#9C27B0', '#FFC107'],
            borderWidth: 0
        }]
    },
    options: {
        cutout: '70%'
    }
});

