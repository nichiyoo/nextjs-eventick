import * as React from 'react';

import LoadingCard from '@/components/blog/card/loading';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = ({}) => {
	return (
		<div className='flex flex-col space-y-8'>
			<div>
				<h6 className='text-xl font-bold text-eventick-950'>Latest Blog</h6>
				<p className='text-zinc-600'>
					Read our latest Blogs, and get the latest information about our platform.
				</p>
			</div>
			{[...Array(2)].map((_, i) => (
				<LoadingCard key={i} />
			))}
		</div>
	);
};

export default Loading;
