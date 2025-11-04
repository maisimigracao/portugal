
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Nascimentos de Mães Imigrantes', value: 29.2 },
  { name: 'Nascimentos de Mães Portuguesas', value: 70.8 },
];

const COLORS = ['#14b8a6', '#a7f3d0'];

const BirthsChart: React.FC = () => {
  return (
    <div className="w-full h-80 md:h-96 mt-8">
      <h3 className="text-xl font-bold text-center mb-4 text-gray-700">Percentagem de Nados-Vivos em Portugal (2023)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={120}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${(percent * 100).toFixed(1)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number, name: string) => [`${value.toFixed(1)}%`, name]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BirthsChart;