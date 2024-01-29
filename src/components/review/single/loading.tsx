/* 
	<div className='flex items-start'>
			<div className='flex-0 mr-4 flex flex-col items-center justify-center space-y-2 whitespace-nowrap'>
				<div className='block h-12 w-12 flex-shrink-0 rounded-full bg-gray-200'>
					{review.image && (
						<Image
							src={review.image}
							alt={review.name}
							width={48}
							height={48}
							className='h-full w-full rounded-full object-cover'
						/>
					)}
				</div>
				<h5 className='text-sm font-bold text-indigo-950'>{review.name}</h5>
			</div>
			<div className='w-full rounded-2xl border border-gray-300 p-6'>
				<p className='text-sm text-gray-600'>{review.review}</p>
			</div>
		</div> */

import * as React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

interface LoadingProps {
	//
}

const Loading: React.FC<LoadingProps> = ({}) => {
	return (
		<div className='flex items-start'>
			<div className='flex-0 mr-4 flex w-32 flex-col items-center justify-center space-y-2 whitespace-nowrap'>
				<Skeleton className='flex-0 block h-12 w-12 rounded-full bg-gray-200' />
				<Skeleton className='h-4 w-full font-bold text-indigo-950' />
			</div>
			<div className='w-full rounded-2xl border border-gray-300 p-6'>
				<Skeleton className='mb-1 h-4 w-full' />
				<Skeleton className='mb-1 h-4 w-full' />
				<Skeleton className='mb-1 h-4 w-1/2' />
			</div>
		</div>
	);
};

export default Loading;
