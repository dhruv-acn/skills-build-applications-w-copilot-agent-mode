import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

export default function Teams() {
  const [items, setItems] = useState(null);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  const loadData = () => {
    fetch(endpoint)
      .then((r) => r.json())
      .then((data) => {
        const payload = data && data.results ? data.results : data;
        setItems(payload);
      })
      .catch((err) => console.error("Teams fetch error:", err));
  };

  useEffect(loadData, [endpoint]);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-3">Teams</h2>
          <button className="btn btn-primary mb-3" onClick={loadData}>
            Refresh
          </button>
          <DataTable items={items} />
        </div>
      </div>
    </div>
  );
}
