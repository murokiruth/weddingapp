import React from 'react';
import { DetailsCont, DetailsWrapper, DetailsCard } from './DetailsElements';

const Details = () => {
	return (
		<section className='flex flex-col justify-center items-center px-8' id='details'>
			<DetailsCont>
				<h1 className='text-4xl pb-8'> Our Wedding Day </h1>
				<DetailsWrapper>
					<DetailsCard>
						<p className='text-lg pb-4'>
							Date and Time
							<br />
							April 21st 2022 at 3pm CST
							<br />
							Ceremony
							<br />
							Ashton Gardens
						</p>
						<p className='text-lg pb-4'>
							Both the ceremony and reception will be at this location. <br /> The Ceremony at the chapel onSite and the
							reception at the main building.
						</p>
						<address>2001 Ashton Gardens Ln, Corinth, TX 76210</address>
					</DetailsCard>
				</DetailsWrapper>
			</DetailsCont>
		</section>
	);
};

export default Details;
