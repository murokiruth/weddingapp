import React, { useState } from 'react';
import { RsvpCont, RsvpWrapper, RsvpH, RsvpH3, RsvpP, SearchInput, DataResult, DataItem } from './RsvpElements';
import './Form.css';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

// const handleSubmit = (event) => {
// 	alert('A name was submitted');
// 	event.preventDefault();
// };

const RSVP = ({ data, placeholder }) => {
	const [filteredData, setFilteredData] = useState([]);
	const [nameEntered, setNameEntered] = useState('');

	const handleFilter = (event) => {
		const searchName = event.target.value;
		setNameEntered(event.target.value);
		const newFilter = data.filter((value) => {
			return value.first_name.toLowerCase().includes(searchName.toLowerCase());
		});

		if (searchName === '') {
			setFilteredData([]);
		} else {
			setFilteredData(newFilter);
		}
	};

	const selectedName = () => {
		console.log('name  is selected');
		clearInput();
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
					<div className='searchBox'>
						<SearchInput>
							<input type='text' value={nameEntered} placeholder={placeholder} onChange={handleFilter} />
							<div className='searchIcon'>
								{filteredData.length === 0 ? <SearchIcon /> : <CloseIcon id='clearBtn' onClick={clearInput} />}
							</div>
						</SearchInput>

						{filteredData.length !== 0 && (
							<DataResult>
								{filteredData.slice(0, 2).map((value) => {
									return (
										<DataItem key={value.id} onClick={selectedName}>
											{value.first_name}
										</DataItem>
									);
								})}
							</DataResult>
						)}

						<div>
							<button type='submit'>Find your RSVP</button>
						</div>
					</div>





					<form>
						<label>First Name <input type="text" name='firstName'/></label>
						<label>Last Name <input type="text" name='lastName'/></label>
						<button type='submit'>SUBMIT</button>
						
						<
					</form>
				</RsvpWrapper>
			</RsvpCont>
		</>
	);
};

export default RSVP;
