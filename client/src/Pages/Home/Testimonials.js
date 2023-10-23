import React from 'react'



function Profile(props){

    return (
		<div className="flex flex-col flex-wrap justify-between items-center rounded-xl bg-slate-100 basis-1/3 ">
			<img src={props.src} alt="Img" />
			<p>{props.name}</p>
			<p>
				Lorem ipsum dolor sitaliquid et eligendi nam assumenda, voluptatem
				cupiditate quisquam commodi facilis eum!
			</p>
			<p>5/5 ⭐⭐⭐⭐⭐</p>
		</div>
	);
}


export default function Testimonials() {
  return (
		<>
			<p className='mt-10 font-mono text-3xl font-bold'>Testimonials</p>
			<p className='m-5 font-mono font-medium text-gray-600'>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam iure aperiam, tenetur molestiae exercitationem
				illo labore consequuntur dolore maiores magni aliquam, in consequatur necessitatibus dolores quibusdam cum
				officiis beatae reiciendis eligendi. A molestias repellat tempora sint deleniti illo debitis voluptatum.
			</p>
			<div className='flex flex-row  '>
				<Profile src={""} name={"Rishabh Singh"} />
				<Profile src={""} name={"Rishabh Singh"} />
				<Profile src={""} name={"Rishabh Singh"} />
			</div>
		</>
  );
}
