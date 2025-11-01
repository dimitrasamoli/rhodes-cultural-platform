# Rhodes Cultural Platform

**Overview.** A multilingual (GR/EN) web platform that aggregates and visualizes cultural activities across Rhodes. A Google Form → CSV → Python (Pandas) → JSON pipeline feeds the React app (Activities, Map, Plan Your Trip, Experiences). Built with React, Tailwind CSS, Leaflet/OSM, and i18next.

## Features
- Dynamic Activities with bilingual content (GR/EN)
- Interactive map (Leaflet/OSM) with event markers
- “Plan Your Trip” lightweight itinerary view
- Open-source, sustainable stack (no proprietary map APIs)

## Data Pipeline
Google Form → CSV → `scripts/csv_to_json.py` → `public/data/events.json`.

## Tech Stack
React, React Router, Tailwind CSS, Leaflet/OSM, i18next, Python (Pandas).
