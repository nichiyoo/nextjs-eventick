import Image from 'next/image';
import * as React from 'react';

import { Button } from '@/components/ui/button';

interface CtaProps {
	//
}

const Cta: React.FC<CtaProps> = ({}) => {
	return (
		<div className='my-20 bg-pink-600/10'>
			<div className='mx-auto w-full max-w-screen-xl px-4'>
				<div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-2'>
					<div className='relative'>
						<Image
							alt='Hero'
							src='/illustration.png'
							width={900}
							height={900}
							className='z-10 mx-auto -mt-20 h-auto w-full max-w-2xl'
						/>
					</div>
					<div className='py-10 text-center lg:text-start'>
						<h2 className='mb-4 text-4xl font-bold'>Make your own Event</h2>
						<p className='mb-6 text-balance text-zinc-600'>
							We provide a platform for you to create your own event and sell your ticket, or you can just
							create an event for free.
						</p>
						<Button size='lg'>Create Events</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cta;
