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
		<div className="flex border-b-2 border-gray-300 p-2  fixed bg-white w-full h-16 top-0 left-0 items-center">
			<Link to="/home">
				<div className=" h-16 w-20 flex items-center ml-8">Cool Shop</div>
			</Link>

			<div className="flex flex-row items-center justify-between ml-24 w-full">
				<input
					className="basis-1/2 bg-slate-100  focus:outline-none rounded-lg relative  h-10"
					type="text"
					onChange={handleChange}
					value={search}
					onKeyPress={handleKeyPress}
					placeholder="Enter your search shoes."
				/>
				<div className="flex basis 1/2">
					<Link to="/cart">
						<AiOutlineShoppingCart className="w-7 h-7 mx-6" />
					</Link>

					<Link to="/like">
						<FiHeart className="w-7 h-7 mx-6" />
					</Link>
					<Link to="/profile">
						<AiOutlineUserAdd className="w-7 h-7 mx-6" />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
