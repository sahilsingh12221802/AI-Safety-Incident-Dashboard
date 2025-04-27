import { useState } from "react";

export default function IncidentForm({ onAddIncident }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Title and Description are required!");
    
    const newIncident = {
      id: Date.now(),
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };
    
    onAddIncident(newIncident);
    setTitle("");
    setDescription("");
    setSeverity("Medium");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="font-bold text-lg mb-4 text-gray-800">Report New Incident</h3>
      <div className="space-y-3">
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Title*</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
            required
          />
        </div>
        {/* Description Textarea */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Description*</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
            rows="3"
            required
          />
        </div>
        {/* Severity Dropdown */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Severity</label>
          <select
            value={severity}
            onChange={(e) => setSeverity(e.target.value)}
            className="w-full p-2 border rounded-md hover:border-blue-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 active:bg-blue-700 transition"
        >
          Submit Incident
        </button>
      </div>
    </form>
  );
}
