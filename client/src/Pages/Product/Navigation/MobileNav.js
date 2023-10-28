import React from 'react'

export default function MobileNav(props) {
  return (
		<nav className="md:hidden flex flex-col justify-around h-8 items-start  font-semibold text-white sticky top-10 mt-4 bg-slate-200">
			<select
				className="bg-slate-400 h-6 border-2 w-1/2 ml-4 text-center rounded text-xs"
				onChange={(e) => props.sortProduct(parseInt(e.target.value))}
				defaultValue="0"
			>
				<option value={0}>
					Default Sort
				</option>
				<option value={1}>Sort price : low to high</option>
				<option value={2}>Sort price : high to low</option>
			</select>
		</nav>
  );
}
	

