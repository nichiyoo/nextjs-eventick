import * as React from 'react';

import SingleLoading from '@/components/review/single/loading';

const Loading: React.FC = ({}) => {
	return (
		<section id='review' className='py-20'>
			<div className='mb-8 text-center'>
				<h2 className='mb-2 text-3xl font-bold text-eventick-950'>User Reviews</h2>
				<p className='text-balance text-zinc-600'>People love our events. Here&apos;s what they have to say.</p>
			</div>

			<div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
				{[...Array(4)].map((_, index) => (
					<SingleLoading key={index} />
				))}
			</div>
		</section>
	);
};

export default Loading;
