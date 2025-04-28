// script.js - Phase 2 Improvements
let history = JSON.parse(localStorage.getItem('bmiHistory')) || [];
let useMetric = localStorage.getItem('useMetric') !== 'false'; // Default to metric
let currentLanguage = 'en'; // Always default to English
localStorage.setItem('bmiLanguage', currentLanguage); // Ensure English is saved in local storage

// Friends list to store comparison data
let friendsList = JSON.parse(localStorage.getItem('bmiFriends')) || [];

// Translations dictionary
const translations = {
    en: {
        // App header
        appTitle: "BMI Calculator",
        appSubtitle: "Track your Body Mass Index over time",
        quickInfo: "BMI helps assess whether your weight is healthy for your height",
        
        // Controls
        darkMode: "🌙 Dark Mode",
        lightMode: "🌞 Light Mode",
        exportPDF: "Export PDF",
        
        // Unit toggle
        metricImperial: "Metric (cm/kg) <i class='fas fa-exchange-alt'></i> Imperial (in/lbs)",
        
        // Input labels
        height: "Height",
        weight: "Weight",
        calculate: "Calculate",
        reset: "Reset",
        
        // Tabs
        bmiCalculatorPro: "BMI Calculator Pro",
        history: "History",
        infoBmi: "Info BMI",
        
        // Pro features
        idealWeight: "Ideal Weight",
        idealWeightDesc: "Based on your height:",
        dailyCalories: "Daily Calories",
        caloriesDesc: "Estimated calorie needs:",
        activityLevel: "Activity Level:",
        activityLow: "Low (Sedentary)",
        activityMedium: "Medium (1-3x Weekly)",
        activityHigh: "Active (3-5x Weekly)",
        activityVeryHigh: "Very Active (6-7x Weekly)",
        gender: "Gender:",
        male: "Male",
        female: "Female",
        age: "Age:",
        targetWeight: "Target Weight",
        targetWeightDesc: "To achieve ideal BMI (22):",
        targetCalculator: "Target Calculator",
        
        // Health tips
        healthTips: "Health Tips",
        tip1: "Eat 5 servings of fruits & vegetables every day",
        tip2: "Do 30 minutes of physical activity daily",
        tip3: "Drink 8 glasses of water every day",
        tip4: "Sleep 7-8 hours every night",
        
        // Health Tips
        healthTipsTitle: "Health Tips",
        
        // History
        addTestData: "Add Test Data",
        clear: "Clear",
        
        // Categories
        categories: "BMI Categories",
        underweight: "Underweight",
        normal: "Normal",
        overweight: "Overweight",
        obese: "Obese",
        riskMalnutrition: "Risk of malnutrition, weak immune system",
        riskLow: "Low disease risk",
        riskDiabetes: "Risk of diabetes, hypertension",
        riskHeart: "High risk of heart disease",
        
        // New category tips
        tipUnderweightShort: "Focus on nutrient-dense foods and protein intake",
        tipNormalShort: "Maintain healthy diet and regular physical activity",
        tipOverweightShort: "Increase physical activity and focus on portion control",
        tipObeseShort: "Consult healthcare provider and focus on sustainable lifestyle changes",
        
        // BMI Interpretation
        bmiInterpretation: "How to Interpret Your BMI",
        bmiInterpretationText: "Body Mass Index is a screening tool, not a diagnostic tool. A healthcare professional should evaluate your health status considering factors like muscle mass, bone density, and overall body composition.",
        
        // FAQ
        faqAboutBMI: "FAQ about BMI",
        faqWhat: "What is BMI?",
        faqWhatAnswer: "Body Mass Index (BMI) is a measure of weight in relation to height, used to categorize a person as underweight, normal, overweight, or obese.",
        faqAccurate: "Is BMI always accurate?",
        faqAccurateAnswer: "BMI has limitations. It doesn't differentiate between muscle and fat, and may not be accurate for athletes, the elderly, or pregnant women. Use it as a general guide and consult with a healthcare professional.",
        faqLower: "How to lower BMI?",
        faqLowerAnswer: "To lower BMI, focus on a balanced diet, regular physical activity, adequate sleep, and stress management. Small sustainable changes are more effective than extreme diets.",
        
        // Placeholders
        enterHeight: "Enter height in calculator",
        enterHeightWeight: "Enter height and weight in calculator",
        enterData: "Enter data above",
        
        // Target calculator
        targetBMICalculator: "Target BMI Calculator",
        enterDesiredBMI: "Enter your desired BMI target to calculate your goal weight",
        targetBMI: "Target BMI",
        healthyBMIRange: "Healthy BMI range: 18.5 - 24.9",
        yourTargetWeight: "Your Target Weight",
        toReachBMI: "To reach a BMI of",
        youNeedTo: "you need to",
        lose: "lose",
        gain: "gain",
        
        // Footer
        createdBy: "Created with ❤️ by",
        
        // Notifications
        changedToMetric: "Changed to Metric (cm/kg)",
        changedToImperial: "Changed to Imperial (in/lbs)",
        darkModeActivated: "Dark Mode Activated",
        lightModeActivated: "Light Mode Activated",
        changedToEnglish: "Changed to English",
        changedToIndonesian: "Changed to Indonesian",
        pdfDownloaded: "PDF file downloaded",
        pleaseEnterValid: "Please enter valid numbers for height and weight",
        sampleDataAdded: "Sample data added for testing",
        historyCleared: "BMI history has been cleared",
        
        // Health tips by category
        tipUnderweight: "Focus on nutrient-dense foods. Include protein with each meal and healthy fats like avocados, nuts, and olive oil. Strength training can help build muscle mass.",
        tipNormal: "Maintain your healthy lifestyle! Aim for 150 minutes of moderate exercise weekly, eat a balanced diet rich in fruits and vegetables, and stay hydrated.",
        tipOverweight: "Consider increasing physical activity to 30 minutes daily. Focus on portion control and include more fruits, vegetables, and lean proteins in your diet.",
        tipObese: "Consult with a healthcare provider for personalized advice. Focus on gradual, sustainable changes to diet and activity levels. Walking daily can be a good starting point.",
        
        // Additional keys
        noDataToExport: "No data to export",
        clearConfirmation: "Are you sure you want to clear all history?",
        yes: "Yes, delete all",
        no: "Cancel",
        noHistory: "No history yet",
        
        // Calories related
        caloriesPerDay: "calories/day",
        maintenanceCalories: "Maintenance",
        weightLossCalories: "Weight Loss",
        weightGainCalories: "Weight Gain",
        weeklyWeightChange: "weekly change",
        
        // New translations for English
        yourBmi: "Your BMI:",
        category: "Category:",
        targetTimeMonths: "Time needed: {time} months",
        targetDeficit: "Recommended calorie deficit: {calories} calories/day",
        bmiResult: "BMI Result",
        
        // Feedback translations
        feedback: "Feedback",
        feedbackDesc: "We value your suggestions to improve this BMI Calculator",
        name: "Name",
        email: "Email",
        feedbackType: "Type",
        suggestion: "Suggestion",
        bugReport: "Bug Report",
        featureRequest: "Feature Request",
        other: "Other",
        message: "Message",
        submitFeedback: "Submit Feedback",
        enterFeedback: "Please enter your feedback message",
        feedbackSubmitted: "Thank you for your feedback!",
        cancelFeedback: "Cancel",
        
        // Share translations
        share: "Share",
        shareResult: "Share Your BMI Result",
        copy: "Copy",
        linkCopied: "Link copied to clipboard",
        
        // Friend comparison translations
        compareWithFriends: "Compare with Friends",
        seeHowCompares: "See how your BMI compares:",
        noFriendsAdded: "No friends added yet",
        addFriend: "Add Friend",
        addFriendData: "Add Friend's Data",
        friendName: "Friend's Name",
        gender: "Gender",
        age: "Age",
        add: "Add",
        friendAdded: "Friend added for comparison",
        friendRemoved: "Friend removed from comparison",
        enterAllFields: "Please enter all required fields",
        sharedDataLoaded: "BMI data loaded from shared link"
    },
    id: {
        // App header
        appTitle: "Kalkulator BMI",
        appSubtitle: "Pantau Indeks Massa Tubuh Anda seiring waktu",
        quickInfo: "BMI membantu menilai apakah berat badan Anda sehat sesuai tinggi badan",
        
        // Controls
        darkMode: "🌙 Mode Gelap",
        lightMode: "🌞 Mode Terang",
        exportPDF: "Ekspor PDF",
        
        // Unit toggle
        metricImperial: "Metrik (cm/kg) <i class='fas fa-exchange-alt'></i> Imperial (in/lbs)",
        
        // Input labels
        height: "Tinggi",
        weight: "Berat",
        calculate: "Hitung",
        reset: "Reset",
        
        // Tabs
        bmiCalculatorPro: "Kalkulator BMI Pro",
        history: "Riwayat",
        infoBmi: "Info BMI",
        
        // Pro features
        idealWeight: "Berat Ideal",
        idealWeightDesc: "Berdasarkan tinggi badan Anda:",
        dailyCalories: "Kalori Harian",
        caloriesDesc: "Perkiraan kebutuhan kalori:",
        activityLevel: "Level Aktivitas:",
        activityLow: "Rendah (Jarang Olahraga)",
        activityMedium: "Sedang (1-3x Seminggu)",
        activityHigh: "Aktif (3-5x Seminggu)",
        activityVeryHigh: "Sangat Aktif (6-7x Seminggu)",
        gender: "Jenis Kelamin:",
        male: "Pria",
        female: "Wanita",
        age: "Usia:",
        targetWeight: "Target Berat",
        targetWeightDesc: "Untuk mencapai BMI ideal (22):",
        targetCalculator: "Kalkulator Target",
        
        // Health tips
        healthTips: "Tips Kesehatan",
        tip1: "Makan 5 porsi buah & sayur setiap hari",
        tip2: "Lakukan 30 menit aktivitas fisik setiap hari",
        tip3: "Minum 8 gelas air putih setiap hari",
        tip4: "Tidur 7-8 jam setiap malam",
        
        // Health Tips
        healthTipsTitle: "Tips Kesehatan",
        
        // History
        addTestData: "Tambah Data Uji",
        clear: "Hapus",
        
        // Categories
        categories: "Kategori BMI",
        underweight: "Berat Kurang",
        normal: "Normal",
        overweight: "Kelebihan Berat",
        obese: "Obesitas",
        riskMalnutrition: "Risiko malnutrisi, sistem imun lemah",
        riskLow: "Risiko penyakit rendah",
        riskDiabetes: "Risiko diabetes, hipertensi",
        riskHeart: "Risiko tinggi penyakit jantung",
        
        // New category tips
        tipUnderweightShort: "Fokus pada makanan padat nutrisi dan asupan protein",
        tipNormalShort: "Pertahankan pola makan sehat dan aktivitas fisik rutin",
        tipOverweightShort: "Tingkatkan aktivitas fisik dan kontrol porsi makan",
        tipObeseShort: "Konsultasi dengan tenaga medis dan fokus pada perubahan gaya hidup berkelanjutan",
        
        // BMI Interpretation
        bmiInterpretation: "Cara Menginterpretasikan BMI Anda",
        bmiInterpretationText: "Indeks Massa Tubuh adalah alat skrining, bukan alat diagnostik. Profesional kesehatan harus mengevaluasi status kesehatan Anda dengan mempertimbangkan faktor seperti massa otot, kepadatan tulang, dan komposisi tubuh secara keseluruhan.",
        
        // FAQ
        faqAboutBMI: "FAQ tentang BMI",
        faqWhat: "Apa itu BMI?",
        faqWhatAnswer: "Body Mass Index (BMI) adalah ukuran berat badan terhadap tinggi badan, yang digunakan untuk mengkategorikan seseorang sebagai kekurangan berat badan, normal, kelebihan berat badan, atau obesitas.",
        faqAccurate: "Apakah BMI selalu akurat?",
        faqAccurateAnswer: "BMI memiliki keterbatasan. Tidak membedakan antara otot dan lemak, dan mungkin tidak akurat untuk atlet, lansia, atau wanita hamil. Gunakan sebagai panduan umum dan konsultasikan dengan profesional kesehatan.",
        faqLower: "Bagaimana cara menurunkan BMI?",
        faqLowerAnswer: "Untuk menurunkan BMI, fokus pada diet seimbang, aktivitas fisik teratur, tidur cukup, dan mengelola stres. Perubahan kecil berkelanjutan lebih efektif daripada diet ekstrem.",
        
        // Placeholders
        enterHeight: "Masukkan tinggi di kalkulator",
        enterHeightWeight: "Masukkan tinggi dan berat di kalkulator",
        enterData: "Masukkan data di atas",
        
        // Target calculator
        targetBMICalculator: "Kalkulator BMI Target",
        enterDesiredBMI: "Masukkan target BMI yang Anda inginkan untuk menghitung berat badan tujuan",
        targetBMI: "Target BMI",
        healthyBMIRange: "Rentang BMI sehat: 18.5 - 24.9",
        yourTargetWeight: "Berat Target Anda",
        toReachBMI: "Untuk mencapai BMI",
        youNeedTo: "Anda perlu",
        lose: "menurunkan",
        gain: "menaikkan",
        
        // Footer
        createdBy: "Dibuat dengan ❤️ oleh",
        
        // Notifications
        changedToMetric: "Beralih ke Metrik (cm/kg)",
        changedToImperial: "Beralih ke Imperial (in/lbs)",
        darkModeActivated: "Mode Gelap Diaktifkan",
        lightModeActivated: "Mode Terang Diaktifkan",
        changedToEnglish: "Beralih ke Bahasa Inggris",
        changedToIndonesian: "Beralih ke Bahasa Indonesia",
        pdfDownloaded: "File PDF telah diunduh",
        pleaseEnterValid: "Masukkan angka yang valid untuk tinggi dan berat",
        sampleDataAdded: "Data sampel ditambahkan untuk pengujian",
        historyCleared: "Riwayat BMI telah dihapus",
        
        // Health tips by category
        tipUnderweight: "Fokus pada makanan padat nutrisi. Sertakan protein di setiap makan dan lemak sehat seperti alpukat, kacang-kacangan, dan minyak zaitun. Latihan kekuatan dapat membantu membangun massa otot.",
        tipNormal: "Pertahankan gaya hidup sehat Anda! Targetkan 150 menit olahraga sedang setiap minggu, makan makanan seimbang kaya buah dan sayuran, dan tetap terhidrasi.",
        tipOverweight: "Pertimbangkan untuk meningkatkan aktivitas fisik menjadi 30 menit setiap hari. Fokus pada kontrol porsi dan sertakan lebih banyak buah, sayuran, dan protein rendah lemak dalam diet Anda.",
        tipObese: "Konsultasikan dengan penyedia layanan kesehatan untuk saran yang dipersonalisasi. Fokus pada perubahan bertahap dan berkelanjutan pada diet dan tingkat aktivitas. Berjalan kaki setiap hari bisa menjadi awal yang baik.",
        
        // Additional keys
        noDataToExport: "Tidak ada data untuk diekspor",
        clearConfirmation: "Apakah Anda yakin ingin menghapus semua riwayat?",
        yes: "Ya, hapus semua",
        no: "Batal",
        noHistory: "Belum ada riwayat",
        
        // Calories related
        caloriesPerDay: "kalori/hari",
        maintenanceCalories: "Kebutuhan Harian",
        weightLossCalories: "Menurunkan BB",
        weightGainCalories: "Menaikkan BB",
        weeklyWeightChange: "per minggu",
        
        // New translations for Indonesian
        yourBmi: "BMI Anda:",
        category: "Kategori:",
        targetTimeMonths: "Waktu yang dibutuhkan: {time} bulan",
        targetDeficit: "Defisit kalori yang direkomendasikan: {calories} kalori/hari",
        bmiResult: "Hasil BMI",
        
        // Feedback translations
        feedback: "Umpan Balik",
        feedbackDesc: "Kami menghargai saran Anda untuk meningkatkan Kalkulator BMI ini",
        name: "Nama",
        email: "Email",
        feedbackType: "Jenis",
        suggestion: "Saran",
        bugReport: "Laporan Bug",
        featureRequest: "Permintaan Fitur",
        other: "Lainnya",
        message: "Pesan",
        submitFeedback: "Kirim Umpan Balik",
        enterFeedback: "Silakan masukkan pesan umpan balik Anda",
        feedbackSubmitted: "Terima kasih atas umpan balik Anda!",
        cancelFeedback: "Batal",
        
        // Share translations
        share: "Bagikan",
        shareResult: "Bagikan Hasil BMI Anda",
        copy: "Salin",
        linkCopied: "Tautan disalin ke clipboard",
        
        // Friend comparison translations
        compareWithFriends: "Bandingkan dengan Teman",
        seeHowCompares: "Lihat bagaimana BMI Anda dibandingkan:",
        noFriendsAdded: "Belum ada teman ditambahkan",
        addFriend: "Tambah Teman",
        addFriendData: "Tambahkan Data Teman",
        friendName: "Nama Teman",
        gender: "Jenis Kelamin",
        age: "Usia",
        add: "Tambah",
        friendAdded: "Teman ditambahkan untuk perbandingan",
        friendRemoved: "Teman dihapus dari perbandingan",
        enterAllFields: "Silakan isi semua kolom yang diperlukan",
        sharedDataLoaded: "Data BMI dimuat dari tautan yang dibagikan"
    }
};

