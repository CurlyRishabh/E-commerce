import { useState } from "react";

import {AiOutlineUserAdd}from "react-icons/ai";
import {Link} from "react-router-dom";

import cartIcon from "../../Home/ShoesImg/cart.png";
import homeP from "../../Home/ShoesImg/home.png";

import shop from "../../Home/ShoesImg/SHOP.png";

const Nav = ({handleSearch,cartCount}) => {
	const [search, setSearch] = useState("");
	function handleChange(e){
		handleSearch(e);
		setSearch(e.target.value);
	}
	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
      setSearch('');
    }
}
	return (
		<div className="flex border-b-2 border-gray-300 p-2  fixed bg-white w-full h-10 top-0 left-0 items-center justify-between">
			<Link to="/" className="w-7 h-7">
				<img src={homeP} alt="Home" className="w-6 h-6 hover:w-7 hover:h-7" />
			</Link>

			<div className="flex flex-row items-center justify-between  w-full">
				<input
					className="bg-slate-100  focus:outline-none rounded-lg relative ml-4 h-8 w-2/5 md:ml-28"
					type="text"
					onChange={handleChange}
					value={search}
					onKeyPress={handleKeyPress}
					placeholder="search shoes."
				/>
				<div className="flex justify-around w-2/6 md:w-1/6">
					<Link to="/products" className="w-7 h-7">
						<img src={shop} alt="Home" className="w-6 h-6 hover:w-7 hover:h-7" />
					</Link>
					<Link className="flex w-7 h-7" to="/cart" >

						<img src={cartIcon} alt="Home" className="w-6 h-6 hover:w-7 hover:h-7" />
						{cartCount > 0 ? (
							<p className="relative bottom-2 text-red-600  font-semibold ">{cartCount}</p>
							) : (
								<></>
						)}
					</Link>
					<Link to="/profile">
						<AiOutlineUserAdd className="w-6 h-6" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
