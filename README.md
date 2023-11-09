# Book API

This is a RESTful API for managing books. It allows you to perform CRUD operations (Create, Read, Update, Delete) on book resources.

You can access the live server here: 
```bash
https://api-demo-no9l.onrender.com/books/getall

```

## API Endpoints

-  GET `/books/getall` : Retrieve a list of all books.
-  GET `/books/getBook/:id` : Retrieve a specific book by its ID.
-  POST `/books/createBook` : Create a new book.
-  PUT `/books/updateBook/:id` : Update an existing book.
-  DELETE `/books/deleteBook/:id` : Delete a book.

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   

2. Install the dependencies:

   ```bash
   npm install
   

3. Set up the environment variables:
   
   Create a .env file in the root directory of the project.

   Add the following lines to the .env file:

    ```bash
   MONGO_URI = "Your_MongoDB_URL"
    

4. Start the server:

   ```bash
    npm server
   

5. The API will be accessible at http://localhost:3000.


## API Documentation

 1. GET `/books/getall` : Retrieve a list of all books.

    Response:
    ```bash
    [
      {
        "id": "1",
        "title": "Book 1",
        "author": "Author 1",
        "summary": "summary 1"
      },
      {
        "id": "2",
        "title": "Book 2",
        "author": "Author 2",
        "summary": "summary 2"
      }
    ]
    ```

    
 2. GET `/books/getBook/:id` : Retrieve a specific book by its ID.

    Parameters:

    id (string): The ID of the book.
     
    Response:
    ```bash
      {
        "id": "1",
        "title": "Book 1",
        "author": "Author 1",
        "summary": "summary 1"
      }
    ```

    
3. POST `/books/createBook` : Create a new book.

   Request Body:
   ```bash
      {
        "title": "New Book",
        "author": "New Author",
        "summary": "New summary"
      }
    ```

   Response:
    ```bash
      {
        "id": "3",
        "title": "New Book",
        "author": "New Author",
        "summary": "New summary"
      }
    ```

    
 4. PUT `/books/updateBook/:id` : Update an existing book.
    
    Parameters:

    id (string): The ID of the book.

    Request Body:
    ```bash
      {
        "title": "Updated Book",
        "author": "Updated Author",
        "summary": "Updated summary"
      }
    ```

    Response:
    ```bash
      {
        "id": "4",
        "title": "Updated Book",
        "author": "Updated Author",
        "summary": "Updated summary"
      }
    ```


 5. DELETE `/books/deleteBook/:id` : Delete a book.

    Parameters:

    id (string): The ID of the book.

    Response:
    ```bash
      {
        "message": "Book deleted"
      }
    ```


## Assumptions and Decisions
  
  #### During the development process, the following assumptions and decisions were made:

  - The book resources are stored in a MongoDB database.
  - Each book has a unique ID assigned to it.
  - The API follows RESTful conventions for CRUD operations.
  - Error handling middleware is implemented to handle and format error responses.
  - The API uses environment variables for configuration, such as the MongoDB connection URL .
