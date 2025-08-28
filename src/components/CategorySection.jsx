import React from 'react'
import {categoryImages} from '../data/SubItems'

const CategorySection = () => {
    const category=categoryImages;
    console.log('category is',category)
  return (
    <div className='submenu'>
      {category.map((items)=>{
        return(
           <div className="subsection" key={items.itemName}>
            <div className='subitemsection'>
            <img src={items.itemImage} alt="" />
<p>{items.itemName}</p>
           </div>
           </div>
            
            
        )
      })}
    </div>
  )
}

export default CategorySection
