import React from 'react';
import { StoryCont, StoryP } from './OurStoryElements';

const Story = () => {
	return (
		<>
			<section className="flex flex-col justify-center items-center px-8 py-16">
				<StoryCont id="story">
					<h1 className="text-4xl pb-8"> Our Story</h1>
					<StoryP>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et doloremagna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ulla. Lorem ipsum dolor
						sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ulla
					</StoryP>
					<StoryP>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ulla. Lorem ipsum dolor
						sit amet, consectetur adipisicing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ulla
					</StoryP>
				</StoryCont>
			</section>
		</>
	);
};

export default Story;
