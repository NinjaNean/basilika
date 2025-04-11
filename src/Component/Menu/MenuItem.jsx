import React from 'react'
import infoImg from "../../assets/information-svg.svg"
import minusImg from "../../assets/minus-svg.svg"
import plusImg from "../../assets/plus-svg.svg"


function MenuItem() {
  return (
	<div>
		<p>Tempura räka <img src={infoImg} alt="information icon" /></p>
		<p>avokado, färskost, misomajonnäs, wasabikrisp</p>
		<p>104:-</p>
		<p><img src={plusImg} alt="plus icon" /></p>
		<p><img src={minusImg} alt="minus icon" /></p>
		<img src="https://www.kikkoman.eu/fileadmin/_processed_/0/f/csm_1025-recipe-page-Spicy-tuna-and-salmon-rolls_desktop_b6172c0072.jpg" alt="food picture" />
	</div>
  )
}

export default MenuItem