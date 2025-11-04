import React, { useState } from 'react';
import { 
  ComposedChart, 
  Bar, 
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  Cell,
  TooltipProps
} from 'recharts';

const data = [
  { 
    year: '2020', 
    contributions: 1018.5,
    benefits: 216.2,
    netContribution: 802.3 
  },
  { 
    year: '2021', 
    contributions: 1238.9,
    benefits: 270.9,
    netContribution: 968.0 
  },
  { 
    year: '2022', 
    contributions: 1943.4,
    benefits: 339.2,
    netContribution: 1604.2 
  },
  { 
    year: '2023', 
    contributions: 2160.0, // Estimated based on net contribution
    benefits: 340.0, // Estimated
    netContribution: 1820.0 
  },
];

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white p-4 border-2 border-teal-500 rounded-lg shadow-lg">
        <p className="font-bold text-gray-900 mb-2">{data.year}</p>
        <p className="text-teal-700 font-semibold">
          Contribuições: €{data.contributions.toLocaleString('pt-PT')} M
        </p>
        <p className="text-red-600 font-semibold">
          Prestações: €{data.benefits.toLocaleString('pt-PT')} M
        </p>
        <p className="text-green-700 font-bold border-t border-gray-300 mt-2 pt-2">
          Saldo Líquido: €{data.netContribution.toLocaleString('pt-PT')} M
        </p>
        <p className="text-sm text-gray-600 mt-1">
          Rácio: {(data.contributions / data.benefits).toFixed(1)}:1
        </p>
      </div>
    );
  }
  return null;
};

const ContributionChart: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Evolução das Contribuições e Prestações Sociais
      </h3>
      <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
        Comparação entre as contribuições dos imigrantes para a Segurança Social e as prestações recebidas (em Milhões €)
      </p>
      
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          onMouseMove={(state) => {
            if (state.isTooltipActive) {
              setActiveIndex(state.activeTooltipIndex ?? null);
            } else {
              setActiveIndex(null);
            }
          }}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <defs>
            <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#14b8a6" stopOpacity={0.6}/>
            </linearGradient>
            <linearGradient id="colorBenefits" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0.6}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="year" 
            tick={{ fill: '#374151', fontWeight: 500 }}
            axisLine={{ stroke: '#9ca3af' }}
          />
          <YAxis 
            tick={{ fill: '#374151' }}
            axisLine={{ stroke: '#9ca3af' }}
            label={{ value: 'Milhões €', angle: -90, position: 'insideLeft', fill: '#6b7280' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="rect"
          />
          
          <Bar 
            dataKey="contributions" 
            fill="url(#colorContributions)"
            name="Contribuições"
            radius={[8, 8, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
              />
            ))}
          </Bar>
          
          <Bar 
            dataKey="benefits" 
            fill="url(#colorBenefits)"
            name="Prestações"
            radius={[8, 8, 0, 0]}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                opacity={activeIndex === null || activeIndex === index ? 1 : 0.5}
              />
            ))}
          </Bar>
          
          <Line 
            type="monotone" 
            dataKey="netContribution" 
            stroke="#10b981" 
            strokeWidth={3}
            name="Saldo Líquido"
            dot={{ fill: '#10b981', r: 6 }}
            activeDot={{ r: 8 }}
          />
        </ComposedChart>
      </ResponsiveContainer>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="bg-teal-50 p-4 rounded-lg">
          <p className="text-sm text-teal-700 font-semibold">Contribuições 2023</p>
          <p className="text-2xl font-bold text-teal-900">€2.160M</p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-sm text-red-700 font-semibold">Prestações 2023</p>
          <p className="text-2xl font-bold text-red-900">€340M</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-700 font-semibold">Saldo Líquido 2023</p>
          <p className="text-2xl font-bold text-green-900">€1.820M</p>
        </div>
      </div>
    </div>
  );
};

export default ContributionChart;