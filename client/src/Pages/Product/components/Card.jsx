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


	function handleCart(name, pic, cost) {
		const item = {
			title: name,
			img: pic,
			newPrice: cost,
			"qty": 1
		};
		console.log(item);
		handleCartClick(item);
	}
	function handleCartClick(x) {
		const cookieValue = Cookies.get("productList");
		let temp = [];
		if (cookieValue) {
			temp = JSON.parse(cookieValue);		
		}

		const check = temp.findIndex((pr) => pr.title === x.title); 
		
		if (check !== -1) {
			temp[check].qty++;
		} else {
			temp.push(x);
		}
		Cookies.set("productList", JSON.stringify(temp), {expires: 1});
		props.handleCartCount();

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
		<div className="w-36 my-2 md:mb-6 md:w-60 flex flex-col justify-between p-1 border-2 m-1 rounded-2xl bg-white">
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
						handleClick={() => setShow(!show)}
					/>
				) : (
					<AiOutlineEye
						className="hidden md:inline-block"
						onClick={() => {
							setShow(!show);
						}}
					/>
				)}
				<HandleLogo />
			</div>
			<div className="h-32 md:h-48 items-end justify-center flex">
				<img src={props.img} alt="img" className="w-28 md:w-44" />
			</div>
			<h3 className="text-xs font-normal mt-2 text-gray-600 md:text-base md:mt-4">{props.title}</h3>
			<div className="flex justify-between w-full items-center">
				<div className="text-xs mt-1 md:text-base ">
					${props.newPrice} <del className="text-gray-600 font-thin">${props.prevPrice}</del>{" "}
					<span className="text-green-600 ">
						({(((props.prevPrice - props.newPrice) / props.prevPrice) * 100) >> 0}% off)
					</span>
				</div>
				<BsFillBagFill onClick={() => handleCart(props.title, props.img, props.newPrice)} />
			</div>
		</div>
	);
}
