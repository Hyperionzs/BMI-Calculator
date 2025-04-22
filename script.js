// script.js - Phase 1 Improvements
let history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
let bmiChart;
let useMetric = localStorage.getItem('useMetric') !== 'false'; // Default to metric

window.onload = () => {
    updateHistory(); // Show history when page loads
    initializeChart(); // Initialize the chart
    
    // Set unit toggle based on saved preference
    document.getElementById('unitToggle').checked = useMetric;
    updateUnitLabels();
    
    // Add event listeners for enter key
    document.getElementById("height").addEventListener("keyup", function(event) {
        if (event.key === "Enter") calculateBMI();
    });
    
    document.getElementById("weight").addEventListener("keyup", function(event) {
        if (event.key === "Enter") calculateBMI();
    });
    
    // Remove the problematic event listener - targetBMI doesn't exist yet
    // We'll add this event listener when the modal is created
    
    // Load dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('toggleModeBtn').textContent = '🌞 Light Mode';
    }
};

function toggleUnit() {
    useMetric = document.getElementById('unitToggle').checked;
    localStorage.setItem('useMetric', useMetric);
    updateUnitLabels();
    
    // Clear inputs to prevent confusion
    document.getElementById("height").value = '';
    document.getElementById("weight").value = '';
    
    // Show notification
    showNotification(useMetric ? "Changed to Metric (cm/kg)" : "Changed to Imperial (in/lbs)");
}

function updateUnitLabels() {
    const heightLabel = document.getElementById('heightLabel');
    const weightLabel = document.getElementById('weightLabel');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    
    if (useMetric) {
        heightLabel.innerHTML = '<i class="fas fa-ruler-vertical"></i> Height (cm)';
        weightLabel.innerHTML = '<i class="fas fa-weight"></i> Weight (kg)';
        heightInput.placeholder = 'e.g. 170';
        weightInput.placeholder = 'e.g. 65';
    } else {
        heightLabel.innerHTML = '<i class="fas fa-ruler-vertical"></i> Height (in)';
        weightLabel.innerHTML = '<i class="fas fa-weight"></i> Weight (lbs)';
        heightInput.placeholder = 'e.g. 67';
        weightInput.placeholder = 'e.g. 145';
    }
}

function calculateBMI() {
    let height = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = "Please enter valid numbers for height and weight";
        resultDiv.style.backgroundColor = '#e74c3c'; // red background for error
        shakeElement(resultDiv);
        return;
    }

    // Convert imperial to metric for calculation if needed
    const heightM = useMetric ? height / 100 : height * 0.0254;
    const weightKg = useMetric ? weight : weight * 0.453592;

    const bmi = weightKg / (heightM * heightM);
    let category = '';
    let colorClass = '';
    let healthTips = '';

    if (bmi < 18.5) {
        category = 'Underweight';
        colorClass = 'underweight';
        healthTips = getHealthTips('underweight');
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        colorClass = 'normal';
        healthTips = getHealthTips('normal');
    } else if (bmi < 29.9) {
        category = 'Overweight';
        colorClass = 'overweight';
        healthTips = getHealthTips('overweight');
    } else {
        category = 'Obesity';
        colorClass = 'obese';
        healthTips = getHealthTips('obese');
    }

    resultDiv.className = 'result-display ' + colorClass;
    resultDiv.innerHTML = `
        <div class="bmi-value">${bmi.toFixed(1)}</div>
        <div class="bmi-category">${category}</div>
        <div class="bmi-range">
            <div class="range-bar">
                <div class="range-indicator" style="left: ${Math.min(Math.max((bmi / 40) * 100, 0), 100)}%"></div>
            </div>
            <div class="range-labels">
                <span>0</span>
                <span>18.5</span>
                <span>24.9</span>
                <span>29.9</span>
                <span>40+</span>
            </div>
        </div>
        <div class="health-tips">
            <h4>Health Tips:</h4>
            <p>${healthTips}</p>
        </div>
        <button onclick="showTargetCalculator()" class="secondary-btn target-btn"><i class="fas fa-bullseye"></i> Calculate Target Weight</button>
    `;

    // Add animation effect
    resultDiv.style.transform = 'scale(1.05)';
    setTimeout(() => {
        resultDiv.style.transform = 'scale(1)';
    }, 200);

    const timeStamp = new Date().toLocaleString();
    history.push({ 
        bmi: bmi.toFixed(2), 
        category, 
        time: timeStamp,
        height: useMetric ? height.toFixed(1) : (height * 2.54).toFixed(1),
        weight: useMetric ? weight.toFixed(1) : (weight * 0.453592).toFixed(1),
        heightOriginal: height.toFixed(1),
        weightOriginal: weight.toFixed(1),
        unit: useMetric ? 'metric' : 'imperial'
    });
    localStorage.setItem('bmiHistory', JSON.stringify(history));
    updateHistory();
    updateChart();
    document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}

