import React, {useEffect} from 'react'

function Added() {
 useEffect(() => {
		// Add the 'animate' class after the component is mounted
		const line = document.getElementById("animatedLine");
		setTimeout(() => {
			line.classList.add("animate");
		}, 0);
 }, []);

 return (
		<>
			<div className="addedBox">
				Added to cart
				<div className="transition-box" id="animatedLine" />
			</div>
		</>
 );
}

export default Added