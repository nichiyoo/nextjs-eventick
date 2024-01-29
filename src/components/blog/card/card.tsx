import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

import type { Blog } from '@/lib/types';

interface CardProps {
	blog: Blog;
}

const Card: React.FC<CardProps> = ({ blog }) => {
	const date = new Date(blog.published);
	const month = date.toLocaleString('default', { month: 'short' });
	const day = date.toLocaleString('default', { day: 'numeric' });

	return (
		<div className='flex flex-col space-y-6'>
			<Image
				src={blog.image}
				alt='Blog Image'
				width={500}
				height={500}
				className='aspect-video rounded-2xl object-cover'
			/>
			<Link href={`/blogs/${blog.id}`}>
				<h5 className='text-eventick-950 line-clamp-2 font-bold decoration-2 underline-offset-4 hover:underline'>
					{blog.title}
				</h5>
			</Link>
			<p className='line-clamp-3 text-zinc-600'>{blog.body}</p>
			<span className='text-zinc-400'>
				{day} {month} - {blog.author}
			</span>
		</div>
	);
};

export default Card;
