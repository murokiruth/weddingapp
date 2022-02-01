import React, { useState, useEffect } from 'react';

import { API } from 'aws-amplify';

import './index.css';

const GuestForm = () => {
	const [guest, setGuest] = useState({});
	const [rsvp, setRsvp] = useState('no');
	const [rsvpRecieved, setRsvpRecieved] = useState(false);
	const [rsvpSubmitted, setRsvpSubmitted] = useState(false);
	const [partyNum, setPartyNum] = useState(0);
	const [showModal, setShowModal] = useState(false);
	const [submittedModal, setSubmittedModal] = useState(false);
	const [notFound, setNotFound] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [formState, setFormState] = useState({
		firstName: '',
		lastName: '',
		rsvp: 'no',
		guests: '0',
	});

	useEffect(() => {
		setRsvpRecieved(guest.responded);
		setPartyNum(guest.guests);
		setRsvp(() => rsvp);
	}, [rsvp, guest, formState]);

	let partyOption = [
		{ label: '2', value: 2 },
		{ label: '1', value: 1 },
	];

	const handleRsvpChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		formState[name] = value;
		setFormState(formState);

		const target = e.target;
		if (target.checked) {
			setRsvp(target.value);
		}
	};

	const handleRsvpSubmit = async (e) => {
		let guestname = formState.firstName.toLowerCase() + '_' + formState.lastName.toLowerCase();

		let rsvpd = false;
		if (formState.rsvp === 'yes') {
			rsvpd = true;
		} else {
			rsvpd = false;
		}

		const data = {
			body: {
				firstlast: guestname,
				firstName: formState.firstName,
				lastName: formState.lastName,
				rsvp: rsvpd,
				guests: parseInt(formState.guests),
			},
		};

		const response = await API.post('weddingAPI', `/guests/${guestname}`, data);

		if (response.statusCode === 200) {
			setRsvpSubmitted(true);
		}
	};

	const handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		formState[name] = value;
		setFormState(formState);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		let guestname = formState.firstName.toLowerCase() + '_' + formState.lastName.toLowerCase();

		const response = await API.get('weddingAPI', `/guests/${guestname}`, {});

		if (response.hasOwnProperty('body')) {
			const resBody = JSON.parse(response.body);
			setGuest({ ...resBody });
			setIsLoading(false);
			setShowModal(true);
			setSubmittedModal(true);
		} else {
			setIsLoading(false);
			setNotFound(true);
		}
	};

	return (
		<>
			{notFound ? (
				<div
					className='fixed z-10 inset-0 overflow-y-auto'
					aria-labelledby='modal-title'
					role='dialog'
					aria-modal='true'>
					<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>

						<span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
							&#8203;
						</span>
						<div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
							<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6 text-red-600'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
											/>
										</svg>
									</div>
									<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
										<h1 className='text-2xl'>Guest Not Found</h1>
										<div className='mt-2'>
											<p className='text-sm text-gray-500'>
												Hi{' '}
												<span className='guest-name'>
													{formState.firstName} {formState.lastName}
													{', '}
												</span>{' '}
												looks like we could not find you in our Guest list. please text or call <b>405-480-2243</b> to
												verify we have the correct name
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
								<button
									type='button'
									className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
									onClick={() => {
										setNotFound(false);
									}}>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}

			{rsvpSubmitted ? (
				<div
					className='fixed z-10 inset-0 overflow-y-auto'
					aria-labelledby='modal-title'
					role='dialog'
					aria-modal='true'>
					<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>

						<span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
							&#8203;
						</span>
						<div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
							<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6 text-green-600'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
											/>
										</svg>
									</div>
									<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
										<h1 className='text-2xl'>RSVP Recieved</h1>
										<div className='mt-2'>
											<p className='text-sm text-gray-500'>
												Hi{' '}
												<span className='guest-name'>
													{formState.firstName} {formState.lastName}
													{', '}
												</span>{' '}
												your RSVP was successfully. Thank you for responding. See you at the wedding!
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
								<button
									type='button'
									className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
									onClick={() => {
										setRsvpSubmitted(false);
									}}>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}

			{submittedModal && rsvpRecieved ? (
				<div
					className='fixed z-10 inset-0 overflow-y-auto'
					aria-labelledby='modal-title'
					role='dialog'
					aria-modal='true'>
					<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
						<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>

						<span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
							&#8203;
						</span>
						<div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
							<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'>
										<svg
											className='h-6 w-6 text-red-600'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											aria-hidden='true'>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth='2'
												d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
											/>
										</svg>
									</div>
									<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
										<h1 className='text-2xl'>RSVP Already Submitted</h1>
										<div className='mt-2'>
											<p className='text-sm text-gray-500'>
												Hi{' '}
												<span className='guest-name'>
													{guest.firstName} {guest.lastName}
													{', '}
												</span>{' '}
												looks like you already submitted your RSVP. If you would like to change your reservation please
												email sidsonnie@gmail.com
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
								<button
									type='button'
									className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
									onClick={() => {
										setSubmittedModal(false);
									}}>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
			<section className='flex flex-col justify-center items-center px-8 py-16'>
				<div className='mb-4 justify-center'>
					<h1 id='rsvp' className='text-4xl text-center pb-8'>
						RSVP
					</h1>
					<p className='px-4 py-4'>
						In order to allow all our guests an evening of relaxation, we have chosen for our wedding day to be an adult
						only occasion. We are Looking forward to celebrating with you.
					</p>
				</div>
				<form className='max-w-md w-full bg-white rounded space-y-4' onSubmit={handleSubmit}>
					<div>
						<input
							className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
							type='text'
							placeholder='First Name'
							name='firstName'
							onChange={handleChange}
						/>
					</div>
					<div>
						<input
							className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
							type='text'
							placeholder='Last Name'
							name='lastName'
							onChange={handleChange}
						/>
					</div>
					<div>
						<button
							className='w-full hover:bg-gray-300 rounded text-sm font-bold text-gray-50 transition duration-200 submit-button justify-center items-center'
							disabled={isLoading}>
							Submit
						</button>
					</div>
					<div></div>
				</form>
			</section>

			<section>
				{showModal && !rsvpRecieved ? (
					<>
						<div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
							<div className='relative w-96 my-6 mx-auto max-w-3xl'>
								<div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
									<div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
										<h1 className='text-3xl'>RSVP</h1>
									</div>
									<div className='relative flex-auto'>
										<form className='max-w-md w-96 bg-white rounded pl-6 pr-6 space-y-4' onSubmit={handleRsvpSubmit}>
											<div>
												<input
													className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
													type='text'
													placeholder='First Name'
													name='firstName'
													value={guest.firstName}
													disabled={true}
												/>
											</div>
											<div>
												<input
													className='w-full p-4 text-sm bg-gray-50 focus:outline-none border border-gray-200 rounded text-gray-600'
													type='text'
													placeholder='Last Name'
													name='lastName'
													value={guest.lastName}
													disabled={true}
												/>
											</div>
											<div className='flex'>
												<p className='inline-flex items-center mt-3 mr-5'>Are You Attending?</p>
												<label className='inline-flex mt-3 mr-5'>
													<input
														type='radio'
														name='rsvp'
														id='rsvpRadio1'
														className='form-radio h-5 w-5 text-gray-600'
														value='yes'
														checked={rsvp === 'yes'}
														onChange={handleRsvpChange}
													/>
													<span className='ml-2 text-gray-700'>Yes</span>
												</label>

												<label className='inline-flex mt-3'>
													<input
														type='radio'
														name='rsvp'
														id='rsvpRadio2'
														className='form-radio h-5 w-5 text-red-600'
														value='no'
														checked={rsvp === 'no'}
														onChange={handleRsvpChange}
													/>
													<span className='ml-2 text-gray-700'>No</span>
												</label>
											</div>
											{rsvp === 'yes' && partyNum > 1 ? (
												<div className='p-2 text-left'>
													<div className='mt-4 mb-3 xl:w-54'>
														<h3 className='mb-3'>
															Number of people in your party: <b>({partyNum})</b>
														</h3>
														<p className='mb-3'>Change party number below</p>
														<select
															className='form-select
														block
														w-full
														px-3
														py-1.5
														text-base
														font-normal
														text-gray-700
														bg-white bg-clip-padding bg-no-repeat
														border border-solid border-gray-300
														rounded
														transition
														ease-in-out
														m-0
														focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
															aria-label='Number of party selection'
															name='guests'
															onChange={handleRsvpChange}>
															{partyOption.map((option, index) => (
																<option key={index} value={option.value}>
																	{option.label}
																</option>
															))}
														</select>
													</div>
												</div>
											) : null}
										</form>
									</div>
									<div className='flex items-center justify-end p-4 rounded-b'>
										<button
											className='w-32 h-12 bg-gray-700 hover:bg-gray-700/50 font-bold uppercase text-gray-50 mr-14 px-8 py-4 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
											type='button'
											disabled={isLoading}
											onClick={() => {
												setShowModal(false);
											}}>
											Cancel
										</button>
										<button
											className='w-32 h-12 bg-green-700 hover:bg-green-700/50 px-8 py-4 mb-2 rounded text-sm font-bold  uppercase  text-gray-50 transition duration-200'
											type='submit'
											onClick={() => {
												handleRsvpSubmit();
												setShowModal(false);
											}}>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
					</>
				) : null}
			</section>
		</>
	);
};

export default GuestForm;
