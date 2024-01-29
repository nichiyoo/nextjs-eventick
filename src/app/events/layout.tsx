import { readFileSync } from 'fs';
import { redirect } from 'next/navigation';
import * as React from 'react';

import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/navbar';
import { Event } from '@/lib/types';

interface LayoutProps {
	children: React.ReactNode;
	params: {
		id: string;
	};
}

const Layout: React.FC<LayoutProps> = async ({ children }) => {
	return (
		<main>
			<div className='bg-eventick-950'>
				<div className='mx-auto w-full max-w-screen-xl px-4'>
					<Navbar />
				</div>
			</div>
			<div className='mx-auto min-h-[70vh] w-full max-w-screen-xl px-4 py-20'>{children}</div>
			<Footer />
		</main>
	);
};

export default Layout;
