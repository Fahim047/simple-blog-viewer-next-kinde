import Link from 'next/link';

const BlogPostList = ({ posts }) => {
	return (
		<section>
			<ul className="space-y-6">
				{posts.slice(0, 10).map((post) => (
					<li key={post.id}>
						<Link
							href={`/blog/${post.id}`}
							className="block p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl hover:border-orange-500 transition-all duration-300"
						>
							<h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
							<p className="text-lg text-gray-600">
								Click to dive deeper into this post!
							</p>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};

export default BlogPostList;
