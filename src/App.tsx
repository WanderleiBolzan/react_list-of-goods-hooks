import React, { useState, useCallback } from 'react';

const goodsFromServer: string[] = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<string[]>(goodsFromServer);
  const sortAlphabetically = useCallback(() => {
    const sortedGoods = [...goods].sort((a, b) => a.localeCompare(b));

    setGoods(sortedGoods);
  }, [goods]);
  const sortByLength = useCallback(() => {
    const sortedGoods = [...goods].sort((a, b) => a.length - b.length);

    setGoods(sortedGoods);
  }, [goods]);

  const reverseList = useCallback(() => {
    const reversedGoods = [...goods].reverse();

    setGoods(reversedGoods);
  }, [goods]);

  const resetList = useCallback(() => {
    setGoods(goodsFromServer);
  }, []);

  return (
    <div
      className="container mx-auto p-8 bg-gray-50
      rounded-lg shadow-xl font-inter
      min-h-screen flex flex-col justify-center items-center"
    >
      {/* Buttons container for sorting actions */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-600
          text-white font-semibold py-2 px-6
          rounded-lg shadow-md transition duration-300
          ease-in-out transform hover:scale-105"
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="bg-green-500 hover:bg-green-600
          text-white font-semibold py-2 px-6
          rounded-lg shadow-md transition duration-300
          ease-in-out transform hover:scale-105"
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600
          text-white font-semibold py-2 px-6 rounded-lg
          shadow-md transition duration-300
          ease-in-out transform hover:scale-105"
          onClick={reverseList}
        >
          Reverse
        </button>

        <button
          type="button"
          className="bg-red-500 hover:bg-red-600
          text-white font-semibold py-2 px-6
          rounded-lg shadow-md transition duration-300
          ease-in-out transform hover:scale-105"
          onClick={resetList}
        >
          Reset
        </button>
      </div>

      {/* List display area */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Goods List
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-700">
          {/* Map through the 'goods' state to render each item dynamically */}
          {goods.map((good, index) => (
            <li
              key={index}
              data-cy="Good"
              className="py-2 border-b border-gray-200 last:border-b-0"
            >
              {good}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
