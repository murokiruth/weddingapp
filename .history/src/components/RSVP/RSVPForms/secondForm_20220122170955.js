import React from 'react';
import { RsvpCont, RsvpWrapper } from '../RsvpElements';
import '../Form.css';

const SecondForm = () => {
	const handleSubmit = (event) => {
		console.log('Rsvp submitted');
		event.preventDefault();
	};
	return (
		<>
			<RsvpCont>
				<RsvpWrapper>
					<div className='searchBox'>
						<form>
							<div>
								<input type='text' name='firstName' placeholder='First Name' className='formInput' />
								<input type='text' name='lastName' placeholder='Last Name' className='formInput' />
							</div>
							<div>
								<label>
									<input type='radio' value='Yes' />
									Yes
								</label>
								<label>
									<input type='radio' value='No' />
									No
								</label>
							</div>

							<div>
								<button type='submit' onClick={handleSubmit}>
									SUBMIT
								</button>
							</div>
						</form>
					</div>
				</RsvpWrapper>
			</RsvpCont>
		</>
	);
};

export default SecondForm;
