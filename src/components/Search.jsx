import { useState } from 'react';

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState();

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    cb(value);
  };

  return (
    <div className='row'>
      <div className='input-field col s6'>
        <input
          style={{ padding: '0 10px' }}
          type='search'
          name='search'
          id='search'
          placeholder='Search category'
          onKeyDown={handleKey}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className='btn'
          style={{ position: 'absolute', top: '4px', right: 0 }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export { Search };
