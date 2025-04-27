import { useState } from "react";

export default function IncidentList({ incidents }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {incidents.map((incident) => (
        <div
          key={incident.id}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
        >
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-800">{incident.title}</h3>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    incident.severity === "High"
                      ? "bg-red-100 text-red-800"
                      : incident.severity === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {incident.severity}
                </span>
                <span className="text-gray-500 text-sm">
                  {new Date(incident.reported_at).toLocaleDateString()}
                </span>
              </div>
            </div>
            <button
              onClick={() => toggleExpand(incident.id)}
              className="text-blue-500 hover:text-blue-700 text-sm font-medium whitespace-nowrap"
            >
              {expandedId === incident.id ? "Hide Details" : "View Details"}
            </button>
          </div>
          {expandedId === incident.id && (
            <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-700">{incident.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}