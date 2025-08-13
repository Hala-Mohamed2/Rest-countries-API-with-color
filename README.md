# Rest Countries API with Color 🌍

*[العربية](#العربية) | [English](#english)*

---

## العربية

تطبيق ويب حديث ومتجاوب يعرض معلومات شاملة عن دول العالم باستخدام REST Countries API. يتميز بواجهة جميلة وملونة مع عناصر تفاعلية وتجربة مستخدم سلسة.

### 🚀 العرض التوضيحي

[العرض المباشر](https://your-demo-link.com) <!-- استبدل برابط العرض الفعلي -->

### ✨ المميزات

- 🔍 **وظيفة البحث** - العثور على الدول بالاسم
- 🗺️ **تصفية حسب المنطقة** - تصفية الدول حسب القارة
- 📱 **تصميم متجاوب** - يعمل على جميع الأجهزة
- 🌓 **الوضع المظلم/المضيء** - التبديل بين الثيمات
- 🎨 **واجهة ملونة** - تصميم بصري جذاب
- 📊 **معلومات مفصلة** - عدد السكان، العاصمة، اللغات، العملات وأكثر
- 🏳️ **أعلام الدول** - صور عالية الجودة للأعلام
- 🔗 **الدول الحدودية** - التنقل للدول المجاورة

### 🛠️ التقنيات المستخدمة

- **HTML5** - ترميز دلالي
- **CSS3** - تصميم حديث مع Flexbox/Grid
- **Vanilla JavaScript** - ميزات ES6+
- **REST Countries API** - مصدر بيانات الدول
- **Font Awesome** - الأيقونات (اختياري)

### 📦 التثبيت

1. استنساخ المستودع:
   ```bash
   git clone https://github.com/your-username/rest-countries-api-color.git
   ```

2. الانتقال إلى مجلد المشروع:
   ```bash
   cd rest-countries-api-color
   ```

3. فتح `index.html` في المتصفح أو استخدام خادم محلي:
   ```bash
   # باستخدام Python
   python -m http.server 3000
   
   # باستخدام Node.js
   npx serve .
   
   # باستخدام Live Server في VS Code
   ```

### 🎯 الاستخدام

1. **تصفح الدول**: التمرير عبر قائمة جميع الدول
2. **البحث**: استخدام شريط البحث للعثور على دول محددة
3. **التصفية**: اختيار منطقة من القائمة المنسدلة لتصفية الدول
4. **عرض التفاصيل**: النقر على أي بطاقة دولة لرؤية معلومات مفصلة
5. **تبديل الثيم**: التبديل بين الأوضاع المضيئة والمظلمة
6. **التنقل**: النقر على الدول الحدودية لاستكشاف الدول المجاورة

### 🌐 مرجع API

يستخدم هذا المشروع [REST Countries API](https://restcountries.com/) لجلب بيانات الدول.

#### نقاط النهاية المستخدمة:
- `GET /v3.1/all` - الحصول على جميع الدول
- `GET /v3.1/name/{name}` - البحث عن الدول بالاسم
- `GET /v3.1/region/{region}` - التصفية حسب المنطقة
- `GET /v3.1/alpha/{code}` - الحصول على دولة بالرمز

### 📁 هيكل المشروع

```
rest-countries-api-color/
│
├── index.html              # ملف HTML الرئيسي
├── css/
│   └── style.css          # ملف التنسيقات الرئيسي
├── js/
│   ├── app.js             # ملف JavaScript الرئيسي
│   └── country-detail.js  # وظائف تفاصيل الدولة
├── images/
│   └── screenshots/       # لقطات شاشة المشروع
├── README.md              # وثائق المشروع
├── LICENSE                # ملف الترخيص
└── .gitignore            # ملف Git ignore
```

### 🤝 المساهمة

المساهمات مرحب بها! لا تتردد في تقديم Pull Request.

1. Fork المشروع
2. إنشاء فرع الميزة الخاص بك (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

### 📄 الترخيص

هذا المشروع مرخص تحت ترخيص MIT - انظر ملف [LICENSE](LICENSE) للتفاصيل.

### 🙏 الشكر والتقدير

- [REST Countries API](https://restcountries.com/) لتوفير بيانات شاملة للدول
- [Font Awesome](https://fontawesome.com/) للأيقونات (إذا تم الاستخدام)
- الإلهام من تطبيقات استكشاف الدول المختلفة

---

## English

A modern, responsive web application that displays comprehensive information about world countries using the REST Countries API. Features a beautiful, colorful interface with interactive elements and smooth user experience.

### 🚀 Demo

[Live Demo](https://your-demo-link.com) <!-- Replace with your actual demo link -->

### ✨ Features

- 🔍 **Search Functionality** - Find countries by name
- 🗺️ **Region Filtering** - Filter countries by continent
- 📱 **Responsive Design** - Works on all devices
- 🌓 **Dark/Light Theme** - Toggle between themes
- 🎨 **Colorful Interface** - Engaging visual design
- 📊 **Detailed Country Info** - Population, capital, languages, currencies, and more
- 🏳️ **Country Flags** - High-quality flag images
- 🔗 **Border Countries** - Navigate to neighboring countries

### 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox/Grid
- **Vanilla JavaScript** - ES6+ features
- **REST Countries API** - Country data source
- **Font Awesome** - Icons (optional)

### 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rest-countries-api-color.git
   ```

2. Navigate to the project directory:
   ```bash
   cd rest-countries-api-color
   ```

3. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 3000
   
   # Using Node.js
   npx serve .
   
   # Using Live Server extension in VS Code
   ```

### 🎯 Usage

1. **Browse Countries**: Scroll through the list of all countries
2. **Search**: Use the search bar to find specific countries
3. **Filter**: Select a region from the dropdown to filter countries
4. **View Details**: Click on any country card to see detailed information
5. **Theme Toggle**: Switch between light and dark modes
6. **Navigate**: Click on border countries to explore neighboring nations

### 🌐 API Reference

This project uses the [REST Countries API](https://restcountries.com/) to fetch country data.

#### Endpoints Used:
- `GET /v3.1/all` - Get all countries
- `GET /v3.1/name/{name}` - Search countries by name
- `GET /v3.1/region/{region}` - Filter by region
- `GET /v3.1/alpha/{code}` - Get country by code

### 📁 Project Structure

```
rest-countries-api-color/
│
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── app.js             # Main JavaScript file
│   └── country-detail.js  # Country details functionality
├── images/
│   └── screenshots/       # Project screenshots
├── README.md              # Project documentation
├── LICENSE                # License file
└── .gitignore            # Git ignore file
```

### 📱 Screenshots

#### Light Theme / الوضع المضيء
![Light Theme](images/screenshots/light-theme.png)

#### Dark Theme / الوضع المظلم
![Dark Theme](images/screenshots/dark-theme.png)

#### Country Details / تفاصيل الدولة
![Country Details](images/screenshots/country-details.png)

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 🙏 Acknowledgments

- [REST Countries API](https://restcountries.com/) for providing comprehensive country data
- [Font Awesome](https://fontawesome.com/) for icons (if used)
- Inspiration from various country explorer applications

### 📧 Contact

Your Name - [@your-twitter](https://twitter.com/your-twitter) - your.email@example.com

Project Link: [https://github.com/your-username/rest-countries-api-color](https://github.com/your-username/rest-countries-api-color)

---

⭐️ If you found this project helpful, please give it a star!  
⭐️ إذا وجدت هذا المشروع مفيداً، يرجى إعطاؤه نجمة!
