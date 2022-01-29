import React from 'react';
import { PartyCont, PartyH1, PartyWrapper, PartyCard, PartyImage, PartyName, Title } from './PartyElements';
import Man1 from '../../images/gent.svg';
import Lady from '../../images/lady.svg';
import Phil from '../../images/300_phil.png';
import Raphoe from '../../images/300_rapho.png';
import Mimo from '../../images/mimo.jpg';
import Mariatu from '../../images/mariatu.jpg';
import Maggie from '../../images/maggie.jpg';
import Diana from '../../images/diana.jpg';
import IvyK from '../../images/ivykungu.jpg';

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
						<PartyImage src={Phil} />
						<PartyName> Philip Kerimah </PartyName>
						<Title>Groomsman</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Raphoe} />
						<PartyName> Raphael Mwangi </PartyName>
						<Title>Groomsman</Title>
					</PartyCard>

					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName> Essy Murugi </PartyName>
						<Title>Maid of honor</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Mimo} />
						<PartyName> Ivy Kimani </PartyName>
						<Title>Bridesmaid</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Mariatu} />
						<PartyName>Mariatu Hendricks</PartyName>
						<Title>Bridesmaid</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Maggie} />
						<PartyName>Maggie Karanga</PartyName>
						<Title>Bridesmaid</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Diana} />
						<PartyName>Diana Nzau </PartyName>
						<Title>Bridesmaid</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={IvyK} />
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
