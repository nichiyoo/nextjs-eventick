import * as React from 'react';

import PromoForm from '@/components/promo-form';
import Loading from '@/components/sidebar/loading';
import Sidebar from '@/components/sidebar/sidebar';

interface CreateEventPageProps {
	//
}

const CreateEventPage: React.FC<CreateEventPageProps> = ({}) => {
	return (
		<>
			<div className='mb-8'>
				<h2 className='mb-4 text-4xl font-bold text-eventick-950'>Create New Promo</h2>
				<p className='text-balance text-zinc-600'>
					Create a new promo for your event. You can create multiple promos for the same event.
				</p>
			</div>

			<div className='grid grid-cols-1 items-start gap-10 xl:grid-cols-4'>
				<div className='rounded-2xl border border-gray-300 bg-white p-8 xl:col-span-3'>
					<PromoForm />
				</div>
				<div className='hidden xl:block'>
					<React.Suspense fallback={<Loading />}>
						<Sidebar />
					</React.Suspense>
				</div>
			</div>
		</>
	);
};

export default CreateEventPage;
