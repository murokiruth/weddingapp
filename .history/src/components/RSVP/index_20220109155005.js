import React from 'react';
import { RsvpCont, RsvpWrapper, RsvpH, RsvpH3 } from './RsvpElements';
import './Form.css';

const RSVP = () => {
	return (
		<>
			<RsvpCont id='rsvp'>
				<RsvpWrapper>
					<RsvpH>RSVP</RsvpH>
					<p>
						In order to allow all guests an evening of relaxation, we have chosen for our wedding day to be an adult
						only occasion. Looking forward to celebrating with you.
					</p>
					<RsvpH3>Enter the name on the invitation</RsvpH3>
				</RsvpWrapper>
				<form>
					<input type='text' id='name' name='name' placeholder='e.g. John and Jane Smith' />
					<div>
						<button>Find your RSVP</button>
					</div>
				</form>
			</RsvpCont>
		</>
	);
};

export default RSVP;
