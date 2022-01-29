import React from 'react';
import { RsvpCont, RsvpWrapper, RsvpH, RsvpH3, RsvpP, SearchInput, DataResult } from './RsvpElements';
import './Form.css';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

// const handleSubmit = (event) => {
// 	alert('A name was submitted');
// 	event.preventDefault();
// };

const RSVP = (placeholder, data) => {
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

					<div>
						<SearchInput>
							<input type='text' placeholder='e.g. John and Jane Smith' />
							<div className='searchIcon'>
								<SearchIcon />
								<CloseIcon id='clearBtn' />
							</div>
						</SearchInput>

						<DataResult>
							{data.map((value, key) => {
								return <div>{value.first_name}</div>;
							})}
						</DataResult>

						<div>
							<button type='submit'>Find your RSVP</button>
						</div>
					</div>
				</RsvpWrapper>
			</RsvpCont>
		</>
	);
};

export default RSVP;
