import React from 'react';
import ShoeItem from './ShoeItem';

function Lists({ shoes }) {
  return (
    <div className='grid grid-cols-4 gap-4 px-10'>
      {shoes.map((shoe) => (
        <ShoeItem key={shoe.id} {...shoe} />
      ))}
    </div>
  );
}

export default Lists;
