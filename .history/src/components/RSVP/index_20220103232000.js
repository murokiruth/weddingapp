import React from 'react';
import { RsvpCont, RsvpWrapper, RsvpH, RsvpH3 } from './RsvpElements';
import './Form.css';

const RSVP = () => {
	return (
		<>
			<RsvpCont id='rsvp'>
				<RsvpWrapper>
					<RsvpH>Rsvp</RsvpH>
					<p>~~~~~~~~~~~~~~~~~~</p>
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
