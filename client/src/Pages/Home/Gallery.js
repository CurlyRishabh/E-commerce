import React from "react";


export default function Gallery(props) {
	return (
		<div className={" basis-1/2 md:basis-1/3 p-8 border-8 w-52  flex- items-center text-center border-slate-50 " + props.bg}>
			<img className={props.imgClass+" -top-6"} src={props.src} alt="myimg"></img>
			<p className={"relative font-semibold font-mono text-gray-700 "+ props.imgClass}>{props.name}</p>
		</div>
	);
}
