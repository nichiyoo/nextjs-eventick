import * as React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

interface LoadingProps {
	//
}

const Loading: React.FC<LoadingProps> = () => {
	return (
		<div className='shadow-eventick-950/30 overflow-hidden rounded-2xl bg-white shadow-2xl'>
			<Skeleton className='aspect-video' />
			<div className='p-6'>
				<div className='flex items-start space-x-6'>
					<div className='flex flex-col items-center space-y-1'>
						<Skeleton className='h-4 w-8' />
						<Skeleton className='h-8 w-8' />
					</div>
					<div className='flex w-full flex-col space-y-2'>
						<Skeleton className='h-4 w-full' />
						<Skeleton className='h-4 w-1/2' />
						<Skeleton className='h-8 w-full' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
