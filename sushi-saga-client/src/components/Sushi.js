import React, { useState } from 'react'

const Sushi = ({img,title,price,clicked,updateBalanceValue}) => {

  const [click, setClick] = useState(clicked);

  const handleSushiClick = (isClicked) => {
    if(!isClicked){
      updateBalanceValue(price);
      setClick(true);
    }
    else {
      setClick(false)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => handleSushiClick(click)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          (click===true) ? null: <img src={img} width="100%" alt='sushi'/>
        }
      </div>
      <h4 className="sushi-details">
        {title} - ${price}
      </h4>
    </div>
  )
}

export default Sushi