
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';

// Data showing the inverse correlation between immigrant population growth and foreign prisoner population
const data = [
  { year: '2013', population: 100, prisoners: 100 },
  { year: '2015', population: 115, prisoners: 92 },
  { year: '2017', population: 135, prisoners: 85 },
  { year: '2019', population: 155, prisoners: 82 },
  { year: '2021', population: 174, prisoners: 78 },
  { year: '2023', population: 260, prisoners: 77 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-semibold text-gray-700 mb-2">{label}</p>
        <p className="text-teal-600">
          População Imigrante: <span className="font-bold">{payload[0].value}%</span>
        </p>
        <p className="text-rose-600">
          Reclusos Estrangeiros: <span className="font-bold">{payload[1].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const PopulationCrimeChart: React.FC = () => {
  return (
    <div className="w-full h-80 md:h-96 mt-8">
      <h3 className="text-xl font-bold text-center mb-4 text-gray-700">
        Correlação Inversa: População Imigrante vs. Reclusos Estrangeiros (2013-2023)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="year" 
            stroke="#6b7280"
            style={{ fontSize: '14px', fontWeight: 500 }}
          />
          <YAxis 
            stroke="#6b7280"
            style={{ fontSize: '14px', fontWeight: 500 }}
            label={{ value: 'Índice (Base 2013 = 100)', angle: -90, position: 'insideLeft', style: { fontSize: '14px' } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="line"
          />
          <ReferenceLine y={100} stroke="#9ca3af" strokeDasharray="3 3" label={{ value: 'Base 2013', position: 'right', fill: '#6b7280' }} />
          <Line 
            type="monotone" 
            dataKey="population" 
            stroke="#14b8a6" 
            strokeWidth={3}
            name="População Imigrante (+160%)"
            dot={{ fill: '#14b8a6', r: 5 }}
            activeDot={{ r: 7 }}
          />
          <Line 
            type="monotone" 
            dataKey="prisoners" 
            stroke="#f43f5e" 
            strokeWidth={3}
            name="Reclusos Estrangeiros (-23%)"
            dot={{ fill: '#f43f5e', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PopulationCrimeChart;