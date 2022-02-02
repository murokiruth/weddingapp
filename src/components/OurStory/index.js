import React from 'react';
import { StoryCont, StoryP } from './OurStoryElements';

const Story = () => {
	return (
		<>
			<section className="flex flex-col justify-center items-center px-8 py-16">
				<StoryCont id="story">
					<h1 className="text-4xl pb-8 text-center">Our Story</h1>
					<p className="pb-6 text-lg">
						Sidney and Sonnie first met over 5 years ago through a mutual friend
						at a night out celebrating Sonnie's friend's birthday 🥳 and like
						most people in these modern times, they followed each other on
						Instagram that same day instead of getting each other's contact
						information 😂. A couple months later, Sidney hit Sonnie up in the
						dm 😏 and asked for her number. What followed next was their first
						date 🍹🍝. Then followed by many more dates and ever since they have
						been inseparable 💏.
					</p>
					<p className="text-lg">
						In Feb 2021, they were on vacation in Maui for valentines and
						Sidney's birthday. They were driving on the road to Hana, making
						multiple scenic stops to take in the beauty that is Maui 🌄🌊. One
						of the stops was at the garden of Eden arboretum and it was here
						that Sidney popped the question 💍💖. It special, beautiful and
						according to Sonnie, one of the best surprises 🙌😍. After 5 years,
						we can't wait for this exciting new chapter of our lives to begin!
						As you come to celebrate with us, we are honored that you are part
						of our story 🙏🙏.
					</p>
				</StoryCont>
			</section>
		</>
	);
};

export default Story;
