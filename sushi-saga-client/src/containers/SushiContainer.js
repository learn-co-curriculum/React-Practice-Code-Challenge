import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushi => <Sushi key={sushi.id} eatSushi={props.eatSushi} sushi={sushi} beenEaten={props.eatenSushi.includes(sushi.id)}/>)}
        <MoreButton nextFour={props.nextFour}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer