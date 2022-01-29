import React from 'react';
import { RsvpCont, RsvpWrapper, RsvpH, RsvpH2 } from './RsvpElements';

const RSVP = () => {
	return (
		<>
			<RsvpCont id='rsvp'>
				<RsvpWrapper>
					<RsvpH>RSVP</RsvpH>
					<div>~~~~~~~~~~~~~~~~~~</div>
					<RsvpH2>ENTER THE NAME ON THE INVITATION</RsvpH2>
				</RsvpWrapper>
				<form>
					<input placeholder='e.g. John and Jane Smith'></input>
					<button>FIND YOUR RSVP</button>
				</form>
			</RsvpCont>
		</>
	);
};

export default RSVP;
