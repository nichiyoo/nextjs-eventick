import * as React from 'react';

import LoadingCard from '@/components/event/card/loading';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
	return (
		<>
			<div className='item-center flex justify-between'>
				<h2 className='text-eventick-950 text-4xl font-bold'>Upcoming Events</h2>
			</div>

			<div className='grid grid-cols-2 gap-8 py-20 lg:grid-cols-3'>
				{[...Array(3)].map((_, i) => (
					<LoadingCard key={i} />
				))}
			</div>
		</>
	);
};

export default Loading;
