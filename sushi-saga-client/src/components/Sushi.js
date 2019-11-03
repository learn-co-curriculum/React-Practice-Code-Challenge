import React from 'react'

const Sushi = ({sushi, beenEaten}) => {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => beenEaten(sushi.id, sushi.price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          sushi.eaten ?
            null
          :
            <img alt={sushi.id} src={sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  ) 
}

export default Sushi