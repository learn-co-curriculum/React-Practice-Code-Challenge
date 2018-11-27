import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import BackButton from '../components/BackButton'

const SushiContainer = (props) => {

  const renderSushis = () => {

    if(props.sushiData.length > 0) {

      let dataToMap = props.sushiData.filter((sushi) => {
        return sushi.id >= props.firstSushi && sushi.id <= props.lastSushi
      })

      return dataToMap.map((sushi) =>
        <Sushi key={sushi.id} sushi={sushi} containerClickHandler={props.containerClickHandler} eatenSushi={props.eatenSushi} walletSubtractor={props.walletSubtractor}/>
      )

    }

  }

  return (
    <Fragment>
      <div className="belt">
        <BackButton backButtonHandler={props.backButtonHandler}/>
        {renderSushis()}
        <MoreButton moreButtonHandler={props.moreButtonHandler} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
