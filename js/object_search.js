var friends =new Object ();

friends.kitty=
{
    firstName: "Kitty",
    lastName: "Tigare",
    number: "898989089",
    address: ["WOnnderland", "2"]
}

friends.steve=
{
    firstName: "Steve",
    lastName: "Jobs",
    number: "123456789",
    address: ["Apple", "1"]
}

friends.bill=
{
    firstName: "Bill",
    lastName: "Greedy",
    number: "789456123",
    address: ["Greedy town", "78"]
}

var list= function(object)
{
    for (var pozition in object)
        console.log(pozition)
}

var search = function(name)
{
    for (var pozition in friends)
    {
        if (friends[pozition].firstName === name )
        {
            return(friends[pozition])
        }
    }
}


list(friends)
search("Steve")