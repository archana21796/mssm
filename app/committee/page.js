"use client";
import { useState } from "react";



export default function Committees() {
  const [activeTab, setActiveTab] = useState("grievance");

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <TabButton
          label="Grievance Redressal Committee"
          isActive={activeTab === "grievance"}
          onClick={() => setActiveTab("grievance")}
        />
        <TabButton
          label="Internal Committee"
          isActive={activeTab === "internal"}
          onClick={() => setActiveTab("internal")}
        />
        <TabButton
          label="Anti-Ragging Committee"
          isActive={activeTab === "antiragging"}
          onClick={() => setActiveTab("antiragging")}
        />
        <TabButton
          label="POSH Committee"
          isActive={activeTab === "posh"}
          onClick={() => setActiveTab("posh")}
        />
      </div>

      {/* CONTENT */}
      {activeTab === "grievance" && <GrievanceSection />}
      {activeTab === "internal" && <InternalCommittee />}
      {activeTab === "antiragging" && <AntiRaggingSection />}
      {activeTab === "posh" && <POSHSection />}

    </section>
  );
}


function TabButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full text-sm font-medium transition
        ${
          isActive
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
    >
      {label}
    </button>
  );
}

function InternalCommittee() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-4">
        Internal Committee
      </h3>

      <p className="text-gray-700 mb-6">
        The Internal Committee is constituted to ensure a safe, inclusive,
        and equitable environment for all stakeholders.
      </p>

      {/* Example content – replace with your real data */}
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Promotes gender equality</li>
        <li>Addresses internal complaints</li>
        <li>Ensures confidentiality and fairness</li>
      </ul>
    </div>
  );
}


function GrievanceSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-4">
        Grievance Redressal Committee
      </h3>

      <p className="mb-6 text-gray-700">
        The Grievance Redressal Committee ensures a transparent and fair
        mechanism to address grievances.
      </p>

      {/* TABLE */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Designation</th>
              <th className="p-3 text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3">Dr. XYZ</td>
              <td className="p-3">Professor</td>
              <td className="p-3">Chairperson</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


function AntiRaggingSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4">
          Anti-Ragging Committee
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Zero tolerance to ragging</li>
          <li>UGC compliant guidelines</li>
          <li>24×7 monitoring</li>
        </ul>
      </div>

      <img
        src="/images/anti-ragging.webp"
        alt="Anti Ragging"
        className="rounded-xl shadow"
      />
    </div>
  );
}


function POSHSection() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-semibold mb-4">
        POSH Committee
      </h3>

      <p className="text-gray-700 mb-6">
        As per the Sexual Harassment of Women at Workplace Act, complaints can
        be submitted confidentially.
      </p>

      <a
        href="/pdf/posh-policy.pdf"
        className="inline-block mb-6 text-blue-600 underline"
      >
        Download POSH Policy
      </a>

      {/* SIMPLE FORM */}
      <form className="space-y-4 max-w-md">
        <input className="w-full border p-3 rounded" placeholder="Name" />
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <textarea className="w-full border p-3 rounded" placeholder="Complaint" />
        <button className="bg-blue-600 text-white px-6 py-3 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
