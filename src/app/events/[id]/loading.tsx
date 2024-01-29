import { Skeleton } from '@/components/ui/skeleton';
import * as React from 'react';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
	return (
		<section id='event'>
			<div className='relative mb-20 overflow-hidden rounded-2xl'>
				<Skeleton className='aspect-video h-full w-full object-cover' />
			</div>

			<div className='grid grid-cols-1 items-start gap-10 xl:grid-cols-3'>
				<div className='flex flex-col items-start space-y-6 xl:col-span-2'>
					<Skeleton className='h-10 w-40 rounded-full bg-pink-600 font-bold text-white' />
					<Skeleton className='h-10 w-full font-bold text-indigo-950' />
					<Skeleton className='h-10 w-1/2 font-bold text-indigo-950' />

					<Skeleton className='mb-4 h-6 w-full' />
					<Skeleton className='mb-4 h-6 w-full' />
					<Skeleton className='mb-4 h-6 w-full' />
					<Skeleton className='mb-4 h-6 w-full' />
					<Skeleton className='mb-4 h-6 w-1/2' />
				</div>

				<div className='rounded-2xl border border-gray-300 bg-white p-8'>
					<Skeleton className='mb-4 h-12 w-full' />
					<Skeleton className='mb-4 h-12 w-full' />
					<Skeleton className='mb-4 h-12 w-full' />
					<Skeleton className='mb-4 h-12 w-full' />
				</div>
			</div>
		</section>
	);
};

export default Loading;
