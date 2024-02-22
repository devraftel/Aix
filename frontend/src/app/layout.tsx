import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'AIX GPT',
	description: 'Gen AI Powered Quizzes and Feedback Assistant',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body
					className={cn(
						'min-h-screen font-sans antialiased grainy bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100',
						inter.className
					)}
				>
					<Navbar />
					<main className='flex flex-col w-full flex-1 items-center justify-center mx-auto max-w-7xl'>
						{children}
					</main>
				</body>
			</html>
		</ClerkProvider>
	);
}
