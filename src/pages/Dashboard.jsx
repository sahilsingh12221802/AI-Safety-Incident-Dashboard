import { useState } from "react";
import { mockIncidents } from "../data/mockIncidents";
import IncidentList from "../components/IncidentList";
import FilterSortControls from "../components/FilterSortControls";
import IncidentForm from "../components/IncidentForm";

export default function Dashboard() {
  const [incidents, setIncidents] = useState(mockIncidents);
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const filteredIncidents = incidents.filter((incident) => 
    filter === "All" ? true : incident.severity === filter
  );

  const sortedIncidents = [...filteredIncidents].sort((a, b) => {
    const dateA = new Date(a.reported_at);
    const dateB = new Date(b.reported_at);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const handleAddIncident = (newIncident) => {
    setIncidents([newIncident, ...incidents]);
  };

  return (
    <div className="container mx-auto p-4 md:p-6 max-w-6xl">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
        AI Safety Incident Dashboard
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <IncidentForm onAddIncident={handleAddIncident} />
        </div>
        <div className="lg:col-span-2">
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
  );
}


