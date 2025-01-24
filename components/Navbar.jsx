import {
	LoginLink,
	LogoutLink,
	RegisterLink,
} from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import Logo from './Logo';

export async function Navbar() {
	const { isAuthenticated, getUser } = getKindeServerSession();
	const user = await getUser();
	const isUserAuthenticated = await isAuthenticated();

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-sm">
			<div className="container mx-auto flex justify-between items-center px-4 py-3">
				<Link href="/" className="flex items-center space-x-2">
					<Logo />
				</Link>

				<div className="flex items-center space-x-4">
					<Link href="/profile" className="group">
						Profile
					</Link>

					{isUserAuthenticated ? (
						<LogoutLink className="px-3 py-2 bg-white/80 text-black rounded-md">
							Logout
						</LogoutLink>
					) : (
						<>
							<LoginLink className="px-3 py-2 bg-transparent border rounded-md">
								Login
							</LoginLink>
							<RegisterLink className="px-3 py-2 bg-white/80 text-black rounded-md">
								Sign Up
							</RegisterLink>
						</>
					)}
				</div>
			</div>
		</nav>
	);
}
