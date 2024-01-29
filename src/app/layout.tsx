import './globals.css';

import type { Metadata } from 'next';

import { inter } from '@/lib/fonts';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(inter.className, 'bg-white leading-relaxed text-zinc-900 antialiased')}>
				{children}
			</body>
		</html>
	);
}