function showTargetCalculator() {
    // Create a modal for the target BMI calculator
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>Target BMI Calculator</h3>
            <p>Enter your desired BMI target to calculate your goal weight</p>
            <div class="form-group">
                <label for="targetBMI">Target BMI</label>
                <input type="number" id="targetBMI" placeholder="e.g. 22" min="18.5" max="24.9" step="0.1">
                <small>Healthy BMI range: 18.5 - 24.9</small>
            </div>
            <button onclick="calculateTargetWeight()" class="primary-btn"><i class="fas fa-calculator"></i> Calculate</button>
            <div id="targetResult" class="target-result"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Add event listeners
    setTimeout(() => modal.classList.add('show'), 10);
    
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => document.body.removeChild(modal), 300);
    });
    
    // Add event listener for the targetBMI input field AFTER it's created
    document.getElementById('targetBMI').addEventListener("keyup", function(event) {
        if (event.key === "Enter") calculateTargetWeight();
    });
    
    document.getElementById('targetBMI').focus();
}

function calculateTargetWeight() {
    const targetBMI = parseFloat(document.getElementById('targetBMI').value);
    const height = parseFloat(document.getElementById('height').value);
    const targetResult = document.getElementById('targetResult');
    
    if (isNaN(targetBMI) || targetBMI <= 0 || isNaN(height) || height <= 0) {
        targetResult.innerHTML = '<p class="error">Please enter valid numbers</p>';
        return;
    }
    
    // Convert height to meters if metric, or to meters if imperial
    const heightM = useMetric ? height / 100 : height * 0.0254;
    
    // Calculate target weight in kg
    const targetWeightKg = targetBMI * (heightM * heightM);
    
    // Convert to display unit if needed
    const targetWeight = useMetric ? targetWeightKg : targetWeightKg / 0.453592;
    const currentWeight = parseFloat(document.getElementById('weight').value);
    const weightDiff = useMetric ? (targetWeightKg - currentWeight) : (targetWeight - currentWeight);
    
    const weightUnit = useMetric ? 'kg' : 'lbs';
    const action = weightDiff < 0 ? 'lose' : 'gain';
    
    targetResult.innerHTML = `
        <div class="target-weight-result">
            <h4>Your Target Weight</h4>
            <div class="target-value">${targetWeight.toFixed(1)} ${weightUnit}</div>
            <p>To reach a BMI of ${targetBMI.toFixed(1)}, you need to ${action} 
               <strong>${Math.abs(weightDiff).toFixed(1)} ${weightUnit}</strong></p>
        </div>
    `;
}

function getHealthTips(category) {
    switch(category) {
        case 'underweight':
            return 'Focus on nutrient-dense foods. Include protein with each meal and healthy fats like avocados, nuts, and olive oil. Strength training can help build muscle mass.';
        case 'normal':
            return 'Maintain your healthy lifestyle! Aim for 150 minutes of moderate exercise weekly, eat a balanced diet rich in fruits and vegetables, and stay hydrated.';
        case 'overweight':
            return 'Consider increasing physical activity to 30 minutes daily. Focus on portion control and include more fruits, vegetables, and lean proteins in your diet.';
        case 'obese':
            return 'Consult with a healthcare provider for personalized advice. Focus on gradual, sustainable changes to diet and activity levels. Walking daily can be a good starting point.';
        default:
            return '';
    }
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    if (history.length === 0) {
        historyList.innerHTML = '<p class="no-history">No history yet.</p>';
        document.getElementById('historyContainer').classList.add('hidden');
        return;
    }

    document.getElementById('historyContainer').classList.remove('hidden');
    
    // Sort history by date (newest first)
    const sortedHistory = [...history].reverse();
    
    historyList.innerHTML = sortedHistory.map((item, i) => {
        let emoji = '';
        let classColor = '';
        
        switch (item.category) {
            case 'Underweight':
                emoji = '🤏';
                classColor = 'underweight';
                break;
            case 'Normal weight':
                emoji = '💪';
                classColor = 'normal';
                break;
            case 'Overweight':
                emoji = '🍔';
                classColor = 'overweight';
                break;
            case 'Obesity':
                emoji = '🚨';
                classColor = 'obese';
                break;
        }

        // Display measurements in their original units
        const heightValue = item.heightOriginal || item.height;
        const weightValue = item.weightOriginal || item.weight;
        const heightUnit = item.unit === 'imperial' ? 'in' : 'cm';
        const weightUnit = item.unit === 'imperial' ? 'lbs' : 'kg';

        return `
            <div class="history-item ${classColor}">
                <div class="history-main">
                    <span class="history-emoji">${emoji}</span>
                    <span class="history-bmi">${item.bmi}</span>
                    <span class="history-category">${item.category}</span>
                </div>
                <div class="history-details">
                    <span>Height: ${heightValue} ${heightUnit}</span>
                    <span>Weight: ${weightValue} ${weightUnit}</span>
                    <span class="history-time">${item.time}</span>
                </div>
            </div>
        `;
    }).join('');
}

