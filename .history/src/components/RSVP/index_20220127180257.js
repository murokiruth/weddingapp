import React from 'react';
import { RsvpCont, RsvpP, RsvpH } from './RsvpElements';
import './Form.css';

const RSVP = () => {
	const handleSubmit = (event) => {
		console.log('A name was submitted');
		alert('A name was submitted');
		event.preventDefault();
	};
	return (
		<>
			<RsvpCont id='rsvp'>
				<RsvpH>RSVP</RsvpH>

				<RsvpP>
					In order to allow all guests an evening of relaxation, we have chosen for our wedding day to be an adult only
					occasion. Looking forward to celebrating with you.
				</RsvpP>

				<div className='searchBox'>
					<div>
						<button onClick={handleSubmit}>Find your RSVP</button>
					</div>

					{/* <form>
						<input type='text' name='firstName' placeholder='First Name' className='formInput' />

						<input type='text' name='lastName' placeholder='Last Name' className='formInput' />
					</form> */}
				</div>
			</RsvpCont>
		</>
	);
};

export default RSVP;
