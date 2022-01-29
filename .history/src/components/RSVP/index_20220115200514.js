import React from 'react';
import { RsvpCont, RsvpWrapper, RsvpH, RsvpH3, RsvpP } from './RsvpElements';
import './Form.css';

import SearchIcon from '@material-ui/icons/Search';
// import CloseIcon from '@material-ui/icons/Close';
import CloseIcon from '@mui/icons-material/Close';

const handleSubmit = (event) => {
	alert('A name was submitted');
	event.preventDefault();
};

const RSVP = () => {
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

					<form onSubmit={handleSubmit}>
						<div>
							<input type='text' id='name' name='name' placeholder='e.g. John and Jane Smith' />
							<div className='searchIcon'>
								<SearchIcon />
								<CloseIcon id='clearBtn' />
							</div>
						</div>

						<div>
							<button type='submit'>Find your RSVP</button>
						</div>
					</form>
				</RsvpWrapper>
			</RsvpCont>
		</>
	);
};

export default RSVP;
