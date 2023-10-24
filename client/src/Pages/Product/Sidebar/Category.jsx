import React from 'react'
import Input from '../components/Input';

export default function Category({handleChange}) {
  return (
		<div className=" py-4 hidden md:block md:fixed md:top-13 px-5 top-14 rounded-md w-40  bg-slate-300 ">
			<h2 className="	 font-bold mt-2">Category</h2>
			<div className="flex flex-col mx-4">
				<Input handleChange={handleChange} value={""} name={"category"} />
				<Input handleChange={handleChange} value={"Sneakers"} name={"category"} />
				<Input handleChange={handleChange} value={"Heels"} name={"category"} />
				<Input handleChange={handleChange} value={"Flats"} name={"category"} />
			</div>
			<h2 className="py-1 font-bold">Colors</h2>
			<div className="flex flex-col mx-4">
				<Input color={"text-slate-600 font-semibold"} handleChange={handleChange} value={""} name={"color"} />
				<Input color={"font-semibold"} handleChange={handleChange} value={"Black"} name={"color"} />
				<Input color={"text-blue-500 font-semibold "} handleChange={handleChange} value={"Blue"} name={"color"} />
				<Input color={"text-green-500 font-semibold "} handleChange={handleChange} value={"Green"} name={"color"} />
				<Input color={"text-red-500 font-semibold "} handleChange={handleChange} value={"Red"} name={"color"} />
				<Input color={"text-white font-semibold"} handleChange={handleChange} value={"White"} name={"color"} />

			</div>
		</div>
  );
}
