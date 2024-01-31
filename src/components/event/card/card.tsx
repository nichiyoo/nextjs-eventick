import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import type { Event } from '@/lib/types';

interface CardProps {
	event: Event;
}

const Card: React.FC<CardProps> = ({ event }) => {
	const date = new Date(event.datetime);
	const month = date.toLocaleString('default', { month: 'short' });
	const day = date.toLocaleString('default', { day: 'numeric' });

	return (
		<Link href={`/events/${event.id}`}>
			<div className='overflow-hidden rounded-2xl bg-white shadow-2xl shadow-eventick-950/30'>
				<div className='relative aspect-video'>
					{event.image && (
						<Image
							src={event.image}
							alt='Picture of the author'
							width={500}
							height={500}
							className='h-full w-full object-cover'
						/>
					)}
					{event.price === 0 && (
						<span className='absolute right-0 top-0 m-4 rounded-full bg-pink-500 px-3 py-1 text-sm font-medium text-white'>
							free
						</span>
					)}
				</div>
				<div className='p-6'>
					<div className='flex items-start space-x-6'>
						<div className='flex flex-col items-center'>
							<span className='text-sm font-bold uppercase text-eventick-900'>{month}</span>
							<span className='text-2xl font-bold'>{day}</span>
						</div>
						<div className='flex flex-col space-y-2'>
							<h5 className='line-clamp-2 text-sm font-bold'>{event.name}</h5>
							<p className='line-clamp-2 text-sm text-zinc-600'>{event.description}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Card;
