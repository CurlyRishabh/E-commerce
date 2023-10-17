import "./preview-style.css";
import {AiFillStar} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";
import {BsHeartFill} from "react-icons/bs";
export default function Preview(props) {
	function ProvidDetails() {
		return (
			<div className="preview-container">
				<div className="preview-image">
					<div style={{display: "flex", justifyContent: "space-between"}}>
						<BsHeartFill className="like" />
						<AiOutlineClose className="close" onClick={props.handleClick} />
					</div>
					<img src={props.img} />
				</div>

				<div className="preview-heading">
					<h3>
						{props.title + " "}({props.category})
					</h3>
					<h2>${props.newPrice}.00</h2>
				</div>

				<div className="preview-star">
					<AiFillStar className="star" />
					<AiFillStar className="star" />
					<AiFillStar className="star" />
					<AiFillStar className="star" />
					<p>{props.reviews}</p>
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
		);
	}

	return (
		<ProvidDetails/>
	);
}
