import React from 'react';
import { PartyCont, PartyH1, PartyWrapper, PartyCard, PartyImage, PartyName, Title } from './PartyElements';
import Man1 from '../../images/gent.svg';
import Lady from '../../images/lady.svg';

const Party = () => {
	return (
		<>
			<PartyCont id='party'>
				<PartyH1> Bridal Party</PartyH1>
				<PartyWrapper>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Brian Chibole </PartyName>
						<Title>BestMan</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Dennis Macharia </PartyName>
						<Title>Groomsman</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Shem Juma </PartyName>
						<Title>Groomsman</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Moses Chomba </PartyName>
						<Title>Groomsman</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Philip Kerimah </PartyName>
						<Title>Groomsman</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Raphael Mwangi </PartyName>
						<Title>Groomsman</Title>
					</PartyCard>

					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName> Essy Murugi </PartyName>
						<Title>Maid of honor</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName> Ivy Kimani </PartyName>
						<Title>Bridesmaid</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName>Mariatu Hendricks</PartyName>
						<Title>Bridesmaid</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName>Maggie Karanga</PartyName>
						<Title>Bridesmaid</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName>Diana Nzau </PartyName>
						<Title>Bridesmaid</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName>Ivy Kungu </PartyName>
						<Title>Bridesmaid</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Max </PartyName>
						<Title>Pageboy</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName> Amani Howell </PartyName>
						<Title>Flowergirl</Title>
					</PartyCard>
				</PartyWrapper>
			</PartyCont>
		</>
	);
};

export default Party;
