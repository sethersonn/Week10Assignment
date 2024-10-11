/*Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
*/

/*Library Book Checkout App:
Create a table to display a list of books with columns for Title, Author, Genre, Date Checkout Out, and Due Date. 
The form can allow users to add a new book.*/

//creating fullName variable for later
let fullName = "";

//Alert that lets someone know they registered for a library card
document.getElementById("add").addEventListener("click", () => {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    fullName = `${firstName} ${lastName}`
    alert(`Thank you for signing up ${firstName} ${lastName}, you card will be printed shortly.`)
})

let id = 0;

//creating a table based on what I input
document.getElementById("checkout").addEventListener("click", () => {
    let createdDate = new Date();
    let table = document.getElementById("list");
    let row = table.insertRow(1);
    row.setAttribute("id", `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("new-title").value;
    row.insertCell(1).innerHTML = document.getElementById("new-author-name").value;
    row.insertCell(2).innerHTML = document.getElementById("new-genre-name").value;
    row.insertCell(3).innerHTML = document.getElementById("new-checkout-date").value;
    row.insertCell(4).innerHTML = document.getElementById("new-due-date").value;
    row.insertCell(5).innerHTML = fullName;

    //create delete button and append it to the last cell
    const deleteButton = createDeleteButton(id);
    row.insertCell(6).appendChild(deleteButton);

    //increment id for the next row
    id++;
})

//creating a delete button
function createDeleteButton(id) {
    let btn = document.createElement("button");
    btn.className = "btn btn-danger";
    btn.innerHTML = "Return Book";
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}