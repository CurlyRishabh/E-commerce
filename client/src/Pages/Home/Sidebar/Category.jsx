import React from 'react'
import Input from '../components/Input';
import './Category.css'
export default function Category({handleChange}) {
  return (
		<div className='main-category-container'>
			<h2>Category</h2>
			<div className="category-container">
				<Input handleChange={handleChange} value={""} name={"category"} />
				<Input handleChange={handleChange} value={"Sneakers"} name={"category"} />
				<Input handleChange={handleChange} value={"Heels"} name={"category"} />
				<Input handleChange={handleChange} value={"Flats"} name={"category"} />
			</div>
			<h2>Colors</h2>
			<div className="category-container">
				<Input handleChange={handleChange} value={""} name={"color"} />
				<Input handleChange={handleChange} value={"Black"} name={"color"} />
				<Input handleChange={handleChange} value={"White"} name={"color"} />
				<Input handleChange={handleChange} value={"Green"} name={"color"} />
			</div>
		</div>
  );
}