// Initialize all event listeners and page elements
document.addEventListener('DOMContentLoaded', function() {
    // Apply dark mode if needed
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('toggleModeBtn').innerHTML = '🌞 Light Mode';
    }
    
    // If no history data found, add sample data
    if (history.length === 0) {
        let storedBmiHistory = JSON.parse(localStorage.getItem('bmiHistory'));
        if (!storedBmiHistory || storedBmiHistory.length === 0) {
            addSampleData();
        }
    }
    
    // Load unit preference from localStorage
    const storedUseMetric = localStorage.getItem('useMetric');
    if (storedUseMetric !== null) {
        useMetric = storedUseMetric !== 'false';
    }
    
    // Set the checkbox to match the current unit preference
    const unitToggle = document.getElementById('unitToggle');
    if (unitToggle) {
        unitToggle.checked = useMetric;
        // Add event listener to ensure toggling works properly
        unitToggle.addEventListener('change', toggleUnit);
    }
    
    // Update UI with appropriate units
    updateUnitLabels();
    
    // Initialize components
    initTabs();
    initFAQ();
    enhanceBMICategories();
    updateHistory();
    initFeedback();
    
    // Initialize Share button
    const shareButton = document.getElementById('share-button');
    if (shareButton) {
        shareButton.addEventListener('click', () => {
            const bmiValue = document.querySelector('.bmi-value');
            if (bmiValue) {
                const bmi = parseFloat(bmiValue.textContent);
                showShareModal();
            }
        });
    }
    
    // Check for stored language preference and apply it
    const storedLanguage = localStorage.getItem('bmiLanguage');
    if (storedLanguage) {
        currentLanguage = storedLanguage;
        updateLanguage();
    }
    
    // Preload height and weight from URL if present (for sharing)
    const urlParams = new URLSearchParams(window.location.search);
    const height = urlParams.get('h');
    const weight = urlParams.get('w');
    if (height && weight) {
        document.getElementById('height').value = height;
        document.getElementById('weight').value = weight;
        calculateBMI();
    }
    
    // Initialize language selector
    const languageBtn = document.getElementById('languageBtn');
    if (languageBtn) {
        languageBtn.addEventListener('click', toggleLanguage);
    }
    
    // Initialize export PDF button
    const exportPDFBtn = document.getElementById('exportPDFBtn');
    if (exportPDFBtn) {
        exportPDFBtn.addEventListener('click', exportPDF);
    }
    
    // Initialize friend comparison
    updateFriendsComparison();
    
    // Check for any shared data in URL
    checkUrlForSharedData();
    
    // Update calorie calculation
    updateCalorieCalculation();
});

