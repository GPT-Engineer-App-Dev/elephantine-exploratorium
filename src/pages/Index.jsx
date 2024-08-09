import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import InterestingFacts from '../components/InterestingFacts';

const elephantPopulationData = [
  { year: 1980, population: 1300000 },
  { year: 1990, population: 600000 },
  { year: 2000, population: 400000 },
  { year: 2010, population: 450000 },
  { year: 2020, population: 415000 },
];

const ElephantFact = ({ fact }) => (
  <div className="bg-gray-100 p-4 rounded-lg mb-4">
    <p className="text-gray-800">{fact}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Elephants: Gentle Giants</h1>
        
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/1280px-African_Bush_Elephant.jpg" 
          alt="African Bush Elephant" 
          className="w-full h-64 object-cover rounded-lg mb-8 mx-auto"
        />
        
        <p className="text-lg text-gray-700 mb-6">
          Elephants are the largest land mammals on Earth and have captivated humans for thousands of years. These intelligent and social animals are known for their distinctive trunks, tusks, and remarkable memory.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interesting Elephant Facts</h2>
        <ElephantFact fact="Elephants can live up to 70 years in the wild." />
        <ElephantFact fact="An elephant's trunk has over 40,000 muscles and can lift up to 350 kg." />
        <ElephantFact fact="Elephants are highly social animals and live in herds led by a matriarch." />
        
        <h2 className="text-2xl font-semibold text-gray-900 my-6">Elephant Population Trend</h2>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={elephantPopulationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="population" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Note: This chart shows the estimated global elephant population trend over the years.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 my-6">More Interesting Facts</h2>
        <InterestingFacts />
      </div>
    </div>
  );
};

export default Index;
