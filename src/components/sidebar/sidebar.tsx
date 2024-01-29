import { readFileSync } from 'fs';
import * as React from 'react';

import { Blog } from '@/lib/types';

import Card from '../blog/card/card';

interface SidebarProps {}

const fetchBlogs = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const res = JSON.parse(readFileSync('public/dummy.json', 'utf-8'));
	return res;
};

const Sidebar: React.FC<SidebarProps> = async ({}) => {
	const { blogs } = await fetchBlogs();
	const random = blogs.sort(() => 0.5 - Math.random()).slice(0, 2);

	return (
		<div className='flex flex-col space-y-8'>
			<div>
				<h6 className='text-xl font-bold text-eventick-950'>Latest Blog</h6>
				<p className='text-zinc-600'>
					Read our latest Blogs, and get the latest information about our platform.
				</p>
			</div>
			{random?.map((blog: Blog) => <Card key={blog.id} blog={blog} />)}
		</div>
	);
};

export default Sidebar;
