export default function FilterSortControls({ filter, setFilter, sortOrder, setSortOrder }) {
    return (
      <div className="flex flex-col sm:flex-row gap-4 mb-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700">Filter by Severity</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-2 border rounded-md hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
          >
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1 text-gray-700">Sort by Date</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full p-2 border rounded-md hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>
    );
  }