# 🚨 AI Safety Incident Dashboard  

A responsive React dashboard for tracking AI safety incidents, featuring filtering, sorting, and incident reporting. Built for **HumanChain's Frontend Intern Assignment**.  

<img width="1440" alt="Screenshot 2025-04-27 at 5 09 54 PM" src="https://github.com/user-attachments/assets/22a2d923-9e42-436f-bda2-3b8ecb3e9142" />


## 🛠️ Tech Stack  
- **Framework**: React (Vite)  
- **Language**: JavaScript  
- **Styling**: Tailwind CSS (Flexbox/Grid)  
- **State Management**: React Hooks  

## ✨ Features  
- 📜 **Incident List**: View titles, severity levels, and dates.  
- 🔍 **Filter/Sort**: Filter by severity (`All/Low/Medium/High`) or sort by date.  
- 📝 **Add New Incidents**: Form with validation.  
- 📱 **Fully Responsive**: Works on mobile, tablet, and desktop.  
- 🎨 **Hover Effects**: Interactive buttons and cards.  

## 🚀 How to Run  
1. **Clone the repo**:  
   ```bash
   git clone https://github.com/your-username/ai-safety-dashboard.git
   cd ai-safety-dashboard
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Start the dev server**:
   ```bash
    npm run dev
   ```
4. Open in browser:
    - Visit ```http://localhost:5173 ```

## 📂 Project Structure

```plaintext
src/
├── components/
│   ├── FilterSortControls.jsx  # Filter and sort UI components
│   ├── IncidentForm.jsx        # New incident reporting form
│   └── IncidentList.jsx        # Incident display component
│   └── StatsOverview.jsx        # Card designing
├── data/
│   └── mockIncidents.js        # Sample incident data
├── pages/
│   └── Dashboard.jsx           # Main dashboard page
├── App.jsx                     # Root component
└── main.jsx                    # Application entry point
```

## 🎨 Design Decisions

1. **Responsive Layout:**
   - Uses Tailwind's responsive grid (`grid-cols-1 md:grid-cols-2`)
   - Form moves from side-by-side to stacked on mobile

2. **User Experience:**
   - Color-coded severity badges (Red/High, Yellow/Medium, Green/Low)
   - Smooth hover transitions on interactive elements
   - Form validation prevents empty submissions

3. **State Management:**
   - Local state for filtering/sorting logic
   - No external state management libraries (per assignment requirements)

4. **Performance:**
   - Vite for fast development builds
   - Pure CSS (Tailwind) for minimal runtime overhead
  
## 📝 Assignment Requirements Checklist
- Display list of incidents (Title, Severity, Date)
- Filter by severity (All/Low/Medium/High)
- Sort by reported date (Newest/Oldest first)
- Expandable incident details
- Form to add new incidents with validation
- Responsive layout (Flexbox/Grid)
- Clean styling with hover effects
- No backend required (pure frontend implementation)

## 🤝 Contributing
This project was created as part of an assignment and is not currently open for contributions.


<i>Submitted by Sahil Singh for SparkleHood Frontend Internship</i>
