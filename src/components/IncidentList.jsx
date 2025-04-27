import { useState } from "react"

export default function IncidentList({ incidents }) {
  const [expandedId, setExpandedId] = useState(null)

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const severityStyles = {
    High: {
      bg: 'bg-red-500/10',
      text: 'text-red-400',
      border: 'border-red-400/30',
      pulse: 'before:bg-red-400'
    },
    Medium: {
      bg: 'bg-amber-500/10',
      text: 'text-amber-400',
      border: 'border-amber-400/30',
      pulse: 'before:bg-amber-400'
    },
    Low: {
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      border: 'border-green-400/30',
      pulse: 'before:bg-green-400'
    }
  }

  return (
    <div className="space-y-4">
      {incidents.map((incident) => {
        const styles = severityStyles[incident.severity] || severityStyles.Medium
        
        return (
          <div
            key={incident.id}
            className={`${styles.bg} ${styles.border} border-l-4 rounded-xl p-5 transition-all duration-300 hover:shadow-lg backdrop-blur-sm relative overflow-hidden group`}
          >
            {/* Animated pulse effect */}
            <div className={`absolute inset-0 ${styles.pulse} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`${styles.text} font-semibold text-xs tracking-wider uppercase`}>
                      {incident.severity} SEVERITY
                    </span>
                    <span className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded-full">
                      {new Date(incident.reported_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {incident.title}
                  </h3>
                </div>
                <button
                  onClick={() => toggleExpand(incident.id)}
                  className="text-indigo-300 hover:text-white font-medium flex items-center gap-1 text-sm transition-colors"
                >
                  {expandedId === incident.id ? (
                    <>
                      <span>Collapse</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>Details</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              {expandedId === incident.id && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-gray-300">{incident.description}</p>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}