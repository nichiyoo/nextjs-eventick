import { readFileSync } from 'fs';
import * as React from 'react';

import Card from '@/components/blog/card/card';
import { Button } from '@/components/ui/button';
import type { Blog } from '@/lib/types';

interface BlogsProps {
	//
}

const fetchBlogs = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const res = JSON.parse(readFileSync(process.cwd() + '/public/dummy.json', 'utf-8'));
	return res;
};

const Blogs: React.FC<BlogsProps> = async ({}) => {
	const { blogs } = await fetchBlogs();

	return (
		<>
			<div className='mb-8 text-center'>
				<h2 className='mb-4 text-4xl font-bold text-eventick-950'>Blogs</h2>
				<p className='text-balance text-zinc-600'>
					Read our latest Blogs, and get the latest information about our platform
					<br />
					and the latest news about our platform.
				</p>
			</div>

			<div className='grid grid-cols-2 gap-8 py-20 lg:grid-cols-3'>
				{blogs.map((blog: Blog) => (
					<Card key={blog.id} blog={blog} />
				))}
				{blogs.length === 0 && (
					<div className='col-span-full flex justify-center'>
						<p className='text-gray-500'>No events found</p>
					</div>
				)}
			</div>

			<div className='flex justify-center'>
				<Button size='lg'>Load More</Button>
			</div>
		</>
	);
};

export default Blogs;
