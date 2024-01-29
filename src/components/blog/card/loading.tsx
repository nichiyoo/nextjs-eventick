import * as React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

interface LoadingProps {
	//
}

const Loading: React.FC<LoadingProps> = ({}) => {
	return (
		<div className='flex w-full flex-col space-y-6'>
			<Skeleton className='aspect-video rounded-2xl' />
			<Skeleton className='h-8 w-full' />
			<Skeleton className='h-16 w-full' />
			<Skeleton className='h-4 w-3/4' />
		</div>
	);
};

export default Loading;