function reset() {
    document.getElementById("height").value = '';
    document.getElementById("weight").value = '';
    document.getElementById("result").innerHTML = '';
    document.getElementById("result").className = 'result-display';
}

function clearHistory() {
    // Add confirmation with animation
    const confirmBox = document.createElement('div');
    confirmBox.className = 'confirm-box';
    confirmBox.innerHTML = `
        <p>Are you sure you want to clear all history?</p>
        <button id="confirmYes">Yes, delete all</button>
        <button id="confirmNo">Cancel</button>
    `;
    document.body.appendChild(confirmBox);
    
    setTimeout(() => confirmBox.classList.add('show'), 10);
    
    document.getElementById('confirmYes').addEventListener('click', () => {
        history = [];
        updateHistory();
        updateChart();
        localStorage.removeItem('bmiHistory');
        confirmBox.classList.remove('show');
        setTimeout(() => document.body.removeChild(confirmBox), 300);
        
        // Show notification
        showNotification("BMI history has been cleared");
    });
    
    document.getElementById('confirmNo').addEventListener('click', () => {
        confirmBox.classList.remove('show');
        setTimeout(() => document.body.removeChild(confirmBox), 300);
    });
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    const toggleBtn = document.getElementById('toggleModeBtn');
    toggleBtn.textContent = isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode';
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update chart colors
    updateChartColorTheme(isDarkMode);
}

function initializeChart() {
    const ctx = document.getElementById('bmiChart').getContext('2d');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    bmiChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'BMI Value',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: isDarkMode ? '#fff' : '#333'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const point = history[context.dataIndex];
                            return [
                                `BMI: ${context.raw}`,
                                `Category: ${point ? point.category : ''}`
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: isDarkMode ? '#fff' : '#333'
                    }
                },
                y: {
                    beginAtZero: false,
                    min: 15,
                    max: 35,
                    grid: {
                        color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        color: isDarkMode ? '#fff' : '#333'
                    }
                }
            }
        }
    });
    
    updateChart();
}

function updateChart() {
    if (!bmiChart || history.length === 0) return;
    
    // Use only the last 10 entries for better visualization
    const recentHistory = [...history].slice(-10);
    
    bmiChart.data.labels = recentHistory.map(item => {
        const date = new Date(item.time);
        return date.toLocaleDateString();
    });
    
    bmiChart.data.datasets[0].data = recentHistory.map(item => parseFloat(item.bmi));
    
    // Update point colors based on BMI categories
    bmiChart.data.datasets[0].pointBackgroundColor = recentHistory.map(item => {
        const bmi = parseFloat(item.bmi);
        if (bmi < 18.5) return '#FFDDC1';
        if (bmi < 24.9) return '#C1FFC1';
        if (bmi < 29.9) return '#FFD1C1';
        return '#FFC1C1';
    });
    
    bmiChart.update();
}

function updateChartColorTheme(isDarkMode) {
    if (!bmiChart) return;
    
    bmiChart.options.scales.x.grid.color = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    bmiChart.options.scales.x.ticks.color = isDarkMode ? '#fff' : '#333';
    bmiChart.options.scales.y.grid.color = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    bmiChart.options.scales.y.ticks.color = isDarkMode ? '#fff' : '#333';
    bmiChart.options.plugins.legend.labels.color = isDarkMode ? '#fff' : '#333';
    
    bmiChart.update();
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => document.body.removeChild(notification), 300);
    }, 3000);
}

function shakeElement(element) {
    element.classList.add('shake');
    setTimeout(() => element.classList.remove('shake'), 500);
}

function exportCSV() {
    if (history.length === 0) {
        showNotification("No data to export");
        return;
    }
    
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Date,BMI,Category,Height,Weight,Unit\n";
    
    history.forEach(item => {
        const heightValue = item.heightOriginal || item.height;
        const weightValue = item.weightOriginal || item.weight;
        const unit = item.unit || 'metric';
        csvContent += `${item.time},${item.bmi},"${item.category}",${heightValue},${weightValue},${unit}\n`;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "bmi_history.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification("CSV file downloaded");
}