import { useDeferredValue, useEffect, useState } from 'react';

import './style.css';

export function App() {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  useEffect(() => {
    console.log('Now am calling api!', deferredValue);
  }, [deferredValue]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
