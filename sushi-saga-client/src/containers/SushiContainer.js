import React, { Fragment, useEffect, useState } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { sushis as Sushidata } from '../db.json'

const SushiList = Sushidata;

const CreateSushi = () => {

  const sushi_images = [];
  const sushi_titles = [];
  const sushi_prices = [];

  for (let i = 0; i < 4; i++) {
    const sushi_id = Math.floor(Math.random() * 100 + 1);
    SushiList.map((sushi) => {
      if (sushi.id === sushi_id) {
        sushi_images.push(sushi.img_url)
        sushi_titles.push(sushi.name)
        sushi_prices.push(sushi.price)
      }
    })
  }
  return { images: sushi_images, titles: sushi_titles, prices: sushi_prices }
}

const SushiContainer = ({updateValue,addPlate}) => {

  const [sushiData, setSushiData] = useState(CreateSushi());
  const [isClicked, setIsClicked] = useState(false);
  const [moreClicked,setMoreClicked] = useState(false);

  const reGenerateSushi = () => {
    setIsClicked(false);
    setSushiData(CreateSushi());
  }


  const sendUpdatedValue = (price) => {
    addPlate();
    updateValue(price);
  }

  function handleMoreButton() {
    setMoreClicked(true);
  }

  useEffect(() => {
      reGenerateSushi();
      setMoreClicked(false);
  }, [moreClicked]);

  return (
    <Fragment>
      <div className="belt">
        {
          <Sushi img={sushiData.images[0]} title={sushiData.titles[0]} price={sushiData.prices[0]} clicked={isClicked} updateBalanceValue={sendUpdatedValue}  />
        }
        {
          <Sushi img={sushiData.images[1]} title={sushiData.titles[1]} price={sushiData.prices[1]} clicked={isClicked} updateBalanceValue={sendUpdatedValue} />
        }
        {
          <Sushi img={sushiData.images[2]} title={sushiData.titles[2]} price={sushiData.prices[2]} clicked={isClicked} updateBalanceValue={sendUpdatedValue} />
        }
        {
          <Sushi img={sushiData.images[3]} title={sushiData.titles[3]} price={sushiData.prices[3]} clicked={isClicked} updateBalanceValue={sendUpdatedValue} />
        }

        <MoreButton reGenerateSushi={reGenerateSushi} handleMore={handleMoreButton}  />
      </div>
    </Fragment>

  )
}

export { SushiContainer };