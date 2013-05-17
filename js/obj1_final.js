var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
var search = function (lastName)
{
    var contactsLength = contacts.length;
        for (var i = 0; i < contactsLength; i++) {
            if (lastName.toLowerCase() === contacts[i].lastName.toLowerCase())
            {
                printPerson(contacts[i])
            }
	}
    
}

//search("JoneS")

var add = function (firstName, lastName, email, telephone)
{   
    contact = new Object()
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.email = email;
    contact.phoneNumber = telephone;  
    return contact
}



jane = add ("nume", "nume2", "mail", "telefonnn")
contacts[2]=jane
list()