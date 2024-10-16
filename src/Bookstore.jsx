import Book from "./book";


export default function Bookstore({books}) {
    return(
        <div>
            <h1>Book: {books.length}</h1>
            {

                books.map(boi => <Book Book={boi}></Book> )
            }
        </div>
    )
}