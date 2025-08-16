import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Brand Section */}
					<div className="lg:col-span-2">
						<div className="flex items-center mb-4">
							<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
								<svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold">Cool Shop</h3>
						</div>
						<p className="text-gray-300 mb-6 max-w-md leading-relaxed">
							Discover your perfect pair at our shoe haven. Unparalleled comfort, iconic styles, and unbeatable prices
							- find your fashion-forward footwear to step into confidence.
						</p>

						{/* Social Media Links */}
						<div className="flex space-x-4">
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
								<FaXTwitter />
							</a>
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
								<FaPinterest />
							</a>
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
								<FaInstagram />
							</a>
							<a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
								<TiSocialYoutube />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Quick Links</h4>
						<ul className="space-y-2">
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Our Story</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Press</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
						</ul>
					</div>

					{/* Customer Support */}
					<div>
						<h4 className="text-lg font-semibold mb-4">Customer Support</h4>
						<ul className="space-y-2">
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Contact Us</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">FAQ</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Size Guide</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Shipping Info</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Returns</a></li>
						</ul>
					</div>
				</div>

				{/* Newsletter Signup */}
				<div className="border-t border-gray-800 py-8">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="mb-4 md:mb-0">
							<h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
							<p className="text-gray-300">Subscribe to get special offers, free giveaways, and updates.</p>
						</div>
						<div className="flex w-full md:w-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 md:w-64 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
							/>
							<button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-300 font-medium">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				{/* Bottom Footer */}
				<div className="border-t border-gray-800 py-6">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="text-gray-400 text-sm mb-4 md:mb-0">
							© 2024 Cool Shop. All rights reserved.
						</div>
						<div className="flex space-x-6 text-sm">
							<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy Policy</a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms of Service</a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
