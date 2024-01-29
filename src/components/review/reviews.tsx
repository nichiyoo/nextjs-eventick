import * as React from 'react';

import type { Review } from '@/lib/types';

import SingleReview from './single/review';

interface ReviewsProps {
	id: number;
}

const fetchReviews = async (id: number) => {
	await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate network delay

	return [...Array(5)].map((_, index) => ({
		id: index,
		name: 'John Doe',
		review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum porro ullam vitae officia doloribus consequuntur praesentium id? Commodi, sed quidem.',
	}));
};

const Reviews: React.FC<ReviewsProps> = async ({ id }) => {
	const reviews = await fetchReviews(id);

	return (
		<section id='review' className='py-20'>
			<div className='mb-8 text-center'>
				<h2 className='mb-2 text-3xl font-bold text-eventick-950'>User Reviews</h2>
				<p className='text-balance text-zinc-600'>People love our events. Here&apos;s what they have to say.</p>
			</div>

			<div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
				{reviews?.map((review: Review) => <SingleReview key={review.id} review={review} />)}
			</div>
		</section>
	);
};

export default Reviews;
