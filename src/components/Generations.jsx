import React from 'react';

const Generations = () => {
  const generations = ['Gen 1', 'Gen 2', 'Gen 3'];
  return (
    <div className="generations mb-4">
      <h2 className="text-lg font-bold mb-2">Generations</h2>
      <ul className="list-disc list-inside">
        {generations.map((gen, index) => (
          <li key={index}>{gen}</li>
        ))}
      </ul>
    </div>
  );
};

export default Generations;