import BlogPostList from '@/components/BlogPostList';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

async function fetchPosts() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	return res.json();
}

export default async function Home() {
	const posts = await fetchPosts();
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	return (
		<div className="max-w-4xl mx-auto p-6">
			{/* Greeting Section */}
			<header className="text-center mb-12">
				{user ? (
					<p className="text-lg text-gray-600">
						Hello,{' '}
						<span className="font-bold text-blue-600">
							{user.given_name || user.email}
						</span>
					</p>
				) : (
					<p className="text-lg text-gray-600">
						Welcome! Discover stories that inspire and inform.
					</p>
				)}
				<h1 className="text-5xl text-orange-500 font-extrabold mt-2">
					Explore Top Blog Posts
				</h1>
				<p className="text-gray-600 mt-2 text-xl">
					Dive into a curated selection of insightful articles.
				</p>
			</header>
			{/* Blog Post List */}
			<BlogPostList posts={posts} />
		</div>
	);
}
