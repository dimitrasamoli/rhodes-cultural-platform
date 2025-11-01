# Rhodes Cultural Platform

A multilingual web platform (Greek/English) showcasing cultural activities in Rhodes.  
Built with **React**, **Tailwind CSS**, **Leaflet (OpenStreetMap)**, and a **Python data pipeline** for automated event updates.

## 🧭 Quick Start

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/rhodes-cultural-platform.git
cd rhodes-cultural-platform

### 2️⃣ Install Dependencies
npm install
# or:
yarn

### 3️⃣ Run Development Server
npm start
# opens http://localhost:3000

### 4️⃣ Build for Production
npm run build
# creates an optimized build in /build


📊 Data Pipeline (Events)
Cultural event data is submitted through a Google Form, exported as a CSV file, and converted to JSON with Python.
Google Form → CSV → csv_to_json.py → public/data/events.json

🔁 To Regenerate the JSON
Replace the old CSV file (e.g. sheet.csv) with the new export.
Run the script:
python scripts/csv_to_json.py

A new file events.json will be generated inside public/data/.
The website automatically loads and displays events from this JSON file.
