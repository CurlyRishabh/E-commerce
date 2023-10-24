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
		<div className="w-36 md:w-60 flex flex-col justify-between p-1 border-2 m-1 rounded-lg">
			<div className="flex justify-between  w-full">
				<BsHeartFill className="text-slate-600 hover:text-red-600 " />
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
			<div className="h-32 md:h-48 items-end justify-center flex">
				<img src={props.img} className="w-28 md:w-44" />
			</div>
			<h3 className="text-xs font-normal mt-2 text-gray-600 md:text-base md:mt-4">{props.title}</h3>
			<div className="flex justify-between w-full items-center">
				<div className="text-xs mt-1 md:text-base ">
					${props.newPrice} <del className="text-gray-600 font-thin">${props.prevPrice}</del>{" "}
					<span className="text-green-600 ">
						({(((props.prevPrice - props.newPrice) / props.prevPrice) * 100) >> 0}% off)
					</span>
				</div>
				<BsFillBagFill  onClick={handleCart} />
			</div>
		</div>
	);
}
