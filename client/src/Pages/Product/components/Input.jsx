export default function Input(props){
    return (
		<label className={props.color}>
			<input
				
				onChange={props.handleChange}
				value={props.value}
				name={props.name}
				type="radio"
			/>
			{props.value ? props.value : "All"}
		</label>
	);
}