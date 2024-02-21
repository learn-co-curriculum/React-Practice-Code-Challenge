import React from 'react'

const MoreButton = ({ reGenerateSushi,handleMore }) => {

  const handleClick = () => {
    handleMore();
  }

  return <button onClick={handleClick}>More sushi!</button>
}

export default MoreButton    