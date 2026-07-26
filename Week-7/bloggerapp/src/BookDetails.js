function BookDetails() {

    const books = [
        { id: 1, name: "Clean Code", author: "Robert C. Martin" },
        { id: 2, name: "Effective Java", author: "Joshua Bloch" }
    ];

    return (
        <div>
            <h2>Book Details</h2>

            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        {book.name} - {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookDetails;