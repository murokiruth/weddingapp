import React from 'react';
import { RsvpH, RsvpH3, RsvpP } from '../RsvpElements';
import '../Form.css';

const FirstForm = () => {
	const handleSubmit = (event) => {
		console.log('A name was submitted');
		alert('A name was submitted');
		event.preventDefault();
	};

	return (
		<>
			<div>
				<RsvpH>RSVP</RsvpH>
				<RsvpP>
					In order to allow all guests an evening of relaxation, we have chosen for our wedding day to be an adult only
					occasion. Looking forward to celebrating with you.
				</RsvpP>

				<div className='searchBox'>
					<RsvpH3>
						<button onClick={handleSubmit}>Find your RSVP</button>
					</RsvpH3>
					<div></div>

					{/* <form>
						<input type='text' name='firstName' placeholder='First Name' className='formInput' />

						<input type='text' name='lastName' placeholder='Last Name' className='formInput' />
					</form> */}
				</div>
			</div>
		</>
	);
};

export default FirstForm;
