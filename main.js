
let books = []


if (localStorage.getItem("books")) {
    books = JSON.parse(localStorage.getItem("books"))
    displayBookList();

}


bookForm.addEventListener('submit', (event) => {

    event.preventDefault()

    const bookNameInput = bookName.value
    const bookAuthorInput = author.value
    const bookCategoryInput = category.value


    // add books to array

    if (bookNameInput && bookAuthorInput && bookCategoryInput) {

        const editIndex = editStatus.value


        if (editIndex == "") {

            books.push({
                bookName: bookNameInput, author: bookAuthorInput, category: bookCategoryInput
            })

        }

        else {

            books[editIndex] = {
                bookName: bookNameInput, author: bookAuthorInput, category: bookCategoryInput
            }

        }

    }

    else {

        alert("Please fill the form completely")

    }


    bookForm.reset()

    editStatus.value = ""

    localStorage.setItem("books", JSON.stringify(books))

    displayBookList();

})


// display books array as table

function displayBookList() {

    tableBody.innerHTML = ""

    books.forEach((item, index) => {

        tableBody.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${item.bookName}</td>

            <td>${item.author}</td>

            <td>${item.category}</td>

            <td>

                <button
                    onclick="updateBook(${index})"class="btn btn-warning">Update</button>

                <button
                    onclick="deleteBook(${index})"class="btn btn-danger">Delete</button>

            </td>

        </tr>

        `

    })

}


// edit book

function updateBook(bookIndex) {

    const bookDetails = books[bookIndex]

    bookName.value = bookDetails.bookName

    author.value = bookDetails.author

    category.value = bookDetails.category

    editStatus.value = bookIndex

}


// delete book

function deleteBook(bookIndex) {

    if (confirm("Are you sure, you want to delete the data")) {

        books.splice(bookIndex, 1)

        localStorage.setItem("books", JSON.stringify(books))

        displayBookList()

    }

}

