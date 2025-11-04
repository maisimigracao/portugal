
import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Tendência 2013-2023',
    'Crescimento da População Imigrante': 160,
    'População Reclusa Estrangeira': -23,
  },
];

const PopulationCrimeChart: React.FC = () => {
  return (
    <div className="w-full h-80 md:h-96 mt-8">
      <h3 className="text-xl font-bold text-center mb-4 text-gray-700">Correlação Inversa: População vs. Reclusos (2013-2023)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} layout="vertical" margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" width={120} />
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend />
          <Bar dataKey="Crescimento da População Imigrante" barSize={30} fill="#14b8a6" />
          <Line dataKey="População Reclusa Estrangeira" type="monotone" stroke="#f43f5e" strokeWidth={3} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationCrimeChart;