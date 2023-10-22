import { useState } from "react";
import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
import {Link} from "react-router-dom";

const Nav = ({handleSearch}) => {
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
		<div className="flex border-b-2 border-gray-300 p-8 justify-between items-center  fixed bg-white w-full h-12 top-0">
			<div className="">
				<input
					className="bg-slate-100  focus:outline-none mr-5 rounded-lg relative w-3/4 h-10 ml-40"
					type="text"
					onChange={handleChange}
					value={search}
					onKeyPress={handleKeyPress}
					placeholder="Enter your search shoes."
				/>
			</div>
			<div className="flex">
				<Link to="/cart">
					<AiOutlineShoppingCart className="w-7 h-7 mx-6" />
				</Link>

				<Link to="/like">
					{" "}
					<FiHeart className="w-7 h-7 mx-6" />
				</Link>
				<Link to="/profile">
					<AiOutlineUserAdd className="w-7 h-7 mx-6" />
				</Link>
			</div>
		</div>
	);
};

export default Nav;
