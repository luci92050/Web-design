var slaying=true
var youHit=Math.floor(Math.random()*2)
var damageThisROund=Math.floor(Math.random()* 5)
var totalDamage=0

while (slaying)
{
    if (youHit)
    {
        console.log("You hit the dragon!")
        totalDamage += damageThisRound
        if (totalDamage >= 4)
        {
            console.log("You have slayned the dragon!")
        }
        else
        {
            youHit=Math.floor(Math.random()*2)
        }
    }
    else
    {
        console.log("You missed")
    }
    slaying=false;
}