// Enhance BMI categories with animations and interactions
function enhanceBMICategories() {
    const categoryItems = document.querySelectorAll('.bmi-category-item');
    
    categoryItems.forEach(item => {
        // Add hover animation
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
            
            if (document.body.classList.contains('dark-mode')) {
                this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.35)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            // Don't reset if this is the active category
            if (!this.classList.contains('active-category')) {
                this.style.transform = '';
                this.style.boxShadow = '';
            }
        });
    });
}

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    // Remove existing event listeners (if any) by cloning and replacing elements
    tabButtons.forEach(button => {
        const clone = button.cloneNode(true);
        button.parentNode.replaceChild(clone, button);
    });
    
    // Get the fresh tab buttons after cloning
    const freshTabButtons = document.querySelectorAll('.tab-btn');
    
    freshTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and its content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            
            // Make sure to show the content
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.add('active');
                
                // If switching to history tab, update history
                if (tabId === 'history-tab') {
                    updateHistory();
                }
            }
        });
    });
    
    // Make sure the active tab content matches the active tab button
    const activeTabButton = document.querySelector('.tab-btn.active');
    if (activeTabButton) {
        const activeTabId = activeTabButton.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        const activeContent = document.getElementById(activeTabId);
        if (activeContent) {
            activeContent.classList.add('active');
            
            // If active tab is history tab, update history display
            if (activeTabId === 'history-tab') {
                updateHistory();
            }
        }
    }
}

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class pada item yang diklik
            const isActive = item.classList.contains('active');
            
            // Optional: tutup semua FAQ items terlebih dahulu
            faqItems.forEach(faq => {
                faq.classList.remove('active');
            });
            
            // Buka item yang diklik jika sebelumnya tidak active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

function toggleUnit() {
    // Get the current state of the checkbox
    const unitToggle = document.getElementById('unitToggle');
    
    if (!unitToggle) {
        console.error('Unit toggle checkbox not found');
        return;
    }
    
    // Update the useMetric variable based on checkbox state
    useMetric = unitToggle.checked;
    console.log('Unit toggled. useMetric =', useMetric);
    
    // Save preference to localStorage
    localStorage.setItem('useMetric', useMetric);
    
    // Update UI elements
    updateUnitLabels();
    
    // Clear inputs to prevent confusion
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");
    
    if (heightInput) heightInput.value = '';
    if (weightInput) weightInput.value = '';
    
    // Reset results
    if (resultDiv) {
        resultDiv.innerHTML = '';
        resultDiv.className = 'result-display';
    }
    
    // Reset Pro features
    const idealWeightResult = document.getElementById("ideal-weight-result");
    const targetWeightResult = document.getElementById("target-weight-result");
    
    if (idealWeightResult) {
        idealWeightResult.innerHTML = `<span class="placeholder">${translations[currentLanguage].enterHeight}</span>`;
    }
    
    if (targetWeightResult) {
        targetWeightResult.innerHTML = `<span class="placeholder">${translations[currentLanguage].enterHeightWeight}</span>`;
    }
    
    // Update calorie calculation if function exists
    if (typeof updateCalorieCalculation === 'function') {
        updateCalorieCalculation();
    }
    
    // Show notification
    showNotification(useMetric ? translations[currentLanguage].changedToMetric : translations[currentLanguage].changedToImperial);
}

function updateUnitLabels() {
    console.log('Updating unit labels. useMetric =', useMetric);
    
    // Get label elements
    const heightLabel = document.getElementById('label-height');
    const weightLabel = document.getElementById('label-weight');
    const heightUnit = document.getElementById('height-unit');
    const weightUnit = document.getElementById('weight-unit');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    
    // Update height unit and placeholder
    if (heightUnit) {
        heightUnit.textContent = useMetric ? '(cm)' : '(in)';
    }
    
    // Update weight unit and placeholder
    if (weightUnit) {
        weightUnit.textContent = useMetric ? '(kg)' : '(lbs)';
    }
    
    // Update input placeholders
    if (heightInput) {
        heightInput.placeholder = useMetric ? 'e.g. 170' : 'e.g. 67';
        heightInput.min = useMetric ? '50' : '20';
        heightInput.max = useMetric ? '250' : '96';
    }
    
    if (weightInput) {
        weightInput.placeholder = useMetric ? 'e.g. 65' : 'e.g. 145';
        weightInput.min = useMetric ? '20' : '45';
        weightInput.max = useMetric ? '300' : '660';
    }
    
    // Update toggle label
    const toggleUnitsLabel = document.getElementById('toggle-units');
    if (toggleUnitsLabel) {
        toggleUnitsLabel.innerHTML = useMetric ? 
            'Metric (cm/kg) <i class="fas fa-exchange-alt"></i> Imperial (in/lbs)' : 
            'Imperial (in/lbs) <i class="fas fa-exchange-alt"></i> Metric (cm/kg)';
    }
}

