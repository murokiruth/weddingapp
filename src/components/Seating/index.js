import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Seating() {
	const [APIData, setAPIData] = useState([]);
	const [filteredResults, setFilteredResults] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	useEffect(() => {
		axios.get(`./seating.json`).then((response) => {
			setAPIData(response.data.Seating);
		});
	}, []);

	const searchItems = (searchValue) => {
		setSearchInput(searchValue);
		if (searchInput !== '') {
			const filteredData = APIData.filter((item) => {
				return Object.values(item).join('').toLowerCase().includes(searchInput.split(' ').join('').toLowerCase());
			});
			setFilteredResults(filteredData);
		} else {
			setFilteredResults(APIData);
		}
	};

	return (
		<section className='flex flex-col justify-center items-center px-8 py-16' id='seating'>
			<div className='mb-4 justify-center'>
				<h1 className='text-4xl text-center pb-8'>Find Table</h1>
				<div style={{ width: 300, margin: '0 auto' }}>
					<input
						type='text'
						className='form-control
					block
					w-full
					px-4
					py-2
					text-xl
					font-normal
					text-gray-700
					bg-white bg-clip-padding
					border border-solid border-gray-300
					rounded
					transition
					ease-in-out
					m-0
					focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
				  '
						placeholder='Enter Full Name...'
						onChange={(e) => searchItems(e.target.value)}
					/>
				</div>
				<div style={{ marginTop: 20, height: 92, overflow: 'hidden' }} class='grid space-x-1 lg:grid-cols-4'>
					{
						searchInput.length > 1
							? filteredResults.map((item, index) => {
									return (
										<div key={index} class='px-4 py-4 bg-white border-2 border-gray-400 rounded'>
											<h3 class='text-2xl text-center text-gray-800'>
												{item.FirstName} {item.LastName}
											</h3>
											<p class='text-center text-gray-500'>Table {item.Table}</p>
										</div>
									);
							  })
							: []
						// APIData.map((item, index) => {
						// 		return (
						// 			<Card key={index}>
						// 				<Card.Content>
						// 					<Card.Header>
						// 						{item.FirstName} {item.LastName}: <b>Table {item.Table}</b>
						// 					</Card.Header>
						// 				</Card.Content>
						// 			</Card>
						// 		);
						//   })
					}
				</div>
			</div>
		</section>
	);
}
