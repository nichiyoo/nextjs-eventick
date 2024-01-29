import { readdirSync } from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface FooterProps {
	//
}

const plan = [
	{
		label: 'Create and Set Up',
		href: '/create-and-set-up',
	},
	{
		label: 'Sell Tickets',
		href: '/sell-tickets',
	},
	{
		label: 'Online RSVP',
		href: '/online-rsvp',
	},
	{
		label: 'Online Events',
		href: '/online-events',
	},
];

const nav = [
	{
		label: 'About Us',
		href: '/about-us',
	},
	{
		label: 'Press',
		href: '/press',
	},
	{
		label: 'Contact Us',
		href: '/contact-us',
	},
	{
		label: 'Help Center',
		href: '/help-center',
	},
	{
		label: 'How it Works',
		href: '/how-it-works',
	},
	{
		label: 'Privacy',
		href: '/privacy',
	},
	{
		label: 'Terms',
		href: '/terms',
	},
];

const Footer: React.FC<FooterProps> = () => {
	const socials = readdirSync('public/socials');

	return (
		<div className='bg-eventick-950 mt-20'>
			<div className='mx-auto w-full max-w-screen-xl px-4 py-16'>
				<div className='grid grid-cols-2 items-start gap-8 lg:grid-cols-6'>
					<div className='col-span-2 flex flex-col items-start space-y-4'>
						<Link href='/' className='flex-0'>
							<Image
								src='/logo.svg'
								alt='Logo'
								width={120}
								height={120}
								className='h-full max-h-9 w-full cursor-pointer'
							/>
						</Link>
						<p className='text-eventick-200 text-sm'>
							Eventick is a global self-service ticketing platform for live experiences that allows anyone
							to create, share, find and attend events that fuel their passions and enrich their lives.
						</p>
						<div className='flex items-center space-x-2'>
							{socials.map((social) => (
								<Image
									key={social}
									src={`/socials/${social}`}
									alt={social}
									width={24}
									height={24}
									className='h-full max-h-9 w-full cursor-pointer'
								/>
							))}
						</div>
					</div>
					<div>
						<h6 className='mb-4 font-bold text-white'>Plan Events</h6>
						<ul className='flex flex-col space-y-2 text-sm'>
							{plan.map((item) => (
								<Link key={item.href} href={item.href}>
									<span className='text-eventick-200 hover:text-white'>{item.label}</span>
								</Link>
							))}
						</ul>
					</div>
					<div>
						<h6 className='mb-4 font-bold text-white'>Eventick</h6>
						<ul className='flex flex-col space-y-2 text-sm'>
							{nav.map((item) => (
								<Link key={item.href} href={item.href}>
									<span className='text-eventick-200 hover:text-white'>{item.label}</span>
								</Link>
							))}
						</ul>
					</div>
					<div className='col-span-2 flex flex-col items-start space-y-4'>
						<h6 className='mb-4 font-bold text-white'>Stay in the loop</h6>
						<p className='text-eventick-200 text-sm'>
							Join our mailing list to stay in the loop with our newest for Event and concert
						</p>
						<div className='relative w-full'>
							<input
								type='text'
								placeholder='Enter your email'
								className='w-full rounded-full border-none bg-white px-4 py-4 text-sm'
							/>
							<button className='absolute right-1 top-1/2 -translate-y-1/2 transform rounded-full bg-pink-600 px-4 py-3 text-sm text-white'>
								Subscribe
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className='border-eventick-100/30 flex items-center justify-center border-t py-6'>
				<span className='text-sm text-white/50'>Copyright © 2022 Avi Yansah</span>
			</div>
		</div>
	);
};

export default Footer;
