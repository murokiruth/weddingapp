import React from 'react';
import { RegistryCont, RegistryWrapper, RegistryH, RegistryH3, RegistryP } from './RegistryElements';
import './Form.css';

const Registry = () => {
	return (
		<>
			<RegistryCont id='registry'>
				<RegistryWrapper>
					<RegistryH>Registry</RegistryH>
					<RegistryP>
						In order to allow all guests an evening of relaxation, we have chosen for our wedding day to be an adult
						only occasion. Looking forward to celebrating with you.
					</RegistryP>
					<RegistryH3></RegistryH3>
				</RegistryWrapper>
			</RegistryCont>
		</>
	);
};

export default Registry;
