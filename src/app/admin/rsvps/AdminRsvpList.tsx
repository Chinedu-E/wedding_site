"use client";

import React, { useEffect, useState } from "react";

type RsvpRow = { id: number; code: string; name: string; created_at: string };

export function AdminRsvpList({ initialRows }: { initialRows: RsvpRow[] }) {
  const [rows, setRows] = useState<RsvpRow[]>(initialRows);

  useEffect(() => {
    fetch("/api/rsvps")
      .then((res) => (res.ok ? res.json() : []))
      .then(setRows)
      .catch(() => setRows(initialRows));
  }, [initialRows]);

  return (
    <div className="min-h-screen bg-[#F7F4EF] p-6 md:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-2xl text-[#6B705C] mb-2">RSVPs</h1>
        <p className="text-sm text-slate-500 mb-8">
          {rows.length} {rows.length === 1 ? "person has" : "people have"} responded.
        </p>
        <ul className="space-y-3">
          {rows.map((r) => (
            <li
              key={r.id}
              className="flex items-center justify-between rounded-xl bg-white border border-[#DDBEA9]/60 px-4 py-3"
            >
              <span className="font-medium text-slate-800">{r.name}</span>
              <span className="text-xs text-slate-400">
                {new Date(r.created_at).toLocaleDateString(undefined, {
                  dateStyle: "medium",
                })}
              </span>
            </li>
          ))}
        </ul>
        {rows.length === 0 && (
          <p className="text-slate-500 text-sm">No RSVPs yet.</p>
        )}
      </div>
    </div>
  );
}
