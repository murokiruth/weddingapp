import React from 'react';
import { StoryCont, StoryP } from './OurStoryElements';

const Story = () => {
	return (
		<>
			<section className='flex flex-col justify-center items-center px-8 py-16'>
				<StoryCont id='story'>
					<h1 className='text-4xl pb-8'> Our Story</h1>
					<StoryP>
						Sidney and Sonnie first met over 5 years ago through a mutual friend at a night out celebrating
						Sonnies’friend’s birthday. and like most people in these modern times, they followed each other on Instagram
						that same day instead of getting each other's numbers lol. A couple months later, Sidney hit Sonnie up in
						the dm and asked for her number and what followed next was their first date. Then followed by many more
						dates and ever since they have been inseparable. In Feb 2021, we were on vacation in Maui for valentines and
						Sidney’s birthday as well. We were driving on the road to Hana, making multiple stops to take in the beauty
						that is Maui. One of the stops was at the garden of Eden arboretum and it was here that Sidney popped the
						question. It was sooo special and beautiful and the best surprise.
					</StoryP>
					<StoryP>After 5 years, we can’t wait for this exciting new chapter of our lives to begin!</StoryP>
				</StoryCont>
			</section>
		</>
	);
};

export default Story;
