
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Taxa de Desemprego (2022)', 'Nacionais Portugueses': 6.1, 'Imigrantes': 14.3 },
];

const UnemploymentChart: React.FC = () => {
  return (
    <div className="w-full h-80 md:h-96 mt-8">
      <h3 className="text-xl font-bold text-center mb-4 text-gray-700">Comparação da Taxa de Desemprego (2022)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" width={150} />
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend />
          <Bar dataKey="Nacionais Portugueses" fill="#2dd4bf" />
          <Bar dataKey="Imigrantes" fill="#f43f5e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UnemploymentChart;