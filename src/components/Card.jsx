import React from 'react'
import Style from "../css/card.module.css"
import Default from "../assets/icon.png"

const Card = ({image = Default,name,job}) => {
  return (
    <>
        <div className={Style.card}>
            <img className={Style.profile} src={image} alt='' />
            <h2 className={Style.name}>{name}</h2>
            <p className={Style.job}>{job}</p>
        </div>
    </>
  )
}

export default Card