function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');
    
    if (!heightInput || !weightInput || !resultDiv) return;
    
    // Shake inputs if values are missing or invalid
    if (!heightInput.value || !weightInput.value || 
        parseFloat(heightInput.value) <= 0 || parseFloat(weightInput.value) <= 0) {
        shakeElement(heightInput);
        shakeElement(weightInput);
        return;
    }
    
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    
    // BMI calculation based on units
    let bmi, heightInMeters;
    if (useMetric) {
        // Metric formula: BMI = weight(kg) / height²(m)
        heightInMeters = height / 100;  // convert cm to m
        bmi = weight / (heightInMeters * heightInMeters);
    } else {
        // Imperial formula: BMI = (weight(lbs) * 703) / height²(in)
        bmi = (weight * 703) / (height * height);
    }
    
    // Round to 1 decimal place
    bmi = Math.round(bmi * 10) / 10;
    
    // Get BMI category
    const category = getBMICategory(bmi);
    
    // Update result display
    resultDiv.innerHTML = `
        <div class="bmi-value">${bmi}</div>
            <div class="bmi-category">${translations[currentLanguage][category]}</div>
            <div class="range-bar">
            <div class="range-indicator" style="left: ${Math.min(Math.max(bmi, 10), 40) * 2.5}%"></div>
            </div>
            <div class="range-labels">
                <span>10</span>
                <span>20</span>
                <span>30</span>
                <span>40+</span>
        </div>
    `;
    
    // Add category class to result div
    resultDiv.className = 'result-display';
    resultDiv.classList.add(category);
    
    // Activate share button
    const shareButton = document.getElementById('share-button');
    if (shareButton) {
        shareButton.disabled = false;
    }
    
    // Add entry to history
    const timestamp = new Date().toISOString();
    const entry = {
        id: Date.now(),
        height,
        weight,
        bmi,
        category,
        timestamp,
        units: useMetric ? 'metric' : 'imperial'
    };
    
    history.unshift(entry);
    
    // Only keep last 100 entries
    if (history.length > 100) {
        history.pop();
    }
    
    // Save to localStorage
    localStorage.setItem('bmiHistory', JSON.stringify(history));
    
    // Update history display
    updateHistory();
    
    // Update pro features
    updateProFeatures(height, weight, bmi);
    
    // Highlight the corresponding category in info tab
    highlightBMICategory(category);
}

// Function to highlight the BMI category in the info tab
function highlightBMICategory(category) {
    // Reset all category items
    const allCategoryItems = document.querySelectorAll('.bmi-category-item');
    allCategoryItems.forEach(item => {
        item.classList.remove('active-category');
        item.style.transform = '';
        item.style.boxShadow = '';
    });
    
    // Add highlight to the matching category
    const targetCategory = document.querySelector(`.bmi-category-item.${category}`);
    if (targetCategory) {
        targetCategory.classList.add('active-category');
        targetCategory.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add pulsing animation
        targetCategory.style.animation = 'pulse 2s 3';
        
        // Add active styles
        targetCategory.style.transform = 'translateY(-8px)';
        targetCategory.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        
        if (document.body.classList.contains('dark-mode')) {
            targetCategory.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.35)';
        }
        
        // Switch to info tab after a brief delay to show the highlight
        setTimeout(() => {
            // Only switch tabs if we're not already on the info tab
            if (!document.getElementById('info-tab').classList.contains('active')) {
                // Get all tab buttons and contents
                const tabButtons = document.querySelectorAll('.tab-btn');
                const tabContents = document.querySelectorAll('.tab-content');
                
                // Deactivate all tabs
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Activate info tab
                document.getElementById('info-tab').classList.add('active');
                document.getElementById('button-info').classList.add('active');
            }
        }, 500);
    }
}

// Pro Features Functions
function updateProFeatures(height, weight, bmi) {
    updateIdealWeight(height);
    updateTargetWeight(height, weight, bmi);
    updateCalorieCalculation();
}

function updateIdealWeight(height) {
    if (!height || isNaN(height) || height <= 0) {
        document.getElementById("ideal-weight-result").innerHTML = '<span class="placeholder">Masukkan tinggi di kalkulator BMI</span>';
        return;
    }
    
    let idealWeightMin, idealWeightMax;
    const heightM = useMetric ? height / 100 : height * 0.0254;
    
    // Calculate ideal weight range (BMI 18.5 - 24.9)
    idealWeightMin = (18.5 * heightM * heightM).toFixed(1);
    idealWeightMax = (24.9 * heightM * heightM).toFixed(1);
    
    // Convert back to imperial if needed
    if (!useMetric) {
        idealWeightMin = (parseFloat(idealWeightMin) / 0.453592).toFixed(1);
        idealWeightMax = (parseFloat(idealWeightMax) / 0.453592).toFixed(1);
    }
    
    const unit = useMetric ? 'kg' : 'lbs';
    document.getElementById("ideal-weight-result").innerHTML = `
        <span class="value">${idealWeightMin} - ${idealWeightMax} ${unit}</span>
    `;
}

function updateTargetWeight(height, weight, bmi) {
    if (!height || !weight || isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("target-weight-result").innerHTML = '<span class="placeholder">Masukkan tinggi dan berat di kalkulator BMI</span>';
        return;
    }
    
    // Use BMI 22 as ideal target (middle of normal range)
    const heightM = useMetric ? height / 100 : height * 0.0254;
    let targetWeight = (22 * heightM * heightM).toFixed(1);
    
    // Convert to imperial if needed
    if (!useMetric) {
        targetWeight = (parseFloat(targetWeight) / 0.453592).toFixed(1);
    }
    
    const currentWeight = parseFloat(weight);
    const difference = (parseFloat(targetWeight) - currentWeight).toFixed(1);
    const action = difference > 0 ? 'gain' : 'lose';
    const unit = useMetric ? 'kg' : 'lbs';
    
    document.getElementById("target-weight-result").innerHTML = `
        <span class="value">${targetWeight} ${unit}</span>
        <small>${action === 'gain' ? 'Gain' : 'Lose'} ${Math.abs(difference)} ${unit}</small>
    `;
}

function updateCalorieCalculation() {
    // Get required values
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const age = parseFloat(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activityLevel = parseFloat(document.getElementById("activity-level").value);
    
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0 || isNaN(age) || age <= 0) {
        document.getElementById("calorie-result").innerHTML = `<span class="placeholder">${translations[currentLanguage].enterHeightWeight}</span>`;
        return;
    }
    
    // Convert to metric for calculation
    const heightCm = useMetric ? height : height * 2.54;
    const weightKg = useMetric ? weight : weight * 0.453592;
    
    // Basal Metabolic Rate (BMR) using Mifflin-St Jeor Equation
    let bmr;
    if (gender === 'male') {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
    } else {
        bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
    }
    
    // Total Daily Energy Expenditure (TDEE)
    const tdee = Math.round(bmr * activityLevel);
    
    // Calculate calorie targets
    const weightLoss = Math.round(tdee - 500); // 500 calorie deficit
    const weightGain = Math.round(tdee + 500); // 500 calorie surplus
    
    // Weekly weight change (approximately 0.5 kg per week with 500 calorie deficit/surplus)
    // For imperial, convert to lbs (0.5 kg ≈ 1.1 lbs)
    const weeklyChange = useMetric ? 0.5 : 1.1;
    const weightUnit = useMetric ? 'kg' : 'lbs';
    
    // Get translation keys for calorie descriptions
    const maintenanceText = translations[currentLanguage].maintenanceCalories || "Maintenance";
    const weightLossText = translations[currentLanguage].weightLossCalories || "Weight Loss";
    const weightGainText = translations[currentLanguage].weightGainCalories || "Weight Gain";
    const weeklyChangeText = translations[currentLanguage].weeklyWeightChange || "weekly change";
    
    // Create more informative output with description
    document.getElementById("calorie-result").innerHTML = `
        <div class="calorie-details">
            <div class="calorie-main">
                <span class="value">${tdee} ${translations[currentLanguage].caloriesPerDay || "calories/day"}</span>
                <span class="calorie-label">${maintenanceText}</span>
            </div>
            <div class="calorie-goals">
                <div class="calorie-goal loss">
                    <span class="value">${weightLoss}</span>
                    <span class="calorie-label">${weightLossText}</span>
                    <small>(-${weeklyChange} ${weightUnit}/${weeklyChangeText})</small>
                </div>
                <div class="calorie-goal gain">
                    <span class="value">${weightGain}</span>
                    <span class="calorie-label">${weightGainText}</span>
                    <small>(+${weeklyChange} ${weightUnit}/${weeklyChangeText})</small>
                </div>
            </div>
        </div>
    `;
}

function showTargetCalculator() {
    // Create a modal for the target BMI calculator
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h3>${translations[currentLanguage].targetBMICalculator}</h3>
            <p>${translations[currentLanguage].enterDesiredBMI}</p>
            <div class="form-group">
                <label for="targetBMI">${translations[currentLanguage].targetBMI}</label>
                <input type="number" id="targetBMI" placeholder="e.g. 22" min="18.5" max="24.9" step="0.1">
                <small>${translations[currentLanguage].healthyBMIRange}</small>
            </div>
            <button onclick="calculateTargetWeight()" class="primary-btn"><i class="fas fa-calculator"></i> ${translations[currentLanguage].calculate}</button>
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
        targetResult.innerHTML = `<p class="error">${translations[currentLanguage].pleaseEnterValid}</p>`;
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
    const action = weightDiff < 0 ? translations[currentLanguage].lose : translations[currentLanguage].gain;
    
    targetResult.innerHTML = `
        <div class="target-weight-result">
            <h4>${translations[currentLanguage].yourTargetWeight}</h4>
            <div class="target-value">${targetWeight.toFixed(1)} ${weightUnit}</div>
            <p>${translations[currentLanguage].toReachBMI} ${targetBMI.toFixed(1)}, ${translations[currentLanguage].youNeedTo} ${action} 
               <strong>${Math.abs(weightDiff).toFixed(1)} ${weightUnit}</strong></p>
        </div>
    `;
    
    // Also update the target weight in the pro features
    updateTargetWeight(height, currentWeight, targetBMI);
}

