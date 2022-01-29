import styled from 'styled-components';

export const RsvpCont = styled.div`
	display: block;
	justify-content: center;
	align-items: center;
	height: 500px;
	width: 100%;
	text-align: center;
	color: #3a3939;
	border: 2px solid red;
	/* background: #2d2a39; */
	/* @media screen and (max-width: ) {
	} */
	/* background: rgba(184, 92, 101, 0.72); */
	margin: 15px 0px;
	padding: 10px;
`;

export const RsvpWrapper = styled.div``;

export const RsvpH = styled.h1`
	/* color: #b85c65; */
	letter-spacing: 5px;
	font-family: 'Great Vibes', cursive;
	color: #3a3939;
`;
export const RsvpH3 = styled.h3`

	font-style: normal;
	line-height: 1.2;
	text-transform: uppercase;
	letter-spacing: 5px;
	font-size: 17.6px;
	/* color: #b85c65; */
	margin: 10px 0px;
}
`;
export const RsvpP = styled.p`
	color: #b85c65;
	/* letter-spacing: 5px; */
	font-family: 'Great Vibes', cursive;
	padding: 10px;
`;

export const RsvpBox = styled.div`
	display: flex;
	justify-content: center;
	border: 1px solid green;
`;

// export const searchIcon = styled.div`
// 	height: 30px;
// 	width: 40px;
// 	display: flex;
// 	place-items: center;
// 	svg {
// 		font-size: 35px;
// 	}
// `;

export const DataResult = styled.div`
	margin: 0 auto;
	padding: 10px;
	width: 300px;
	height: 100px;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	overflow: hidden;
	overflow-y: auto;
	justify-content: center;

	/* .dataResult::-webkit-scrollbar {
		display: none;
	} */
`;
export const DataItem = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	color: black;
`;
