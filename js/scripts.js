document.addEventListener('DOMContentLoaded', function () {
  
  // Add event listeners to the input fields for each month to update the chart data when changed
  document.getElementById('chart-tab').addEventListener('click', updateChartData);
});

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
      label: 'Monthly Income',
      data: Array(12).fill(0),
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }, {
      label: 'Monthly Expenses',
      data: Array(12).fill(0),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
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


const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];


// Function to update the chart data 
function updateChartData() {
    months.forEach((month, index) => {
      const incomeElement = document.getElementById(`${month}-income`);
      const expensesElement = document.getElementById(`${month}-expenses`);
      
      const income = incomeElement ? parseFloat(incomeElement.value) || 0 : 0;
      const expenses = expensesElement ? parseFloat(expensesElement.value) || 0 : 0;
      
      myChart.data.datasets[0].data[index] = income;
      myChart.data.datasets[1].data[index] = expenses;
    });
    myChart.update();
  }