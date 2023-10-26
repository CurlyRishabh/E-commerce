import React from 'react'

export default function MobileNav() {
  return (
		<nav className="md:hidden flex flex-col justify-around h-8 items-start  font-semibold text-white sticky top-10 mt-4 bg-slate-200">
			

				<select className="bg-slate-400 h-6 border-2 w-1/2 ml-4 text-center rounded text-xs">
					<option selected>Default Sort</option>
					<option>Sort by price : low to high</option>
					<option>Sort by price : high to low</option>
				</select>
			
		</nav>
  );
}
	

