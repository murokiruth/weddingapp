import React from 'react';
import { RegistryCont, RegistryWrapper } from './RegistryElements';

const Registry = () => {
	return (
		<section className='flex flex-col justify-center items-center px-8 py-16' id='registry'>
			<RegistryCont>
				<RegistryWrapper>
					<h1 className='text-4xl pb-8'>Registry</h1>
					<p className='pb-4 text-lg'>
						Your presence at our wedding is all that we wish for. However, if you want to give a gift, we will be
						grateful for a cash gift.
					</p>

					<p>
						<b>Zelle: </b>theowallahs@gmail.com
					</p>
				</RegistryWrapper>
			</RegistryCont>
		</section>
	);
};

export default Registry;
