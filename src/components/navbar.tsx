'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { links } from '@/lib/constant';
import { cn } from '@/lib/utils';

interface NavbarProps {
	//
}

const Navbar: React.FC<NavbarProps> = () => {
	const pathname = usePathname();

	return (
		<nav className='flex items-center justify-between py-8'>
			<Link href='/' className='flex-0'>
				<Image
					src='/logo.svg'
					alt='Logo'
					width={120}
					height={120}
					className='h-full max-h-9 w-full cursor-pointer'
				/>
			</Link>

			<div className='flex items-center space-x-6'>
				<ul className='hidden items-center justify-end space-x-6 md:flex'>
					{links.map((link) => (
						<li key={link.name}>
							<Link href={link.href} className={cn('text-white', pathname === link.href && 'font-bold')}>
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				<Link href='/login' className='text-white'>
					<Button variant='outline' className='px-6'>
						Login
					</Button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
