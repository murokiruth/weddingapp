import styled from 'styled-components';

export const HeroCont = styled.div`
	background:ivory;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 600px;
	position: relative;
	z-index: 1;

	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
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
	/* background-image: url('../images/beach.jpg');
	background-repeat: no-repeat !important; */
	background-size: cover;
	/* padding: 10%; */
	background: #fff;
`;
export const HeroContent = styled.div`
	z-index: 2;
	max-width: 1200px;
	position: absolute;
	right: 50%;
	padding: 8px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HeroH2 = styled.h2`
	color: purple;
	font-size: 24px;
	text-align: center;
	margin-top: 10px;
`;