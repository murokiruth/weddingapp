import styled from 'styled-components';

export const PartyCont = styled.div`
	min-height: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 20px 0px;
	padding: 10px 15px;
	//border: 2px solid green;

	@media screen and (max-width: 1000px) {
		/* height: 1200px; */
	}
	@media screen and (max-width: 480px) {
		/* height: 1400px; */
	}
`;
export const PartyH1 = styled.h1`
	font-family: 'Great Vibes', cursive;
	margin-bottom: 20px;

	@media screen and (max-width: 4800px) {
		/* font-size: 48px; */
	}
`;
export const PartyWrapper = styled.div`
	max-width: 2000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 10px;
	padding: 0 40px;

	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media screen and (max-width: 900px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;
export const PartyCard = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	min-height: 400px;
	padding: 20px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;
export const PartyImage = styled.img`
	width: 160px;
	height: 250px;
	margin-bottom: 10px;
`;
export const PartyName = styled.h6`
	color: #000;
`;
export const Title = styled.h4`
	color: #000;
`;
