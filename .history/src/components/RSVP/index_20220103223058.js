import React from 'react';
import { RsvpCont, RsvpWrapper, RsvpH, RsvpH3 } from './RsvpElements';

const RSVP = () => {
	return (
		<>
			<RsvpCont id='rsvp'>
				<RsvpWrapper>
					<RsvpH>RSVP</RsvpH>
					<div>~~~~~~~~~~~~~~~~~~</div>
					<RsvpH3>Enter the name on the invitation</RsvpH3>
				</RsvpWrapper>
				<form>
					<input type='text' id='name' name='name' placeholder='e.g. John and Jane Smith' />
					<button>FIND YOUR RSVP</button>
				</form>
			</RsvpCont>
		</>
	);
};

export default RSVP;
