import styled from 'styled-components';
export const MemCont = styled.div`
	background: #fff;
	/* display: flex; */
	justify-content: center;
	align-items: center;
	padding: 0px;
	/* height: 500px; */
	/* position: relative;
	z-index: 1; */
	border: 2px solid yellow;

	.carousel {
		display: flex;
		justify-content: center;
		align-items: center;

		@media only screen and (max-width: 1200px) {
			/* height: 90vh; */
		}

		@media only screen and (max-width: 800px) {
			/* height: 70vh; */
		}

		@media only screen and (max-width: 600px) {
			/* height: 60vh; */
		}
	}
`;

export const Image = styled.img`
	.img {
		margin: 0 auto;
		/* height: 100%;
		width: auto; */
	}
`;
