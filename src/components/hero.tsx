import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';

interface HeroProps {
	//
}

const Hero: React.FC<HeroProps> = ({}) => {
	return (
		<section id='hero' className='relative min-h-96'>
			<Image
				alt='Hero'
				src='/overlay.png'
				width={1920}
				height={1080}
				className='absolute inset-0 h-full w-full object-cover'
				priority
			/>
			<div className='custom-gradient absolute inset-0 opacity-90' />
			<div className='relative mx-auto w-full max-w-screen-xl px-4'>
				<Navbar />

				<div className='grid grid-cols-1 items-center gap-10 pb-40 pt-16 lg:grid-cols-2'>
					<div className='relative h-full w-full select-none'>
						<Image
							alt='Shadow'
							src='/shadow.png'
							width={900}
							height={900}
							className='absolute -bottom-14 left-0 h-auto w-full opacity-50'
						/>
						<Image
							alt='Hero'
							src='/hero.png'
							width={900}
							height={900}
							className='relative z-10 mx-auto h-auto w-full max-w-2xl'
						/>
					</div>
					<div className='text-center lg:text-start'>
						<h1 className='mb-6 text-balance text-5xl font-bold text-white'>
							SBS MTV The Kpop Show Ticket Package
						</h1>
						<p className='mb-8 text-white'>
							Look no further! Our SBS The Show tickets are the simplest way for you to experience a live
							Kpop recording.
						</p>
						<div className='flex items-center justify-center space-x-4 lg:justify-start'>
							<Link href='/ticket'>
								<Button size='lg'>Get Ticket</Button>
							</Link>
							<Button size='lg' variant='outline'>
								Learn More
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
