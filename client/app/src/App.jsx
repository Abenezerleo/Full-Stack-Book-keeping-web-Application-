import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [releaseYear, setReleaseYear] = useState('')
  const [newTitle, setNewTitle] = useState('')

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/books/')
      const data = await response.json()
      setBooks(data)
    } catch (error) {
      console.error('Error fetching books:', error)
    }
  }

  const addBook = async () => {
    const bookData = {
      title,
      release_year: releaseYear,
    }

    try {
      const response = await fetch(
        'http://localhost:8000/api/books/create/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookData),
        }
      )

      const data = await response.json()
      setBooks((prev) => [...prev, data])

      setTitle('')
      setReleaseYear('')
    } catch (error) {
      console.error('Error adding book:', error)
    }
  }

  const updatetitle = async (pk, release_year) => {
    const bookData = {
      title: newTitle,
      release_year,
    }

    try {
      const response = await fetch(
        `http://localhost:8000/api/books/${pk}/`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(bookData),
        }
      )

      const data = await response.json()

      setBooks((prev) =>
        prev.map((book) => {
          if (book.id === pk) {
            return data
          } else {
            return book
          }
        })
      )

      setNewTitle('')
    } catch (error) {
      console.error('Error updating book:', error)
    }
  }

  const deleteBook = async (pk) => {
    try {
      await fetch(`http://localhost:8000/api/books/${pk}/`, {
        method: 'DELETE',
      })

      setBooks((prev) => prev.filter((book) => book.id !== pk))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="app-container">

      {/* HEADER */}
      <header className="header">
        <h1>📚 Book Keeping App</h1>
        <p>Manage your books easily and efficiently</p>
      </header>

      {/* ADD BOOK SECTION */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter book name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Release year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        />

        <button className="add-btn" onClick={addBook}>
          Add Book
        </button>
      </div>

      {/* BOOK TABLE */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Release Year</th>
              <th>Update Title</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>

                <td>{book.release_year}</td>

                <td>
                  <input
                    type="text"
                    placeholder="New title"
                    onChange={(e) => setNewTitle(e.target.value)}
                  />
                </td>

                <td className="button-group">
                  <button
                    className="update-btn"
                    onClick={() =>
                      updatetitle(book.id, book.release_year)
                    }
                  >
                    Change Title
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteBook(book.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          Made with ❤️ by <strong>Abenezer Elias</strong>
        </p>

        <a
          href="mailto:abenezere2021@gmail.com"
          className="hire-btn"
        >
          Hire Me
        </a>
      </footer>
    </div>
  )
}

export default App