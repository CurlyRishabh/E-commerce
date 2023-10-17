import React from "react";
import {SiNike} from "react-icons/si";
import {SiAdidas} from "react-icons/si";
import {SiPuma} from "react-icons/ai";
import {FcLike} from "react-icons/fc";
import {AiOutlineEye} from "react-icons/ai";
import {BsFillBagFill, BsHeartFill} from "react-icons/bs";
// import {SiNike} from "react-icons/ai";
import Preview from "./preview";
import { useState } from "react";

export default function Card(props) {
	const [show, setShow] = useState(false);

	function handleClick() {
		setShow(!show);
	}
	return (
		<div className="card-container">
			<div className="logo-like">
				<SiNike />
				{show ? (
					<Preview
						img={props.img}
						title={props.title}
						reviews={props.reviews}
						category={props.category}
						newPrice={props.newPrice}
						handleClick={handleClick}
					/>
				) : (
					<AiOutlineEye onClick={handleClick} />
				)}
				<BsHeartFill className="like" />
			</div>
			<div className="card-img-div">
				<img src={props.img} className="card-img" />
			</div>
			<h3 className="card-title">{props.title}</h3>
			<section className="card-price">
				<div className="price">
					{props.newPrice} <del>${props.prevPrice}</del>
				</div>
				<BsFillBagFill className="bag-icon" onClick={props.handleCartClick} />
			</section>
		</div>
	);
}
