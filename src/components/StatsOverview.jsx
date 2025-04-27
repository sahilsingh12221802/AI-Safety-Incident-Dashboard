export default function StatsOverview({ stats }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard 
          value={stats.total} 
          label="Total Incidents" 
          color="from-blue-500 to-blue-600"
          icon="📊"
        />
        <StatCard 
          value={stats.high} 
          label="High Severity" 
          color="from-red-500 to-red-600"
          icon="⚠️"
        />
        <StatCard 
          value={stats.medium} 
          label="Medium Severity" 
          color="from-amber-500 to-amber-600"
          icon="🔍"
        />
        <StatCard 
          value={stats.low} 
          label="Low Severity" 
          color="from-green-500 to-green-600"
          icon="📝"
        />
      </div>
    )
  }
  
  function StatCard({ value, label, color, icon }) {
    return (
      <div className={`bg-gradient-to-br ${color} rounded-xl p-5 shadow-lg transform hover:scale-[1.02] transition-transform`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-3xl font-bold text-white">{value}</div>
            <div className="text-white/80 text-sm mt-1">{label}</div>
          </div>
          <div className="text-3xl">{icon}</div>
        </div>
      </div>
    )
  }