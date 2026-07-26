function BlogDetails() {

    const blogs = [
        { id: 1, title: "React Basics", author: "Ashish" },
        { id: 2, title: "Java ES6", author: "OpenAI" }
    ];

    return (
        <div>
            <h2>Blog Details</h2>

            <ul>
                {blogs.map(blog => (
                    <li key={blog.id}>
                        {blog.title} - {blog.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogDetails;