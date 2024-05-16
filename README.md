# Booklist
<b>Implement API for a simple book reservation system.</br></br>
API provides the following
possibilities:</b></br>
● CRUD API for the Book entity</br>
○ Book entity contains the following properties (‘*’ means required): id*,
title*, author (some other properties if you want)</br>
● POST endpoint to reserve a book</br>
○ Book id and comment should be passed as a parameter</br>
○ decide by you own where to store reserved status and comment for the
given book (history of statuses is not needed)</br>
○ if book is already reserved endpoint should respond with some error
status</br>
● POST endpoint to remove reserved status for a book</br>
○ Book id should be passed as a parameter</br>
● GET endpoint to get list of reserved books with reservation comment</br>
● GET endpoint to get list of available (not reserved) books</br></br>
<b>Technical requirements:</b></br>
● use .NET 5.0 or newer version</br>
● use any database on your choice, no installation should be needed: use
embedded database or Docker</br>
● Docker is the preferred way to run the API (not required)</br>
● Swagger UI should be included to use the API (required)</br>
● No authorization needed</br></br>
<b>Additional task (not required):</b></br>
● Save the history of status changing</br>
● Provide endpoint to get status history for the given book</br>
Description above gives a general idea for the task. If some requirement is missing you
can implement it as you want providing comments with your final result if needed.
