//vararg Keyword
//it helps to pass more than one argument to our parameter
/*
fun main()
{
    */
/*val answer = sum(2 , 2 , 1)
    println(answer)*//*

    //Since return type is int
    println(sum(2,2,1))
}

fun sum(a : Int , b : Int , c : Int) : Int
{
    return a + b + c
}*/

fun main()
{
    //We can now pass as many as values we want
    println(sum(2,2,1,3,2))

}

fun sum(vararg numbers : Int): Int
{
    var result = 0
    for (number in numbers)
    {
        result += number
    }

    //Introduction
    numbers.forEach { println(it) }

    return result
}