import Image from 'next/image';

import type { Review } from '@/lib/types';

interface ReviewsProps {
	review: Review;
}

const SingleReview: React.FC<ReviewsProps> = ({ review }) => {
	return (
		<div className='flex items-start'>
			<div className='flex-0 mr-4 flex min-w-32 flex-col items-center justify-center space-y-2 whitespace-nowrap'>
				<div className='block h-12 w-12 rounded-full bg-gray-200'>
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
		</div>
	);
};

export default SingleReview;