function getHealthTips(category) {
    switch(category) {
        case 'underweight':
            return translations[currentLanguage].tipUnderweight;
        case 'normal':
            return translations[currentLanguage].tipNormal;
        case 'overweight':
            return translations[currentLanguage].tipOverweight;
        case 'obese':
            return translations[currentLanguage].tipObese;
        default:
            return '';
    }
}

function updateHistory() {
    const historyList = document.getElementById('historyList');
    if (history.length === 0) {
        historyList.innerHTML = `<p class="no-history">${translations[currentLanguage].noHistory || 'No history yet.'}</p>`;
        return;
    }
    
    // Sort history by date (newest first)
    const sortedHistory = [...history].reverse();
    
    historyList.innerHTML = sortedHistory.map((item, i) => {
        let emoji = '';
        let classColor = '';
        
        switch (item.category) {
            case translations.en.underweight:
            case translations.id.underweight:
                emoji = '🤏';
                classColor = 'underweight';
                break;
            case translations.en.normal:
            case translations.id.normal:
                emoji = '💪';
                classColor = 'normal';
                break;
            case translations.en.overweight:
            case translations.id.overweight:
                emoji = '🍔';
                classColor = 'overweight';
                break;
            case translations.en.obese:
            case translations.id.obese:
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
                    <span>${translations[currentLanguage].height}: ${heightValue} ${heightUnit}</span>
                    <span>${translations[currentLanguage].weight}: ${weightValue} ${weightUnit}</span>
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
        <p>${translations[currentLanguage].clearConfirmation || "Are you sure you want to clear all history?"}</p>
        <button id="confirmYes">${translations[currentLanguage].yes || "Yes, delete all"}</button>
        <button id="confirmNo">${translations[currentLanguage].no || "Cancel"}</button>
    `;
    document.body.appendChild(confirmBox);
    
    setTimeout(() => confirmBox.classList.add('show'), 10);
    
    document.getElementById('confirmYes').addEventListener('click', () => {
        history = [];
        updateHistory();
        localStorage.removeItem('bmiHistory');
        confirmBox.classList.remove('show');
        setTimeout(() => document.body.removeChild(confirmBox), 300);
        
        // Show notification
        showNotification(translations[currentLanguage].historyCleared);
    });
    
    document.getElementById('confirmNo').addEventListener('click', () => {
        confirmBox.classList.remove('show');
        setTimeout(() => document.body.removeChild(confirmBox), 300);
    });
}

function toggleMode() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    document.getElementById('toggleModeBtn').textContent = isDarkMode ? 
        translations[currentLanguage].lightMode : 
        translations[currentLanguage].darkMode;
    
    showNotification(isDarkMode ? translations[currentLanguage].darkModeActivated : translations[currentLanguage].lightModeActivated);
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

function exportPDF() {
    if (history.length === 0) {
        showNotification(translations[currentLanguage].noDataToExport || "No data to export");
        return;
    }
    
    // Create a new PDF document
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Set document properties
    doc.setProperties({
        title: translations[currentLanguage].appTitle + ' ' + translations[currentLanguage].history,
        subject: translations[currentLanguage].appTitle + ' ' + translations[currentLanguage].history,
        author: translations[currentLanguage].appTitle,
        creator: translations[currentLanguage].appTitle
    });
    
    // Add logo/header image (we'll use text formatting instead)
    doc.setFillColor(75, 192, 192);
    doc.rect(0, 0, 210, 30, 'F');
    
    // Add title
    doc.setFontSize(24);
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.text(translations[currentLanguage].appTitle + " " + translations[currentLanguage].history, 105, 15, { align: "center" });
    
    // Reset color for the rest of the document
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'normal');
    
    // Add date
    doc.setFontSize(10);
    doc.text(`Generated: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`, 105, 25, { align: "center" });
    
    // Add summary section
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Summary", 14, 40);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    
    // Calculate latest BMI and average BMI
    const latestBMI = history.length > 0 ? parseFloat(history[history.length - 1].bmi) : 0;
    const totalBMI = history.reduce((sum, entry) => sum + parseFloat(entry.bmi), 0);
    const avgBMI = totalBMI / history.length;
    
    // Add summary info
    doc.text(`Total Records: ${history.length}`, 20, 48);
    doc.text(`Latest BMI: ${latestBMI.toFixed(2)}`, 20, 55);
    doc.text(`Average BMI: ${avgBMI.toFixed(2)}`, 20, 62);
    
    // Create table for BMI data
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("BMI History Data", 14, 75);
    
    // Format table data with proper units
    const tableData = history.map(item => {
        const heightUnit = item.unit === 'imperial' ? 'in' : 'cm';
        const weightUnit = item.unit === 'imperial' ? 'lbs' : 'kg';
        
        return [
            new Date(item.time).toLocaleDateString(),
            parseFloat(item.bmi).toFixed(2),
            item.category,
            `${item.heightOriginal || item.height} ${heightUnit}`,
            `${item.weightOriginal || item.weight} ${weightUnit}`
        ];
    });
    
    // Add table with improved styling
    doc.autoTable({
        startY: 80,
        head: [["Date", "BMI", "Category", "Height", "Weight"]],
        body: tableData,
        theme: 'grid',
        headStyles: { 
            fillColor: [75, 192, 192],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        alternateRowStyles: {
            fillColor: [240, 240, 240]
        },
        margin: { top: 80 },
        styles: { 
            fontSize: 9,
            cellPadding: 3 
        },
        columnStyles: {
            0: { cellWidth: 30 }, // Date
            1: { cellWidth: 20, halign: 'center' }, // BMI
            2: { cellWidth: 40 }, // Category
            3: { cellWidth: 30, halign: 'center' }, // Height
            4: { cellWidth: 30, halign: 'center' }  // Weight
        }
    });
    
    // Add BMI category reference
    const finalY = doc.lastAutoTable.finalY + 15;
    
    // If close to the bottom of the page, add a new page
    if (finalY > doc.internal.pageSize.height - 60) {
        doc.addPage();
        doc.setFillColor(75, 192, 192);
        doc.rect(0, 0, 210, 15, 'F');
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(14);
        doc.text("BMI History Report - Page 2", 105, 10, { align: "center" });
        doc.setTextColor(0, 0, 0);
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text("BMI Categories Reference", 14, 30);
        
        addCategoriesTable(doc, 35);
    } else {
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text("BMI Categories Reference", 14, finalY);
        
        addCategoriesTable(doc, finalY + 5);
    }
    
    // Save the PDF
    doc.save("bmi_history.pdf");
    
    showNotification(translations[currentLanguage].pdfDownloaded);
}

// Helper function to add categories table
function addCategoriesTable(doc, startY) {
    const categories = [
        { name: "Underweight", range: "< 18.5", description: "May indicate nutritional deficiency" },
        { name: "Normal weight", range: "18.5 - 24.9", description: "Healthy weight range" },
        { name: "Overweight", range: "25 - 29.9", description: "Increased health risks" },
        { name: "Obesity", range: "≥ 30", description: "High risk for health problems" }
    ];
    
    const categoriesData = categories.map(c => [c.name, c.range, c.description]);
    
    doc.autoTable({
        startY: startY,
        head: [["Category", "BMI Range", "Health Implication"]],
        body: categoriesData,
        theme: 'grid',
        headStyles: { 
            fillColor: [75, 192, 192],
            textColor: [255, 255, 255],
            fontStyle: 'bold'
        },
        styles: { 
            fontSize: 9,
            cellPadding: 3 
        },
        columnStyles: {
            0: { cellWidth: 40 },
            1: { cellWidth: 30, halign: 'center' },
            2: { cellWidth: 80 }
        }
    });
    
    // Add footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        doc.text('BMI Calculator © 2025 | Created by Anggra.Dev', 105, 290, { align: 'center' });
        doc.text(`Page ${i} of ${pageCount}`, 195, 290, { align: 'right' });
    }
}

// Tambahkan fungsi ini tepat setelah window.onload
function addSampleData() {
    // Clear existing history first
    history = [];
    
    // Add sample data points for testing
    const today = new Date();
    
    // Add sample data points from oldest to newest
    const sampleData = [
        { bmi: 28.5, height: 170, weight: 82.4, date: new Date(today.getTime() - 60*24*60*60*1000) }, // 60 days ago
        { bmi: 27.8, height: 170, weight: 80.2, date: new Date(today.getTime() - 50*24*60*60*1000) }, // 50 days ago
        { bmi: 26.9, height: 170, weight: 77.8, date: new Date(today.getTime() - 40*24*60*60*1000) }, // 40 days ago
        { bmi: 25.7, height: 170, weight: 74.3, date: new Date(today.getTime() - 30*24*60*60*1000) }, // 30 days ago
        { bmi: 24.8, height: 170, weight: 71.7, date: new Date(today.getTime() - 20*24*60*60*1000) }, // 20 days ago
        { bmi: 23.6, height: 170, weight: 68.2, date: new Date(today.getTime() - 10*24*60*60*1000) }, // 10 days ago
        { bmi: 22.4, height: 170, weight: 64.7, date: new Date(today.getTime() - 5*24*60*60*1000) }   // 5 days ago
    ];
    
    sampleData.forEach(item => {
        let category = '';
        if (item.bmi < 18.5) category = translations[currentLanguage].underweight;
        else if (item.bmi < 25) category = translations[currentLanguage].normal;
        else if (item.bmi < 30) category = translations[currentLanguage].overweight;
        else category = translations[currentLanguage].obese;
        
        history.push({
            bmi: item.bmi.toFixed(2),
            category,
            time: item.date.toLocaleString(),
            height: item.height.toFixed(1),
            weight: item.weight.toFixed(1),
            heightOriginal: item.height.toFixed(1),
            weightOriginal: item.weight.toFixed(1),
            unit: 'metric'
        });
    });
    
    // Save to localStorage
    localStorage.setItem('bmiHistory', JSON.stringify(history));
    
    // Update UI
    updateHistory();
    
    // Show notification
    showNotification(translations[currentLanguage].sampleDataAdded);
}

function toggleLanguage() {
    // Toggle between English and Indonesian
    currentLanguage = (currentLanguage === 'en') ? 'id' : 'en';
    
    // Save preference
    localStorage.setItem('bmiLanguage', currentLanguage);
    
    // Update UI
    updateLanguage();
    
    // Show notification
    if (currentLanguage === 'en') {
        showNotification(translations.en.changedToEnglish);
    } else {
        showNotification(translations.id.changedToIndonesian);
    }
}

function updateLanguage() {
    // Update language selector button text
    document.getElementById('currentLang').textContent = currentLanguage.toUpperCase();
    
    // Update navbar elements
    document.getElementById('app-title').textContent = translations[currentLanguage].appTitle;
    document.getElementById('app-subtitle').textContent = translations[currentLanguage].appSubtitle;
    document.getElementById('quick-info').textContent = translations[currentLanguage].quickInfo;
    document.getElementById('toggle-units').innerHTML = translations[currentLanguage].metricImperial;
    
    // Update control buttons
    document.getElementById('toggleModeBtn').textContent = document.body.classList.contains('dark-mode') ? 
        translations[currentLanguage].lightMode : 
        translations[currentLanguage].darkMode;
    document.getElementById('exportPDFBtn').innerHTML = `<i class="fas fa-file-pdf"></i> ${translations[currentLanguage].exportPDF}`;
    
    // Update main nav buttons - preserve the event listeners by updating only the text content
    const calcButton = document.getElementById('button-calc');
    const historyButton = document.getElementById('button-history');
    const infoButton = document.getElementById('button-info');
    
    // Save button icons
    const calcButtonIcon = '<i class="fas fa-calculator"></i> ';
    const historyButtonIcon = '<i class="fas fa-history"></i> ';
    const infoButtonIcon = '<i class="fas fa-info-circle"></i> ';
    
    // Update button content while preserving event listeners
    calcButton.innerHTML = calcButtonIcon + translations[currentLanguage].bmiCalculatorPro;
    historyButton.innerHTML = historyButtonIcon + translations[currentLanguage].history;
    infoButton.innerHTML = infoButtonIcon + translations[currentLanguage].infoBmi;
    
    // Reinitialize tab event listeners
    initTabs();
    
    // Update BMI calculator form with correct labels
    const heightUnit = useMetric ? '(cm)' : '(in)';
    const weightUnit = useMetric ? '(kg)' : '(lbs)';
    document.getElementById('label-height').innerHTML = `<i class="fas fa-ruler-vertical"></i> ${translations[currentLanguage].height} <span id="height-unit">${heightUnit}</span>`;
    document.getElementById('label-weight').innerHTML = `<i class="fas fa-weight"></i> ${translations[currentLanguage].weight} <span id="weight-unit">${weightUnit}</span>`;
    document.getElementById('calculate-button').innerHTML = `<i class="fas fa-calculator"></i> ${translations[currentLanguage].calculate}`;
    document.getElementById('reset-button').innerHTML = `<i class="fas fa-redo"></i> ${translations[currentLanguage].reset}`;
    
    // Update pro features labels
    const proFeatureTitles = document.querySelectorAll('.pro-feature-title');
    if (proFeatureTitles.length >= 3) {
        proFeatureTitles[0].textContent = translations[currentLanguage].idealWeight;
        proFeatureTitles[1].textContent = translations[currentLanguage].dailyCalories;
        proFeatureTitles[2].textContent = translations[currentLanguage].targetWeight;
    }
    
    const proFeatureDescs = document.querySelectorAll('.pro-feature-desc');
    if (proFeatureDescs.length >= 3) {
        proFeatureDescs[0].textContent = translations[currentLanguage].idealWeightDesc;
        proFeatureDescs[1].textContent = translations[currentLanguage].caloriesDesc;
        proFeatureDescs[2].textContent = translations[currentLanguage].targetWeightDesc;
    }
    
    // Update calorie calculator labels
    document.getElementById('label-activity').textContent = translations[currentLanguage].activityLevel;
    document.getElementById('label-gender').textContent = translations[currentLanguage].gender;
    document.getElementById('label-age').textContent = translations[currentLanguage].age;
    
    // Update activity level options
    document.getElementById('activity-low').textContent = translations[currentLanguage].activityLow;
    document.getElementById('activity-medium').textContent = translations[currentLanguage].activityMedium;
    document.getElementById('activity-high').textContent = translations[currentLanguage].activityHigh;
    document.getElementById('activity-very-high').textContent = translations[currentLanguage].activityVeryHigh;
    
    // Update gender options
    document.getElementById('gender-male').textContent = translations[currentLanguage].male;
    document.getElementById('gender-female').textContent = translations[currentLanguage].female;
    
    // Update target weight calculator title
    document.getElementById('target-calculator-title').innerHTML = `<i class="fas fa-bullseye"></i> ${translations[currentLanguage].targetCalculator}`;
    
    // Update health tips
    document.getElementById('health-tips-title').innerHTML = `<i class="fas fa-lightbulb"></i> ${translations[currentLanguage].healthTips}`;
    
    // Update health tip cards
    const tipCards = document.querySelectorAll('.tip-card p');
    if (tipCards.length >= 4) {
        tipCards[0].textContent = translations[currentLanguage].tip1;
        tipCards[1].textContent = translations[currentLanguage].tip2;
        tipCards[2].textContent = translations[currentLanguage].tip3;
        tipCards[3].textContent = translations[currentLanguage].tip4;
    }
    
    // Update BMI categories
    document.getElementById('bmi-categories-title').innerHTML = `<i class="fas fa-info-circle"></i> ${translations[currentLanguage].categories}`;
    document.getElementById('cat-underweight').textContent = translations[currentLanguage].underweight;
    document.getElementById('cat-normal').textContent = translations[currentLanguage].normal;
    document.getElementById('cat-overweight').textContent = translations[currentLanguage].overweight;
    document.getElementById('cat-obese').textContent = translations[currentLanguage].obese;
    
    document.getElementById('risk-underweight').textContent = translations[currentLanguage].riskMalnutrition;
    document.getElementById('risk-normal').textContent = translations[currentLanguage].riskLow;
    document.getElementById('risk-overweight').textContent = translations[currentLanguage].riskDiabetes;
    document.getElementById('risk-obese').textContent = translations[currentLanguage].riskHeart;
    
    // Update the category tips
    const categoryTips = document.querySelectorAll('.category-tips span');
    if (categoryTips.length >= 4) {
        categoryTips[0].textContent = translations[currentLanguage].tipUnderweightShort;
        categoryTips[1].textContent = translations[currentLanguage].tipNormalShort;
        categoryTips[2].textContent = translations[currentLanguage].tipOverweightShort;
        categoryTips[3].textContent = translations[currentLanguage].tipObeseShort;
    }
    
    // Update the BMI interpretation section
    const bmiInterpretationTitle = document.querySelector('.bmi-interpretation h4');
    const bmiInterpretationText = document.querySelector('.bmi-interpretation p');
    if (bmiInterpretationTitle && bmiInterpretationText) {
        bmiInterpretationTitle.innerHTML = `<i class="fas fa-book"></i> ${translations[currentLanguage].bmiInterpretation}`;
        bmiInterpretationText.textContent = translations[currentLanguage].bmiInterpretationText;
    }
    
    // Update FAQ section
    document.getElementById('faq-title').textContent = translations[currentLanguage].faqAboutBMI;
    document.getElementById('faq-what').textContent = translations[currentLanguage].faqWhat;
    document.getElementById('faq-accurate').textContent = translations[currentLanguage].faqAccurate;
    document.getElementById('faq-lower').textContent = translations[currentLanguage].faqLower;
    
    document.getElementById('faq-what-answer').textContent = translations[currentLanguage].faqWhatAnswer;
    document.getElementById('faq-accurate-answer').textContent = translations[currentLanguage].faqAccurateAnswer;
    document.getElementById('faq-lower-answer').textContent = translations[currentLanguage].faqLowerAnswer;
    
    // Update history buttons
    document.getElementById('clear-history').innerHTML = `<i class="fas fa-trash"></i> ${translations[currentLanguage].clear}`;
    document.getElementById('add-test-data').innerHTML = `<i class="fas fa-vial"></i> ${translations[currentLanguage].addTestData}`;
    
    // Update footer
    document.getElementById('created-by').textContent = translations[currentLanguage].createdBy;
    
    // Update BMI result if it exists
    const resultDiv = document.getElementById('result');
    if (resultDiv && resultDiv.innerHTML !== '') {
        // If we have BMI calculation results, recalculate to refresh the UI with new language
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
            calculateBMI();
        }
    }
    
    // Update placeholder texts
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    
    if (useMetric) {
        heightInput.placeholder = 'e.g. 170';
        weightInput.placeholder = 'e.g. 65';
    } else {
        heightInput.placeholder = 'e.g. 67';
        weightInput.placeholder = 'e.g. 145';
    }
    
    // Update placeholders in pro features
    if (!heightInput.value || heightInput.value === '') {
        document.getElementById("ideal-weight-result").innerHTML = `<span class="placeholder">${translations[currentLanguage].enterHeight}</span>`;
    } else {
        // If height is available, update ideal weight with correct language
        updateIdealWeight(parseFloat(heightInput.value));
    }
    
    if (!heightInput.value || !weightInput.value || heightInput.value === '' || weightInput.value === '') {
        document.getElementById("target-weight-result").innerHTML = `<span class="placeholder">${translations[currentLanguage].enterHeightWeight}</span>`;
        document.getElementById("calorie-result").innerHTML = `<span class="placeholder">${translations[currentLanguage].enterHeightWeight}</span>`;
    } else {
        // If height and weight are available, update target weight and calories with correct language
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);
        if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
            const bmi = (useMetric ? weight : weight * 0.453592) / Math.pow((useMetric ? height/100 : height * 0.0254), 2);
            updateTargetWeight(height, weight, bmi);
            updateCalorieCalculation();
        }
    }
    
    // Update share button
    if (document.getElementById('share-button')) {
        document.getElementById('share-button-text').textContent = translations[currentLanguage].share || 'Share';
    }
    
    // Update feedback elements
    if (document.getElementById('feedback-btn-text')) {
        document.getElementById('feedback-btn-text').textContent = translations[currentLanguage].feedback || 'Feedback';
    }
    
    if (document.getElementById('feedback-title')) {
        document.getElementById('feedback-title').innerHTML = `<i class="fas fa-comments"></i> ${translations[currentLanguage].feedback || 'Feedback'}`;
    }
    
    if (document.getElementById('feedback-desc')) {
        document.getElementById('feedback-desc').textContent = translations[currentLanguage].feedbackDesc || 'We value your suggestions to improve this BMI Calculator';
    }
    
    if (document.getElementById('label-name')) {
        document.getElementById('label-name').innerHTML = `<i class="fas fa-user"></i> ${translations[currentLanguage].name || 'Name'}`;
    }
    
    if (document.getElementById('label-email')) {
        document.getElementById('label-email').innerHTML = `<i class="fas fa-envelope"></i> ${translations[currentLanguage].email || 'Email'}`;
    }
    
    if (document.getElementById('label-feedback-type')) {
        document.getElementById('label-feedback-type').innerHTML = `<i class="fas fa-tag"></i> ${translations[currentLanguage].feedbackType || 'Type'}`;
    }
    
    if (document.getElementById('label-message')) {
        document.getElementById('label-message').innerHTML = `<i class="fas fa-comment"></i> ${translations[currentLanguage].message || 'Message'}`;
    }
    
    if (document.getElementById('submit-feedback-text')) {
        document.getElementById('submit-feedback-text').textContent = translations[currentLanguage].submitFeedback || 'Submit Feedback';
    }
    
    if (document.getElementById('cancel-feedback-text')) {
        document.getElementById('cancel-feedback-text').textContent = translations[currentLanguage].cancelFeedback || 'Cancel';
    }
    
    // Update feedback type options
    if (document.getElementById('feedback-suggestion')) {
        document.getElementById('feedback-suggestion').textContent = translations[currentLanguage].suggestion || 'Suggestion';
    }
    
    if (document.getElementById('feedback-bug')) {
        document.getElementById('feedback-bug').textContent = translations[currentLanguage].bugReport || 'Bug Report';
    }
    
    if (document.getElementById('feedback-feature')) {
        document.getElementById('feedback-feature').textContent = translations[currentLanguage].featureRequest || 'Feature Request';
    }
    
    if (document.getElementById('feedback-other')) {
        document.getElementById('feedback-other').textContent = translations[currentLanguage].other || 'Other';
    }
    
    // Update share modal
    if (document.getElementById('share-title')) {
        document.getElementById('share-title').innerHTML = `<i class="fas fa-share-alt"></i> ${translations[currentLanguage].shareResult || 'Share Your BMI Result'}`;
    }
    
    if (document.getElementById('copy-text')) {
        document.getElementById('copy-text').textContent = translations[currentLanguage].copy || 'Copy';
    }
    
    // Update friend comparison
    if (document.getElementById('compare-title')) {
        document.getElementById('compare-title').textContent = translations[currentLanguage].compareWithFriends || 'Compare with Friends';
    }
    
    if (document.getElementById('compare-desc')) {
        document.getElementById('compare-desc').textContent = translations[currentLanguage].seeHowCompares || 'See how your BMI compares:';
    }
    
    if (document.getElementById('add-friend-text')) {
        document.getElementById('add-friend-text').textContent = translations[currentLanguage].addFriend || 'Add Friend';
    }
    
    if (document.getElementById('no-friends-text')) {
        document.getElementById('no-friends-text').textContent = translations[currentLanguage].noFriendsAdded || 'No friends added yet';
    }
    
    // Update friend modal
    if (document.getElementById('compare-modal-title')) {
        document.getElementById('compare-modal-title').innerHTML = `<i class="fas fa-user-plus"></i> ${translations[currentLanguage].addFriendData || "Add Friend's Data"}`;
    }
    
    if (document.getElementById('label-friend-name')) {
        document.getElementById('label-friend-name').innerHTML = `<i class="fas fa-user"></i> ${translations[currentLanguage].friendName || "Friend's Name"}`;
    }
    
    if (document.getElementById('label-friend-gender')) {
        document.getElementById('label-friend-gender').textContent = translations[currentLanguage].gender || 'Gender';
    }
    
    if (document.getElementById('label-friend-age')) {
        document.getElementById('label-friend-age').textContent = translations[currentLanguage].age || 'Age';
    }
    
    if (document.getElementById('friend-male')) {
        document.getElementById('friend-male').textContent = translations[currentLanguage].male || 'Male';
    }
    
    if (document.getElementById('friend-female')) {
        document.getElementById('friend-female').textContent = translations[currentLanguage].female || 'Female';
    }
    
    if (document.getElementById('add-btn-text')) {
        document.getElementById('add-btn-text').textContent = translations[currentLanguage].add || 'Add';
    }
    
    // Update friends comparison if there are any
    if (typeof updateFriendsComparison === 'function') {
        updateFriendsComparison();
    }
    
    // Re-initialize FAQ accordions
    initFAQ();
    
    // Update history list if it exists
    if (history.length > 0) {
        updateHistory();
    }
}

// Helper function to determine BMI category
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return 'underweight';
    } else if (bmi < 24.9) {
        return 'normal';
    } else if (bmi < 29.9) {
        return 'overweight';
    } else {
        return 'obese';
    }
}

// Initialize feedback container
function initFeedback() {
    // Fungsi ini akan dihapus
}

// Share functionality
function showShareModal() {
    console.log("Opening share modal");
    const modal = document.getElementById('shareModal');
    if (!modal) {
        console.error("Share modal not found");
        return;
    }
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    
    // Create share link
    const bmi = calculateBMIValue(parseFloat(height), parseFloat(weight));
    const shareLink = `${window.location.origin}${window.location.pathname}?h=${height}&w=${weight}&bmi=${bmi.toFixed(1)}`;
    
    const shareLinkInput = document.getElementById('shareLink');
    if (shareLinkInput) {
        shareLinkInput.value = shareLink;
    }
    
    // Initialize share buttons
    document.querySelectorAll('.share-btn').forEach(btn => {
        const platform = btn.dataset.platform;
        
        // Remove existing listener by cloning
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);
        
        newBtn.addEventListener('click', () => {
            shareResult(platform, bmi.toFixed(1), shareLink);
        });
    });
    
    // Initialize copy button
    const copyBtn = document.getElementById('copyLink');
    if (copyBtn) {
        // Remove existing listener by cloning
        const newCopyBtn = copyBtn.cloneNode(true);
        copyBtn.parentNode.replaceChild(newCopyBtn, copyBtn);
        
        newCopyBtn.addEventListener('click', () => {
            const linkInput = document.getElementById('shareLink');
            if (linkInput) {
                linkInput.select();
                try {
                    const successful = document.execCommand('copy');
                    showNotification(successful ? 
                        (translations[currentLanguage].linkCopied || 'Link copied to clipboard') : 
                        'Failed to copy link');
                } catch (err) {
                    console.error('Unable to copy', err);
                    showNotification('Failed to copy link');
                }
            }
        });
    }
    
    // Add show class to display the modal
    modal.classList.add('show');
    
    // Close when clicking the X
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        // Remove existing listener by cloning
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        newCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeCompareModal();
        });
    }
    
    // Close when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeCompareModal();
        }
    }, { once: true });
}

// Calculate BMI value without updating UI
function calculateBMIValue(height, weight) {
    // Calculate BMI based on units (metric or imperial)
    let bmi;
    if (useMetric) {
        // Metric formula: BMI = weight(kg) / height²(m)
        const heightInMeters = height / 100;  // convert cm to m
        bmi = weight / (heightInMeters * heightInMeters);
    } else {
        // Imperial formula: BMI = (weight(lbs) * 703) / height²(in)
        bmi = (weight * 703) / (height * height);
    }
    
    // Round to 1 decimal place
    bmi = Math.round(bmi * 10) / 10;
    return bmi;
}

// Share result based on platform
function shareResult(platform, bmi, shareLink) {
    const text = `My BMI is ${bmi}. Check your BMI too!`;
    let url = '';
    
    switch(platform) {
        case 'whatsapp':
            url = `https://wa.me/?text=${encodeURIComponent(text + ' ' + shareLink)}`;
            break;
        case 'twitter':
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareLink)}`;
            break;
        case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareLink)}&quote=${encodeURIComponent(text)}`;
            break;
        case 'email':
            url = `mailto:?subject=${encodeURIComponent('My BMI Result')}&body=${encodeURIComponent(text + '\n\n' + shareLink)}`;
            break;
    }
    
    if (url) {
        window.open(url, '_blank');
    }
}

