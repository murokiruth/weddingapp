import React from 'react';
import { PartyCont, PartyWrapper, PartyCard, PartyImage, PartyName, Title } from './PartyElements';
import Man1 from '../../images/gent.svg';
import Phil from '../../images/300_phil.png';
import Raphoe from '../../images/300_rapho.png';
import Dennis from '../../images/300_dennis.png';
import Shem from '../../images/300_shem.png';
import Chomba from '../../images/300_chomba.png';
import Mimo from '../../images/300_mimo.png';
import Mariatu from '../../images/300_mariatu.png';
import Maggie from '../../images/300_maggie.png';
import Murugi from '../../images/300_murugi.png';
import Diana from '../../images/300_diana.png';
import IvyK from '../../images/300_kungu.png';
import Max from '../../images/300_max.png';
import Amani from '../../images/300_amani.png';

const Party = () => {
	return (
		<section className='flex flex-col justify-center items-center px-8 py-16 bg-gray-200' id='party'>
			<PartyCont>
				<h1 className='text-4xl pb-16'> Wedding Party</h1>
				<PartyWrapper>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Brian Chibole </PartyName>
						<Title>BestMan</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Dennis} />
						<PartyName> Dennis Macharia </PartyName>
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
						<PartyImage src={Shem} />
						<PartyName> Shem Juma </PartyName>
						<Title>Groomsman</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Chomba} />
						<PartyName> Moses Chomba </PartyName>
						<Title>Groomsman</Title>
					</PartyCard>

					<PartyCard>
						<PartyImage src={Murugi} />
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
						<PartyImage src={Max} />
						<PartyName> Max </PartyName>
						<Title>Pageboy</Title>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Amani} />
						<PartyName> Amani Howell </PartyName>
						<Title>Flowergirl</Title>
					</PartyCard>
				</PartyWrapper>
			</PartyCont>
		</section>
	);
};

export default Party;
