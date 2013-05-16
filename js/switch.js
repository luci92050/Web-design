var user= prompt ("run, hide or swim?").toUpperCase();
switch (user)
{
    case "RUN":
        var run=prompt("Fast or slow?").toUpperCase()
        if (run === "FAST")
            {
                console.log("Very well!")
            }
            else
            {
                console.log("Run fast, it's better!")
            }
        break;
        
    case "HIDE":
        var hide=prompt("In the woods or in the cabin?").toUpperCase()
        if (hide === "CABIN")
            {
                console.log("Very well!")
            }
            else
            {
                console.log("Run in the cabin!")
            }
        if (hide === "HOUSE" || hide=== "ROOM" )
        {
            console.log("Stay there!")
        }
        
        break;
        
    case "SWIM":
        var swim=prompt("In the river or in the pool?").toUpperCase()
        if (swim === "RIVER")
            {
                console.log("The water may be cold...")
            }
            else
            {
                console.log("Very well!")
            }
        if (swim !== "RIVER" && swim === "OCEAN" )
        {
            console.log("Even better")
        }    
        break;
    default: 
        console.log("Not a valid answer!")
}
