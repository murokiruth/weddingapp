import React from 'react';
import {
	RegistryCont,
	RegistryWrapper,
	RegistryH3,
	RegistryP,
} from './RegistryElements';

const Registry = () => {
	return (
		<>
			<RegistryCont id="registry">
				<RegistryWrapper>
					<h1 className="text-4xl">Registry</h1>
					<RegistryP>
						Your presence at our wedding is all that we wish for, however, if
						you want to give a gift, we will be grateful for a cash gift.
					</RegistryP>
					<RegistryP>
						<RegistryH3>Bank: Discover</RegistryH3>
						<RegistryH3>Account#: 555777788 </RegistryH3>
						<RegistryH3>Routing#: 555777788</RegistryH3>
						<RegistryH3>Zelle: </RegistryH3>
					</RegistryP>
				</RegistryWrapper>
			</RegistryCont>
		</>
	);
};

export default Registry;