// Friend comparison functionality
function showCompareModal() {
    const modal = document.getElementById('compareModal');
    if (!modal) {
        console.error("Compare modal not found");
        return;
    }
    
    // Show modal
    modal.classList.add('show');
    
    // Update units based on current preference
    updateFriendModalUnits();
    
    // Initialize form
    const friendForm = document.getElementById('friendForm');
    if (friendForm) {
        // Remove existing event listeners by cloning
        const newForm = friendForm.cloneNode(true);
        friendForm.parentNode.replaceChild(newForm, friendForm);
        
        // Add new event listener
        newForm.addEventListener('submit', function(e) {
            e.preventDefault();
            addFriend(e);
        });
    }
    
    // Close when clicking the X
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        // Remove existing listener by cloning
        const newCloseBtn = closeBtn.cloneNode(true);
        closeBtn.parentNode.replaceChild(newCloseBtn, closeBtn);
        
        newCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeCompareModal();
        });
    }
    
    // Close when clicking outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeCompareModal();
        }
    }, { once: true });
}

function closeCompareModal() {
    document.getElementById('compareModal').classList.remove('show');
    document.getElementById('friendForm').reset();
}

function updateFriendModalUnits() {
    const heightUnit = useMetric ? '(cm)' : '(in)';
    const weightUnit = useMetric ? '(kg)' : '(lbs)';
    
    document.getElementById('friend-height-unit').textContent = heightUnit;
    document.getElementById('friend-weight-unit').textContent = weightUnit;
    
    const heightInput = document.getElementById('friendHeight');
    const weightInput = document.getElementById('friendWeight');
    
    if (useMetric) {
        heightInput.placeholder = 'e.g. 170';
        weightInput.placeholder = 'e.g. 65';
    } else {
        heightInput.placeholder = 'e.g. 67';
        weightInput.placeholder = 'e.g. 145';
    }
}

