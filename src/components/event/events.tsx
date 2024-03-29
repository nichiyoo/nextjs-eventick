import { readFileSync } from 'fs';
import Link from 'next/link';
import * as React from 'react';

import Card from '@/components/event/card/card';
import type { Event } from '@/lib/types';

import { Button } from '../ui/button';

interface EventsProps {
	search?: string;
	place?: string;
}

const fetchEvents = async (search: string, place: string) => {
	await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate network delay
	const res = JSON.parse(readFileSync(process.cwd() + '/public/dummy.json', 'utf-8'));
	return res;
};

const Events: React.FC<EventsProps> = async ({ search = '', place = '' }) => {
	const { events } = await fetchEvents(search, place);

	const filtered = events.filter((event: Event) => {
		if (search) return event.name.toLowerCase().includes(search.toLowerCase());
		if (place) return event.place.toLowerCase().includes(place.toLowerCase());
		return true;
	});

	return (
		<>
			<div className='item-center flex justify-between'>
				<h2 className='text-4xl font-bold text-eventick-950'>Upcoming Events</h2>
				<div className='flex items-center space-x-4'>
					<Link href='/admin/events/create'>
						<Button size='lg' variant='secondary'>
							Create Event
						</Button>
					</Link>
					<Link href='/admin/promotions/create'>
						<Button size='lg' variant='secondary'>
							Create Promotion
						</Button>
					</Link>
				</div>
			</div>

			<div className='grid grid-cols-2 gap-8 py-20 lg:grid-cols-3'>
				{filtered.map((event: Event) => (
					<Card key={event.id} event={event} />
				))}
				{filtered.length === 0 && (
					<div className='col-span-full flex justify-center'>
						<p className='text-gray-500'>No events found</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Events;
