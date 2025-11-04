//kezia/Evolution
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

const Generations = () => {
  const gens = ["Gen 1", "Gen 2", "Gen 3"];
  return (
    <div className="mb-4">
      <h3 className="text-lg font-bold mb-2">Generations</h3>
      <div className="flex gap-2">
        {gens.map((gen, index) => (
          <span key={index} className="bg-purple-200 px-3 py-1 rounded">
            {gen}
          </span>
        ))}
      </div>
           main
    </div>
  );
};

export default Generations;