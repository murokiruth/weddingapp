import styled from 'styled-components';

export const PartyCont = styled.div`
	min-height: 1000px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PartyWrapper = styled.div`
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 10px;
	padding: 0 20px;

	@media screen and (max-width: 1199.98px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}
	@media screen and (max-width: 991.98px) {
		grid-template-columns: 1fr 1fr 1fr;
	}
	@media screen and (max-width: 767.98px) {
		grid-template-columns: 1fr 1fr;
	}
	@media screen and (max-width: 575.98px) {
		grid-template-columns: 1fr;
	}
`;
export const PartyCard = styled.div`
	background: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 5px;
	min-height: 200px;
	width: 240px;
	padding: 20px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;
	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
	}

	@media screen and (max-width: 575.98px) {
		width: 340px;
		min-height: 300px;
	}
`;
export const PartyImage = styled.img`
	max-width: 200px;
	height: 200px;
	margin-bottom: 10px;
	@media screen and (max-width: 575.98px) {
		max-width: 300px;
		height: 300px;
	}
`;
export const PartyName = styled.h5`
	color: #000;
	padding: 5px;
`;
export const Title = styled.h6`
	color: #000;
`;
