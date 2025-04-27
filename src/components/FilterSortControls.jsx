export default function FilterSortControls({ filter, setFilter, sortOrder, setSortOrder }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Severity
        </label>
        <div className="inline-flex rounded-lg shadow-sm">
          {["All", "Low", "Medium", "High"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setFilter(option)}
              className={`px-4 py-2 text-sm font-medium border ${
                filter === option
                  ? option === "High"
                    ? "bg-red-50 text-red-700 border-red-300"
                    : option === "Medium"
                    ? "bg-amber-50 text-amber-700 border-amber-300"
                    : option === "Low"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                    : "bg-indigo-50 text-indigo-700 border-indigo-300"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              } ${
                option === "All" ? "rounded-l-lg" : 
                option === "High" ? "rounded-r-lg" : 
                "border-l-0 border-r-0"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sort by Date
        </label>
        <div className="inline-flex rounded-lg shadow-sm">
          {["newest", "oldest"].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSortOrder(option)}
              className={`px-4 py-2 text-sm font-medium border ${
                sortOrder === option
                  ? "bg-indigo-50 text-indigo-700 border-indigo-300"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              } ${
                option === "newest" ? "rounded-l-lg" : "rounded-r-lg border-l-0"
              }`}
            >
              {option === "newest" ? "Newest First" : "Oldest First"}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}