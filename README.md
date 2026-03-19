# 🚀 SSP Portal (Stock Prediction Portal)

## 📌 Overview

SSP Portal is a web-based application that allows users to analyze and predict stock prices using Machine Learning models. It provides an interactive dashboard where users can visualize historical stock data and future predictions.

---

## 🛠️ Tech Stack

* **Backend:** Django, Django REST Framework
* **Frontend:** HTML, CSS, JavaScript (or React if used)
* **ML Libraries:** TensorFlow, Keras, Scikit-learn
* **Data Handling:** Pandas, NumPy
* **Visualization:** Matplotlib

---

## ✨ Features

* 📈 Stock price prediction using LSTM model
* 📊 Interactive data visualization
* 🔐 User authentication & secure APIs
* 🌐 RESTful API endpoints

---

## 📂 Project Structure

```
ssp_portal/
│── backend-drf/
│   ├── accounts/
│   ├── api/
│   ├── stock_prediction_main/
│   ├── manage.py
│   └── stock_predixtion_model.keras
│
│── resources-model-ml/
│   ├── model.py
│   ├── data_preprocessing.py
│   └── predict.py
│
│── frontend-react/
│   ├── templates/
│   ├── static/
│
│── requirements.txt
│── manage.py
│── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/ssp-portal.git](https://github.com/ankitpatelog/spp-portal.git)
cd ssp-portal
```

### 2. Create Virtual Environment

```bash
python -m venv env
source newenv/bin/activate   # Linux/Mac
newenv\Scripts\activate    # Windows
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Configure Environment Variables

Create a `.env` file:

```
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=your_supabase_postgres_url
```

### 5. Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Start Server

```bash
python manage.py runserver
```

---

## 🤖 Machine Learning Model

* Uses LSTM (Long Short-Term Memory) for time-series prediction
* Input: Last 100 days stock prices
* Output: Next day predicted price

### Model Flow

1. Data Collection
2. Data Preprocessing (Scaling using MinMaxScaler)
3. Sequence Creation
4. Model Training (LSTM)
5. Prediction & Visualization

---

## 🔐 API Endpoints (Example)

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | /api/register/   | Register user       |
| POST   | /api/login/      | Login user          |
| GET    | /api/stock-data/ | Get stock data      |
| POST   | /api/predict/    | Predict stock price |

---

## 📊 Future Improvements

* Real-time stock data integration
* Deployment on AWS/GCP
* Advanced models (Transformer-based)
* Portfolio tracking

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Ankit Patel**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
