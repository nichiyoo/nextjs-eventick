import Link from 'next/link';
import * as React from 'react';

import Blogs from '@/components/blog/blogs';
import LoadingBlogs from '@/components/blog/loading';
import Brands from '@/components/brands';
import Cta from '@/components/cta';
import Events from '@/components/event/events';
import LoadingEvents from '@/components/event/loading';
import Filter from '@/components/filter';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import { Button } from '@/components/ui/button';

interface HomePageProps {
	searchParams: Record<string, string | undefined>;
}

const HomePage: React.FC<HomePageProps> = async ({ searchParams }) => {
	const search = searchParams.search ?? '';
	const place = searchParams.place ?? '';

	return (
		<main>
			<Hero />

			<div className='mx-auto w-full max-w-screen-xl xl:px-4'>
				<Filter />
			</div>

			<div className='mx-auto w-full max-w-screen-xl px-4'>
				<React.Suspense fallback={<LoadingEvents />} key={search + place}>
					<>
						<Events search={search} place={place} />
						<Link href={`/events?search=${search}&place=${place}`} className='flex justify-center'>
							<Button size='lg'>Load More</Button>
						</Link>
					</>
				</React.Suspense>
			</div>

			<Cta />

			<div className='mx-auto w-full max-w-screen-xl px-4'>
				<Brands />
				<React.Suspense fallback={<LoadingBlogs />} key={search + place}>
					<Blogs />
				</React.Suspense>
			</div>

			<Footer />
		</main>
	);
};

export default HomePage;
