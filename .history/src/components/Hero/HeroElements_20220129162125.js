import styled from 'styled-components';

export const HeroCont = styled.div`
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px;
	height: 700px;
	position: relative;
	z-index: 1;
	border: 2px solid purple;
`;
export const HeroBG = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* overflow: hidden; */
`;
export const HeroImage = styled.img`
	width: 100%;
	height: 100%;
	background-repeat: no-repeat !important;
	background-size: cover;
	background: #fff;
`;
export const HeroContent = styled.div`
	z-index: 2;
	max-width: 1200px;
	position: absolute;
	bottom: 55%;
	left: 40%;
	padding: 8px 24px;
	display: flex;
	flex-direction: right;
	align-items: center;

	transform: scale(0.8);

	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}

	@media screen and (max-width: 800px) {
		left: 0;
	}

	@media screen and (max-width: 480px) {
		left: 0;
	}
`;

export const HeroH1 = styled.h1`
	/* color: #b85c65; */
	font-size: 7rem;
	display: flex;
	color: #fff0f5;
	text-align: center;
	margin: 24px;
	font-family: 'Fleur De Leah', cursive;

	@media screen and (max-width: 1170px) {
		font-size: 6rem;
	}

	@media screen and (max-width: 800px) {
		font-size: 5rem;
	}
	@media screen and (max-width: 500px) {
		font-size: 2rem;
	}
`;
