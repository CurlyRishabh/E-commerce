import React from "react";


export default function Gallery(props) {
	return (
		<div className={" basis-1/3 p-4 border-8 w-52 h-96 flex- items-center text-center border-slate-50 " + props.bg}>
			<img className={props.imgClass} src={props.src} alt="myimg"></img>
			<p className={" font-semibold font-mono text-gray-700 "+ props.imgClass}>{props.name}</p>
		</div>
	);
}
