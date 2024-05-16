/*Create an arbitrary range of number,
1]Check if number is odd or even
2]If even print it If odd skip it
3]Count the total number of even you have found in that range and print it*/

//My code
fun main()
{
    var i = 1
    var j = 0
    while (i <= 20)
    {
        if (i % 2 == 0) {
            println(i)
            j ++
        }
        i++
    }
    println("Total even numbers are: $j")
}


//freeCodeCamp
/*
fun main()
{
    var number = 1
    var lastNumber = 20
    var evenNumberCounter = 0

    while (number <= lastNumber)
    {
        number ++
        if (!isEvenNumber(number)) || if ((number % 2) !=0)
        {
            continue
        }
        evenNumberCounter ++
        println(number)
     }
     println("Total number of even number found = $evenNUmberCounter")
}
isEvenNUmber(number: Int): Boolean
{
    if((number%2)==0)
    {
        return true
    }
    else
    {
        return false
    }
}
 */