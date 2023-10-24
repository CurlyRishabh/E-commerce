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
		<div className="flex border-b-2 border-gray-300 p-2  fixed bg-white w-full h-10 top-0 left-0 items-center">
			<Link to="/home">
				<div className=" flex items-center">Home</div>
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
					<Link to="/cart">
						<AiOutlineShoppingCart className="" />
					</Link>

					<Link to="/like">
						<FiHeart className="" />
					</Link>
					<Link to="/profile">
						<AiOutlineUserAdd className="" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
