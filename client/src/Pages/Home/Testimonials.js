import React from 'react'

function Profile(props) {
	return (
		<div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 mx-2 mb-6 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
			{/* Avatar */}
			<div className="flex justify-center mb-4">
				<div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
					{props.name.split(' ').map(n => n[0]).join('').toUpperCase()}
				</div>
			</div>
			
			{/* Name */}
			<h3 className="text-lg font-semibold text-gray-800 text-center mb-3">
				{props.name}
			</h3>
			
			{/* Review Text */}
			<p className="text-gray-600 text-sm leading-relaxed mb-4 text-center italic">
				"{props.text}"
			</p>
			
			{/* Rating */}
			<div className="flex justify-center space-x-1 mb-2">
				{[...Array(5)].map((_, i) => (
					<svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
						<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
					</svg>
				))}
			</div>
			
			{/* Verified Badge */}
			<div className="flex justify-center">
				<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
					<svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
						<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
					</svg>
					Verified Purchase
				</span>
			</div>
		</div>
	);
}

export default function Testimonials() {
	return (
		<section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-gray-900 mb-4">
						What Our Customers Say
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Discover why thousands of customers trust us for their footwear needs.
						Real stories from real people who've experienced the perfect blend of comfort,
						style, and quality.
					</p>
				</div>

				{/* Testimonials Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<Profile
						name="Arjun Kumar"
						text="Absolutely love these shoes! The quality is outstanding and they're incredibly comfortable. I've been wearing them daily for months and they still look brand new. Worth every penny!"
					/>
					<Profile
						name="Priya Singh"
						text="Perfect fit and amazing comfort! I was skeptical about ordering online, but these exceeded my expectations. The customer service was also fantastic when I had questions about sizing."
					/>
					<Profile
						name="Rahul Sharma"
						text="These shoes are a game-changer! The style is modern and versatile - I can wear them to work or casually. The comfort level is unmatched, truly feels like walking on clouds."
					/>
				</div>

				{/* Stats Section */}
				<div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					<div className="bg-white rounded-lg p-6 shadow-md">
						<div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
						<div className="text-gray-600">Happy Customers</div>
					</div>
					<div className="bg-white rounded-lg p-6 shadow-md">
						<div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
						<div className="text-gray-600">Average Rating</div>
					</div>
					<div className="bg-white rounded-lg p-6 shadow-md">
						<div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
						<div className="text-gray-600">Satisfaction Rate</div>
					</div>
					<div className="bg-white rounded-lg p-6 shadow-md">
						<div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
						<div className="text-gray-600">Customer Support</div>
					</div>
				</div>
			</div>
		</section>
	);
}
