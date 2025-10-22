import React, { useEffect, useState, useMemo } from "react";
import PatientCard from "../components/PatientCard";
import { fetchPatients, addPatient } from "../services/patientService";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetchPatients().then((data) => {
      if (isMounted) {
        setPatients(data);
        setLoading(false);
      }
    });
    return () => (isMounted = false);
  }, []);

  const filteredPatients = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return patients;
    return patients.filter((p) =>
      (p.name + " " + p.age + " " + p.condition).toLowerCase().includes(q)
    );
  }, [patients, query]);

  const handleAddPatient = async (patient) => {
    const newPatient = await addPatient(patient);
    setPatients((prev) => [newPatient, ...prev]);
    setShowForm(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Patients</h2>
        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search patients"
            className="border rounded px-3 py-2"
          />
          <button
            onClick={() => setShowForm((prev) => !prev)}
            className="bg-green-600 text-white px-3 py-2 rounded"
          >
            {showForm ? "Close" : "Add Patient"}
          </button>
        </div>
      </div>

      {showForm && <PatientForm onAdd={handleAddPatient} />}

      {loading ? (
        <div className="p-6 bg-white rounded shadow">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPatients.map((p) => (
            <PatientCard key={p.id} patient={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function PatientForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [condition, setCondition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Name is required");
      return;
    }
    onAdd({ name: name.trim(), age: age.trim(), condition: condition.trim() });
    setName("");
    setAge("");
    setCondition("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded shadow space-y-3"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <input
          className="border rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
        />
        <input
          className="border rounded px-3 py-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
        <input
          className="border rounded px-3 py-2"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Condition"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default Patients;
