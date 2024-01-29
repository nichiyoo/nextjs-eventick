'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import * as React from 'react';

import { useDebounce } from '@/hooks/useDebounce';

interface FilterProps {
	//
}

interface Filter {
	search: string;
	place: string;
	time: string;
}

const Filter: React.FC<FilterProps> = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const [filter, setFilter] = React.useState<Filter>({
		search: searchParams.get('search') ?? '',
		place: searchParams.get('place') ?? '',
		time: searchParams.get('time') ?? '',
	});

	const debounceFilter = useDebounce(filter, 300);

	const setParams = React.useCallback(
		(search: string, place: string, time: string) => {
			const params = new URLSearchParams();

			params.append('search', search);
			params.append('place', place);
			params.append('time', time);

			router.push(`${pathname}?${params.toString()}`, {
				scroll: false,
			});
		},
		[pathname, router]
	);

	React.useEffect(() => {
		const { search, place, time } = debounceFilter;
		setParams(search, place, time);
	}, [debounceFilter, pathname, setParams]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFilter((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className='bg-eventick-950 shadow-eventick-950/50 relative -mt-20 mb-20 p-14 shadow-2xl xl:rounded-2xl'>
			<div className='grid grid-cols-1 items-center gap-10 lg:grid-cols-3'>
				<div>
					<label htmlFor='search' className='text-eventick-100/50 mb-6 text-sm'>
						Search Event
					</label>
					<input
						type='text'
						name='search'
						id='search'
						value={filter.search}
						placeholder='Event Name'
						onChange={handleChange}
						className='border-eventick-100/30 focus:border-eventick-100 w-full border-b-2 bg-transparent py-1 text-xl font-medium text-white focus:outline-none'
					/>
				</div>
				<div>
					<label htmlFor='place' className='text-eventick-100/50 mb-6 text-sm'>
						Place
					</label>
					<input
						type='text'
						name='place'
						id='place'
						value={filter.place}
						placeholder='Place'
						onChange={handleChange}
						className='border-eventick-100/30 focus:border-eventick-100 w-full border-b-2 bg-transparent py-1 text-xl font-medium text-white focus:outline-none'
					/>
				</div>
				<div>
					<label htmlFor='time' className='text-eventick-100/50 mb-6 text-sm'>
						Time
					</label>
					<input
						type='date'
						name='time'
						id='time'
						value={filter.time}
						onChange={handleChange}
						className='form-date border-eventick-100/30 focus:border-eventick-100 w-full border-b-2 bg-transparent py-1 text-xl font-medium text-white focus:outline-none'
					/>
				</div>
			</div>
		</div>
	);
};

export default Filter;
