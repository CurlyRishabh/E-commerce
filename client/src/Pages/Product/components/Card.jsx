import React from "react";
import {SiNike} from "react-icons/si";
import {SiAdidas} from "react-icons/si";
import {SiPuma} from "react-icons/si";
import {SiV} from "react-icons/si";
import {AiOutlineEye} from "react-icons/ai";
import {BsFillBagFill, BsHeartFill} from "react-icons/bs";

import Preview from "./preview";
import {useState} from "react";
import Cookies from "js-cookie";

export default function Card(props) {
	const [show, setShow] = useState(false);


	function handleClick() {
		const myCookie = Cookies.get("productList");
		console.log(myCookie);
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

	function handleCart(){
		const item = {
			title: props.title,
			img: props.img,
			newPrice: props.newPrice,
		};
		props.handleCartClick(item);
	}
	return (
		<div className="card-container">
			<div className="logo-like">
				<BsHeartFill className="text-slate-600 hover:text-red-600 "  />
				{show ? (
					<Preview
						img={props.img}
						title={props.title}
						reviews={props.reviews}
						category={props.category}
						newPrice={props.newPrice}
						prevPrice={props.prevPrice}
						handleClick={handleClick}
					/>
				) : (
					<AiOutlineEye onClick={handleClick} />
				)}
				<HandleLogo />
			</div>
			<div className="card-img-div">
				<img src={props.img} className="card-img" />
			</div>
			<h3 className="card-title pt-8">{props.title}</h3>
			<section className="card-price">
				<div className="price">
					${props.newPrice} <del>${props.prevPrice}</del>{" "}
					<a>({(((props.prevPrice - props.newPrice) / props.prevPrice) * 100) >> 0}% off)</a>
				</div>
				<BsFillBagFill className="bag-icon" onClick={handleCart} />
			</section>
		</div>
	);
}
