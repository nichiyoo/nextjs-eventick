import * as React from 'react';

import Events from '@/components/event/events';
import LoadingEvents from '@/components/event/loading';

interface EventPageProps {
	searchParams: Record<string, string | undefined>;
}

const EventPage: React.FC<EventPageProps> = ({ searchParams }) => {
	const search = searchParams.search ?? '';
	const place = searchParams.place ?? '';

	return (
		<div className='mx-auto w-full max-w-screen-xl px-4'>
			<React.Suspense fallback={<LoadingEvents />} key={search + place}>
				<Events />
			</React.Suspense>
		</div>
	);
};

export default EventPage;
