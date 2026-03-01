import React from "react";

export default function DataTable({ items }) {
  if (!items)
    return (
      <div className="text-center py-4">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  // if it's not an array, just dump it for now
  if (!Array.isArray(items)) {
    return <pre>{JSON.stringify(items, null, 2)}</pre>;
  }

  const headers = Object.keys(items[0] || {});

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-light">
          <tr>
            {headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((h) => (
                <td key={h}>{JSON.stringify(row[h])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
