import Link from 'next/link';

async function fetchPost(id) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return res.json();
}

const BlogDetails = async ({ params }) => {
	const post = await fetchPost(params?.id);

	return (
		<div className="max-w-4xl mx-auto w-full p-8">
			{/* Back Link */}
			<div className="mb-8">
				<Link
					href="/"
					className="text-blue-600 hover:text-blue-800 font-semibold text-lg flex items-center"
				>
					&larr; Back to Home
				</Link>
			</div>
			{/* Blog Title */}
			<h1 className="text-4xl font-extrabold mb-6">{post.title}</h1>
			{/* Blog Content */}
			<p className="text-lg text-gray-600 leading-relaxed">{post.body}</p>
		</div>
	);
};
export default BlogDetails;
