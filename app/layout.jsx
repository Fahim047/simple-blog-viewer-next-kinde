import { Navbar } from '@/components/Navbar';
import { AuthProvider } from '@/providers/AuthProvider';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata = {
	title: 'Demo Blog',
	description: 'A simple blog viewer app',
};

export default function RootLayout({ children }) {
	return (
		<AuthProvider>
			<html lang="en">
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<Navbar />
					<main className="mt-20 container mx-auto px-4">{children}</main>
					<footer className="text-center my-6 py-4">
						Made with ❤️ by Fahimul Islam.
					</footer>
				</body>
			</html>
		</AuthProvider>
	);
}
