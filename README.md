# 🌍Rhodes Cultural Platform 

A multilingual (Greek / English) web platform showcaseing cultural activities in Rhodes.
Built with **React**, **Tailwind CSS**, **Leaflet (OpenStreetMap)**, and a **Python data pipeline** that automatically converts Google Form submissions into structured JSON data.

## Quick Start 
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/dimitrasamoli/rhodes-cultural-platform.git
cd rhodes-cultural-platform
```

### 2️⃣ Install Dependencies 
```bash
npm install
```

### 3️⃣ Run Development Server 
```bash
npm start
```
Opens the app at :
👉🏻 http://localhost:3000

### 4️⃣ Build for Production 
```bash
npm start
```
Creates an optimized static build in: 
```bash
/build
```

## Data Pipeline
The platform includes an automated pipline for updating cultural events. 
```bash
Google Form -> CSV (sheet.csv) -> csv_to_json.py -> src/data/events.json -> React pages
```

### Data Processing 
1. Cultural organizers submit event data through a **Google Form**
2. Google Sheet exports respones as a **CSV file** (sheet.csv)
3. The Python script csv_to_json.py:
   - loads the CSV using **Pandas**
   - cleans & tranforms the data
   - generates a structured JSON file:
   ```bash
   src/data/events.json
   ```
4. React imports this JSON directly
   ```bash
   import eventsData from "../data/events.json";
5. All event-related pages update automatically during the build

###
  - The platform works even when opened via file://
  - No backend or server is required
  - All data is bundled dorectly into the final static build 
