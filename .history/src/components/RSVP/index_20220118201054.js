import React, { useState } from 'react';
import { RsvpCont, RsvpWrapper, RsvpH, RsvpH3, RsvpP, SearchInput, DataResult } from './RsvpElements';
import './Form.css';

import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

// const handleSubmit = (event) => {
// 	alert('A name was submitted');
// 	event.preventDefault();
// };

const RSVP = ({ data }) => {
	const [filteredData, setFilteredData] = useState([]);
	const [nameEntered, setNameEntered] = useState('');

	const handleFilter = (event) => {
		const searchWord = event.target.value;
		const newFilter = data.filter((value) => {
			return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
		});

		if (searchWord === '') {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const clearInput = () => {
		setFilteredData([]);
		setNameEntered('');
	};

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
							<input type='text' value={nameEntered} placeholder='e.g. John and Jane Smith' onChange={handleFilter} />
							<div className='searchIcon'>
								{filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id='clearBtn' onClick={clearInput} />}
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
