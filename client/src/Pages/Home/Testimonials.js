import React from 'react'



function Profile(props){

    return (
		<div className="flex flex-col flex-wrap justify-between items-center rounded-xl bg-slate-200 basis-1/4 ">
			<img src={props.src} alt="Img" />
			<p>{props.name}</p>
			<p className="text-xs md:text-lg my-3 px-2">{props.text}</p>
			<p>⭐⭐⭐⭐⭐</p>
		</div>
	);
}


export default function Testimonials() {
  return (
		<>
			<p className="mt-10 font-mono text-3xl font-bold">Testimonials</p>
			<p className="m-5 font-mono font-medium text-gray-600">
				Our Customers' Voices: Hear Stories of Delight and Satisfaction. Read How Our Shoes Have Transformed Comfort
				and Style in Every Step of Their Journey.
			</p>
			<div className="flex flex-row  justify-between md:px-10 mb-5 ">
				<Profile
					src={""}
					name={"Penguin Kumar"}
					text={
						"Affordable Elegance! I adore the quality and the incredible price. The shoes are a steal for the comfort and style they offer."
					}
				/>
				<Profile
					src={""}
					name={"Paneer Singh"}
					text={
						"Unmatched Comfort! These shoes are a dream. The fit is perfect, I feel like I'm walking on clouds. My feet have found their happy place!"
					}
				/>
				<Profile
					src={""}
					name={" Singh"}
					text={
						"Style & Substance! A fashion statement and so comfortable. These shoes elevate my look and keep my feet happy all day."
					}
				/>
			</div>
		</>
  );
}
