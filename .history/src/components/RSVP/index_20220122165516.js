import React from 'react';
import { RsvpCont } from './RsvpElements';
import './Form.css';

import FirstForm from './RSVPForms/firstForm';

const RSVP = () => {
	return (
		<>
			<RsvpCont id='rsvp'>
				<FirstForm />
			</RsvpCont>
		</>
	);
};

export default RSVP;
