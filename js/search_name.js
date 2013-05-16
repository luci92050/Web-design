/*jshint multistr:true */

var text = "blas asbas ajhsbda asjk jakhsd Stres shju stres jkj Stres"
var myName="Stres"
hits=[]

for (var i=0; i< text.length; i++)
{
    if (text[i]="E")
    {
        for (var j=0; j< i+myName.length; j++)
        {
            hits.push(text[j])
        }
    }
    
}

if (hits.length < 1)
{
   console.log("Your name wasn't found!") 
}
else
{
    console.log(hits)
}