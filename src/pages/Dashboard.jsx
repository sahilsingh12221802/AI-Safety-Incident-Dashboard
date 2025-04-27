import { useState, useEffect } from 'react'
import { mockIncidents } from '../data/mockIncidents'
import IncidentList from '../components/IncidentList'
import FilterSortControls from '../components/FilterSortControls'
import IncidentForm from '../components/IncidentForm'
import StatsOverview from '../components/StatsOverview'

export default function Dashboard() {
  const [incidents, setIncidents] = useState(mockIncidents)
  const [filter, setFilter] = useState("All")
  const [sortOrder, setSortOrder] = useState("newest")

  // Calculate stats for the overview
  const stats = {
    total: incidents.length,
    high: incidents.filter(i => i.severity === "High").length,
    medium: incidents.filter(i => i.severity === "Medium").length,
    low: incidents.filter(i => i.severity === "Low").length
  }

  const filteredIncidents = incidents.filter((incident) => 
    filter === "All" ? true : incident.severity === filter
  )

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at)
    const dateB = new Date(b.reported_at)
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB
  })

  const handleAddIncident = (newIncident) => {
    setIncidents([newIncident, ...incidents])
  }

  return (
    <div className="min-h-screen bg-gray-900 overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-gray-900 to-purple-900/30 animate-gradient"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            AI Safety Intelligence
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real-time monitoring and analysis of AI safety incidents
          </p>
        </header>

        <StatsOverview stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-1">
            <IncidentForm onAddIncident={handleAddIncident} />
          </div>
          
          <div className="lg:col-span-2">
            <div className="backdrop-blur-lg bg-white/5 rounded-2xl shadow-2xl p-6 border border-white/10">
              <FilterSortControls
                filter={filter}
                setFilter={setFilter}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
              />
              <IncidentList incidents={sortedIncidents} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}