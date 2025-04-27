import { useState } from "react"

export default function IncidentForm({ onAddIncident }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [severity, setSeverity] = useState("Medium")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert("Please fill in all required fields!")
      return
    }
    
    const newIncident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    }
    
    onAddIncident(newIncident)
    setTitle("")
    setDescription("")
    setSeverity("Medium")
  }

  return (
    <form onSubmit={handleSubmit} className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl p-6 border border-white/10 h-fit">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
          Report New Incident
        </h3>
        <p className="text-gray-400">Help us improve AI safety by reporting incidents</p>
      </div>
      
      <div className="space-y-6">
        <div className="relative">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-white placeholder-transparent peer"
            placeholder=" "
            required
          />
          <label className="absolute left-3 -top-3 px-1 bg-gray-900 text-sm text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-300">
            Incident Title <span className="text-red-400">*</span>
          </label>
        </div>
        
        <div className="relative">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition text-white placeholder-transparent peer"
            rows="4"
            placeholder=" "
            required
          />
          <label className="absolute left-3 -top-3 px-1 bg-gray-900 text-sm text-gray-300 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-300">
            Description <span className="text-red-400">*</span>
          </label>
        </div>
        
        <div>
          <label className="block text-sm text-gray-300 mb-3">
            Severity Level
          </label>
          <div className="grid grid-cols-3 gap-3">
            {["Low", "Medium", "High"].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setSeverity(level)}
                className={`py-3 rounded-lg font-medium transition-all ${
                  severity === level
                    ? level === "High"
                      ? "bg-red-500/20 text-red-400 border border-red-400/30"
                      : level === "Medium"
                      ? "bg-amber-500/20 text-amber-400 border border-amber-400/30"
                      : "bg-green-500/20 text-green-400 border border-green-400/30"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-500 hover:to-purple-500 shadow-lg transition-all transform hover:scale-[1.01]"
        >
          Submit Incident Report
        </button>
      </div>
    </form>
  )
}