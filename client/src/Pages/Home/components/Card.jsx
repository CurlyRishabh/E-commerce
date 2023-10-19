import React from "react";
import {SiNike} from "react-icons/si";
import {SiAdidas} from "react-icons/si";
import {SiPuma} from "react-icons/si";
import {SiV} from "react-icons/si";
import {AiOutlineEye} from "react-icons/ai";
import {BsFillBagFill, BsHeartFill} from "react-icons/bs";

import Preview from "./preview";
import {useState} from "react";

export default function Card(props) {
	const [show, setShow] = useState(false);

	function handleClick() {
		setShow(!show);
	}
	function HandleLogo() {
		let company = props.company;
		if (company === "Nike") return <SiNike />;
		else if (company === "Adidas") return <SiAdidas />;
		else if (company === "Puma") return <SiPuma />;
		else if (company === "Vans") return <SiV />;
		else return <>h</>;
	}
	return (
		<div className="card-container">
			<div className="logo-like">
				<HandleLogo />
				{show ? (
					<Preview
						img={props.img}
						title={props.title}
						reviews={props.reviews}
						category={props.category}
						newPrice={props.newPrice}
						prevPrice = {props.prevPrice}
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
