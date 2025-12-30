import React from "react";

interface TableProps {
  headers: string[];
  rows: (string | number)[][];
}

const Table: React.FC<TableProps> = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-lg border border-border bg-background">
    <table className="min-w-full divide-y divide-border">
      <thead className="bg-muted">
        <tr>
          {headers.map((header, idx) => (
            <th
              key={idx}
              className="px-6 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-background divide-y divide-border">
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-muted/50">
            {row.map((cell, j) => (
              <td key={j} className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table; 