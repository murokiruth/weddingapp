import styled from 'styled-components';
export const MemCont = styled.div`
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0px;
	height: 500px;
	position: relative;
	z-index: 1;
	border: 2px solid yellow;

	.carousel {
		display: flex;
		justify-content: center;
	}
`;

export const Image = styled.img`
	height: 300px;

	.img {
		margin: 0 auto;
		height: 100%;
		width: auto;
	}
`;
