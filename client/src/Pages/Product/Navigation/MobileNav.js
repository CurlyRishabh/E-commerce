import React from 'react'

export default function MobileNav() {
  return (
		<nav className="md:hidden flex justify-around h-8 text-base items-center  font-semibold text-white sticky top-10 mt-4 bg-slate-200">
			<div className=" w-1/3 ">
				<button className="bg-slate-400 border-2 w-full text-center rounded"> Filter</button>
			</div>
			<div className=" w-1/3 ">
				<button className="bg-slate-400 border-2 w-full text-center rounded"> Sort</button>
			</div>
		</nav>
  );
}
