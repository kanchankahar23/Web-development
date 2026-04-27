import React, { useState, useMemo, useCallback } from 'react';
import './index.css';

const App = ({ items }) => {
  const [filter, setFilter] = useState('');

  // useMemo (expensive filtering)
  const filtered = useMemo(() => {
    return items.filter(i => i.includes(filter));
  }, [items, filter]);

  // useCallback (prevent re-creation)
  const handleClick = useCallback((item) => {
    console.log("clicked:", item);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <ul>
        {filtered.map((item, index) => (
          <li key={index} onClick={() => handleClick(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;