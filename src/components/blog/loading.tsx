import * as React from 'react';

import LoadingCard from '@/components/blog/card/loading';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
	return (
		<>
			<div className='mb-8 text-center'>
				<h2 className='text-eventick-950 mb-4 text-4xl font-bold'>Blogs</h2>
				<p className='text-balance text-zinc-600'>
					Read our latest Blogs, and get the latest information about our platform
					<br />
					and the latest news about our platform.
				</p>
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
