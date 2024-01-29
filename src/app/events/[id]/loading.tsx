import { Skeleton } from '@/components/ui/skeleton';
import * as React from 'react';

/* 
<section id='event'>
				<div className='relative mb-20 overflow-hidden rounded-2xl shadow-2xl shadow-eventick-900/30'>
					<Image
						alt='Event Picture'
						src={event.image}
						width={900}
						height={900}
						className='aspect-video h-full w-full object-cover'
					/>
				</div>

				<div className='grid grid-cols-1 items-start gap-10 xl:grid-cols-3'>
					<div className='flex flex-col items-start space-y-6 xl:col-span-2'>
						<span className='rounded-full bg-pink-600 px-4 py-2 font-bold text-white'>
							{event.price ? formatCurrency(event.price) : 'Free'}
						</span>
						<h1 className='mb-4 text-balance text-5xl font-bold text-indigo-950'>{event.name}</h1>
						<p className='text-zinc-600'>
							{event.description}
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus ullam beatae,
							fuga qui quibusdam maiores! Amet voluptate facere, aliquam tempore mollitia ipsam
							<br />
							<br />
							dolore suscipit voluptas delectus tempora doloribus veniam maxime fuga iusto ex sint fugiat
							rem molestiae reiciendis. Praesentium dolores fugit totam iste quis id, harum iure
							voluptates a.
						</p>
					</div>

					<div className='rounded-2xl border border-gray-300 bg-white p-8'>
						<EventForm event={event} />
					</div>
				</div>

				<React.Suspense fallback={<ReviewsLoading />}>
					<Reviews id={id} />
				</React.Suspense>
			</section>
*/

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
