import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
	const { isAuthenticated, getUser } = getKindeServerSession();
	const isUserAuthenticated = await isAuthenticated();
	if (!isUserAuthenticated) {
		redirect('/api/auth/login');
	}
	const user = await getUser();
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold">
				Welcome to your profile,{' '}
				<span className="text-orange-500">
					{user.given_name || user.email}!
				</span>
			</h1>
			<p>This is a protected page that only authenticated users can access.</p>
		</div>
	);
};

export default ProfilePage;
