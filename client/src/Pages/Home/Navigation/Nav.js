import { useState } from "react";
import {FiHeart} from "react-icons/fi";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";
import "./Nav.css";

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
		<nav>
			<div className="nav-container">
				<input
					className="search-input"
					type="text"
					onChange={handleChange}
					value={search}
					onKeyPress={handleKeyPress}
					placeholder="Enter your search shoes."
				/>
			</div>
			<div className="profile-container">
				<a href="#">
					<FiHeart className="nav-icons" />
				</a>
				<a href="">
					<AiOutlineShoppingCart className="nav-icons" />
				</a>
				<a href="">
					<AiOutlineUserAdd className="nav-icons" />
				</a>
			</div>
		</nav>
	);
};

export default Nav;
