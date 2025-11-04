import React, { useState } from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { TableData } from '../types';

interface EnhancedTableProps {
  data: TableData;
  sortable?: boolean;
  striped?: boolean;
}

const EnhancedTable: React.FC<EnhancedTableProps> = ({ 
  data, 
  sortable = false,
  striped = true 
}) => {
  const [sortConfig, setSortConfig] = useState<{
    key: number;
    direction: 'asc' | 'desc';
  } | null>(null);

  const sortedRows = React.useMemo(() => {
    if (!sortConfig) return data.rows;

    const sorted = [...data.rows].sort((a, b) => {
      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      // Handle numeric values
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
      }

      // Handle string values
      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();
      
      if (aStr < bStr) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aStr > bStr) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data.rows, sortConfig]);

  const handleSort = (columnIndex: number) => {
    if (!sortable) return;

    setSortConfig((current) => {
      if (!current || current.key !== columnIndex) {
        return { key: columnIndex, direction: 'asc' };
      }
      if (current.direction === 'asc') {
        return { key: columnIndex, direction: 'desc' };
      }
      return null;
    });
  };

  const getSortIcon = (columnIndex: number) => {
    if (!sortConfig || sortConfig.key !== columnIndex) return null;
    return sortConfig.direction === 'asc' ? (
      <FiArrowUp className="inline ml-1 text-teal-600" />
    ) : (
      <FiArrowDown className="inline ml-1 text-teal-600" />
    );
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm my-6">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                onClick={() => handleSort(index)}
                className={`whitespace-nowrap px-6 py-4 text-left font-bold text-gray-800 ${
                  sortable ? 'cursor-pointer hover:bg-gray-200 transition-colors' : ''
                }`}
              >
                {header}
                {sortable && getSortIcon(index)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedRows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`hover:bg-teal-50 transition-colors ${
                striped && rowIndex % 2 === 1 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="whitespace-nowrap px-6 py-4 font-medium text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnhancedTable;
