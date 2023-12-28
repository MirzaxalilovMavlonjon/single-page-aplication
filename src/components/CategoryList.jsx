import React from 'react';
import CategoryItem from './CategoryItem';

function CategoryList({catalog = []}) {
  console.log(catalog);
  return (
    <div className='list'>
      {catalog.map(el=>(
        <CategoryItem key={el.idCategory} {...el}/>
      ))}
    </div>
  );
}

export default CategoryList;