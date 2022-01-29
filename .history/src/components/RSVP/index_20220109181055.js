import React from 'react';
import { RsvpCont, RsvpWrapper, RsvpH, RsvpH3, RsvpP } from './RsvpElements';
import './Form.css';


const RSVP = () => {

	
	handleSubmit(event){
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}
	return (
		<>
			<RsvpCont id='rsvp'>
				<RsvpWrapper>
					<RsvpH>RSVP</RsvpH>
					<RsvpP>
						In order to allow all guests an evening of relaxation, we have chosen for our wedding day to be an adult
						only occasion. Looking forward to celebrating with you.
					</RsvpP>
					<RsvpH3>Enter the name on the invitation</RsvpH3>
				</RsvpWrapper>
				<form onSubmit={this.handleSubmit}>
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
