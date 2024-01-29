import { readdirSync } from 'fs';
import Image from 'next/image';
import * as React from 'react';

interface BrandsProps {
	//
}

const Brands: React.FC<BrandsProps> = ({ ...props }) => {
	const images = readdirSync('./public/brands');

	return (
		<div className='py-20'>
			<div className='mb-8 text-center'>
				<h2 className='mb-4 text-4xl font-bold text-eventick-950'>Join these brands</h2>
				<p className='text-balance text-zinc-600'>
					We&apos;ve had the pleasure of working with industry-defining brands.
					<br />
					These are just some of them.
				</p>
			</div>

			<div className='flex flex-wrap items-center justify-center'>
				{images?.map((image, index) => (
					<div className='w-1/3 p-8 md:w-1/4 md:p-10 lg:w-1/5' key={index}>
						<Image
							alt='brand'
							src={`/brands/${image}`}
							width={250}
							height={250}
							className='aspect-[21/9] object-contain'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Brands;
