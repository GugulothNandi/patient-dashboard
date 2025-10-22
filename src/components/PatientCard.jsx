import React from "react";

function PatientCard({ patient }) {
  const initials = patient.name
    ? patient.name
        .split(" ")
        .map((word) => word[0])
        .slice(0, 2)
        .join("")
    : "NA";

  const handleView = () => alert(`Viewing record for ${patient.name}`);
  const handleEdit = () => alert(`Editing ${patient.name}'s details`);
  const handleDelete = () => alert(`Deleting ${patient.name}`);

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold">
          {initials}
        </div>
        <div>
          <p className="font-semibold">{patient.name}</p>
          <p className="text-sm text-gray-500">
            Age: {patient.age} • {patient.condition}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={handleView}
          className="px-3 py-1 border rounded hover:bg-gray-50"
        >
          View
        </button>
        <button
          onClick={handleEdit}
          className="px-3 py-1 border rounded hover:bg-gray-50"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="px-3 py-1 border rounded hover:bg-gray-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default PatientCard;
