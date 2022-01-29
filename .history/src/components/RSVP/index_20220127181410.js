import React from 'react';
import { RsvpCont, RsvpP, RsvpH, RsvpBox } from './RsvpElements';
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

				<RsvpBox>
					<button onClick={handleSubmit}>Click me To Find your RSVP</button>
				</RsvpBox>
			</RsvpCont>
		</>
	);
};

export default RSVP;
