import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section>
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome to Jarurat Care</h1>
        <p className="text-gray-600">
          A simple patient records dashboard built for the assignment. Use the
          Patients page to view, search, and add patients.
        </p>
        <div className="mt-4">
          <Link
            to="/patients"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Go to Patients
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <InfoCard title="Total Patients" value="128" />
        <InfoCard title="Today's Appointments" value="12" />
        <InfoCard title="Active Doctors" value="8" />
      </div>
    </section>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
    </div>
  );
}

export default Home;
