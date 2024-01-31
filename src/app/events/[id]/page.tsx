import { readFileSync } from 'fs';
import Image from 'next/image';
import * as React from 'react';

import CheckoutForm from '@/components/checkout-form';
import ReviewsLoading from '@/components/review/loading';
import Reviews from '@/components/review/reviews';
import type { Event } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface EventDetailPageProps {
	params: {
		id: string;
	};
}

const fetchEvent = async (id: number) => {
	await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate network delay

	const res = JSON.parse(readFileSync(process.cwd() + '/public/dummy.json', 'utf-8'));
	const event = res.events.find((event: Event) => event.id === id);

	return event;
};

const EventDetailPage: React.FC<EventDetailPageProps> = async ({ params }) => {
	const id = Number.parseInt(params.id) ?? 1;
	const event = await fetchEvent(id);

	const formatDateTime = (datetime: string) => {
		const date = new Date(datetime);
		return date.toLocaleDateString('en-US', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	return (
		<>
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

						<div className='flex flex-col space-y-2'>
							<div className='grid grid-cols-4'>
								<div className='col-span-1'>
									<h3 className='font-bold text-indigo-950'>Date</h3>
								</div>
								<div className='col-span-3'>
									<p className='text-zinc-600'>{formatDateTime(event.datetime)}</p>
								</div>
							</div>

							<div className='grid grid-cols-4'>
								<div className='col-span-1'>
									<h3 className='font-bold text-indigo-950'>Place</h3>
								</div>
								<div className='col-span-3'>
									<p className='text-zinc-600'>{event.place}</p>
								</div>
							</div>

							<div className='grid grid-cols-4'>
								<div className='col-span-1'>
									<h3 className='font-bold text-indigo-950'>Seat</h3>
								</div>
								<div className='col-span-3'>
									<p className='text-zinc-600'>{event.seats}</p>
								</div>
							</div>
						</div>
					</div>

					<div className='rounded-2xl border border-gray-300 bg-white p-8'>
						<CheckoutForm event={event} />
					</div>
				</div>

				<React.Suspense fallback={<ReviewsLoading />}>
					<Reviews id={id} />
				</React.Suspense>
			</section>
		</>
	);
};

export default EventDetailPage;
