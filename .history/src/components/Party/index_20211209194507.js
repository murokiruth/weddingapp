import React from 'react';
import { PartyCont, PartyH1, PartyWrapper, PartyCard, PartyImage, PartyName } from './PartyElements';
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
						<PartyName> Jonte Owallah </PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Brian Chibole </PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Dennis Macharia </PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Shem Juma </PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Moses Chomba </PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Man1} />
						<PartyName> Philip Kerimah </PartyName>
					</PartyCard>

					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName> Everlyne Muroki </PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName> Essy Murugi </PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName> Ivy Kimani </PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName>Mariatu Hendricks</PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName>Maggie Karanga</PartyName>
					</PartyCard>
					<PartyCard>
						<PartyImage src={Lady} />
						<PartyName>Lilian Kimani </PartyName>
					</PartyCard>
				</PartyWrapper>
			</PartyCont>
		</>
	);
};

export default Party;