function addFriend(event) {
    event.preventDefault();
    
    const name = document.getElementById('friendName').value;
    const gender = document.getElementById('friendGender').value;
    const age = document.getElementById('friendAge').value;
    const height = parseFloat(document.getElementById('friendHeight').value);
    const weight = parseFloat(document.getElementById('friendWeight').value);
    
    if (!name || !height || !weight) {
        showNotification(translations[currentLanguage].enterAllFields || 'Please enter all required fields');
        return;
    }
    
    const bmi = calculateBMIValue(height, weight);
    const category = getBMICategory(bmi);
    
    const friend = {
        id: Date.now(),
        name,
        gender,
        age,
        height,
        weight,
        bmi,
        category,
        date: new Date().toISOString()
    };
    
    friendsList.push(friend);
    localStorage.setItem('bmiFriends', JSON.stringify(friendsList));
    
    updateFriendsComparison();
    closeCompareModal();
    
    showNotification(translations[currentLanguage].friendAdded || 'Friend added for comparison');
}

function updateFriendsComparison() {
    const container = document.getElementById('friendsList');
    
    if (friendsList.length === 0) {
        container.innerHTML = `
            <div class="no-friends" id="noFriends">
                <span class="placeholder" id="no-friends-text">${translations[currentLanguage].noFriendsAdded || 'No friends added yet'}</span>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    friendsList.forEach(friend => {
        const initials = friend.name.split(' ').map(n => n[0]).join('').toUpperCase();
        
        const friendItem = document.createElement('div');
        friendItem.className = `friend-item ${friend.category}`;
        
        friendItem.innerHTML = `
            <div class="friend-avatar">${initials}</div>
            <div class="friend-info">
                <div class="friend-name">${friend.name}</div>
                <div class="friend-bmi">
                    BMI: ${friend.bmi.toFixed(1)}
                    <span class="friend-category ${friend.category}">${translations[currentLanguage][friend.category] || friend.category}</span>
                </div>
            </div>
            <button class="friend-remove" onclick="removeFriend(${friend.id})">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        container.appendChild(friendItem);
    });
}

function removeFriend(id) {
    friendsList = friendsList.filter(friend => friend.id !== id);
    localStorage.setItem('bmiFriends', JSON.stringify(friendsList));
    updateFriendsComparison();
    
    showNotification(translations[currentLanguage].friendRemoved || 'Friend removed from comparison');
}

// Handle feedback submission
function submitFeedback(event) {
    // Fungsi ini juga akan dihapus
}

// Check URL for shared BMI data
function checkUrlForSharedData() {
    const urlParams = new URLSearchParams(window.location.search);
    const height = urlParams.get('h');
    const weight = urlParams.get('w');
    
    if (height && weight) {
        // Set values in the inputs
        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');
        
        if (heightInput && weightInput) {
            heightInput.value = height;
            weightInput.value = weight;
            
            // Calculate BMI automatically
            setTimeout(() => {
                calculateBMI();
                
                // Show notification that shared data was loaded
                showNotification(translations[currentLanguage].sharedDataLoaded || 'BMI data loaded from shared link');
            }, 500);
        }
    }
}