import React from 'react';
import { RegistryCont, RegistryWrapper, RegistryH, RegistryH3, RegistryP } from './RegistryElements';

const Registry = () => {
	return (
		<>
			<RegistryCont id='registry'>
				<RegistryWrapper>
					<RegistryH>Registry</RegistryH>
					<RegistryP>
						Your presence at our wedding is all that we wish for, however, if you want to give a gift, we will be
						grateful for a cash gift.
					</RegistryP>
					<RegistryP>
						<h3>Bank:Discover</h3>
						Account# Routing number # Zelle .
					</RegistryP>
					<RegistryP>Zelle .</RegistryP>
					<RegistryH3></RegistryH3>
				</RegistryWrapper>
			</RegistryCont>
		</>
	);
};

export default Registry;
