import "./preview-style.css";
import {AiFillStar} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {BsHeartFill} from "react-icons/bs";
export default function Preview(props) {
	return (
		<div className="preview-main">
			<div className="preview-container">
				<div className="preview-image">
					<BsHeartFill className="like" />

					<img src={props.img} />
				</div>
				<div className="preview-right">
					<AiOutlineClose className="justify-self-end" onClick={props.handleClick} />
					<div className="preview-heading">
						<h1 className="text-base">
							{props.title + " "}({props.category})
							<div className="preview-star">
								<AiFillStar className="star" />
								<AiFillStar className="star" />
								<AiFillStar className="star" />
								<AiFillStar className="star" />
								<p className="text-xs">{props.reviews}</p>
							</div>
						</h1>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium pariatur placeat
							impedit natus corporis nostrum vel sapiente nemo suscipit necessitatibus, harum ipsam voluptate
							eveniet, omnis dolores praesentium vitae ut aspernatur aut. Nisi quidem  officiis expedita possimus a tempora vel. Dolores perspiciatis dolor
							necessitatibus atque pariatur.
						</p>
						<h3>${props.newPrice}.00</h3>
						<h4>${props.prevPrice}</h4>
					</div>

					<div className="preview-button">
						<button>7</button>
						<button>8</button>
						<button>9</button>
						<button>9.5</button>
					</div>
					<div className="preview-completion">
						<button> Buy Now</button>
						<button> Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	);
}
