import React, { Fragment } from 'react'

const Sushi = (props) => {

  const containerClickListener = () => {
    props.containerClickHandler(props.sushi, props.sushi.price)
    props.walletSubtractor(props.sushi.price)
  }

  return (
    <div className="sushi">
      <div className="plate"
           onClick={containerClickListener}>
        {
          /* Tell me if this sushi has been eaten! */
          props.eatenSushi.includes(props.sushi) ?
            null
          :
            <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi
