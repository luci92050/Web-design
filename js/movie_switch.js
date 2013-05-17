var getReview = function (moviename) 
{
    console.log(moviename)
    switch(moviename.toLowerCase())
    {
        case "matrix": 
            return movieCollection.Matrix.review
            console.log("1")
            break;
        
        default:
            console.log( "2")
    }


};


var movieCollection = new Object()

movieCollection.Matrix = 
{
    name: "Matrix",
    review: "good trip out"
}

movieCollection.Princess_Bride = 
{
    name: "Princess Bride",
    review: "awesome date night movie"
}

movieCollection.Welcome_to_America = 
{
    name: "Welcome to America",
    review: "Amjad's favorite"
}

movieCollection.Remember_the_Titans = 
{
    name: "Remember the Titans",
    review: "love the sports"
}

movieCollection.Why_do_I_look = 
{
    name: "Why do I look like I'm 12?",
    review: "he Ryan and Zach story"
}

movieCollection.Fighting_Kangaroos = 
{
    name: "Fighting Kangaroos in the wild",
    review: "Token Australian movie for Leng"
}

var movie = prompt("Please give the movie")
getReview(movie)