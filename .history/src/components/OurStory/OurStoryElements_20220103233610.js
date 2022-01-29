import styled from 'styled-components';

export const StoryCont = styled.div`
	display: block;
	justify-content: center;
	align-items: center;
	//height: 200px;
	width: 100%;
	text-align: center;
	border: 2px solid red;
	margin: 15px 0px;
	padding: 10px;

	@media screen and (max-width: 1100px) {
	}
`;
export const StoryH1 = styled.h1`
	font-family: 'Great Vibes', cursive;
	color: #3a3939;
`;
export const StoryP = styled.p`
	color: #3a3939;
	line-height: 1.5;
	padding: 10px 50px;
	margin: 10px;
`;
