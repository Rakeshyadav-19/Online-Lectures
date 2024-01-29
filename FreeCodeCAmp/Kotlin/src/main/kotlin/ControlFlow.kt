fun main()
{
    val time = 2
    //when => it compares the arguments inside when
    //similar to switch case
    //it returns the first true statement and exits the when
    when (time)
    {
        //if we have multiple statements use curly brackets
     // expression   if true       execute this
            12        ->
            {
                println("The time is $time")
            }
            6         ->
            {
                println("time is $time")
            }
            3         -> println("time is $time")
     //                 OR
         1,2,4        -> println("The time is $time")
     //To check if number is in range
        in 1..12 -> println("The num is in range")

        else      ->      println("time is Invalid")
    }

    var value = 19
    val result = when (value)
    {
        19 -> {
            println("Hello it is executed")
            "It is 19"
        }
        in 1..9 -> "In range 1 to 9"
        11 -> "The value is equal to 10"
        else -> "Incremented value is ${++value}"
    }
    println(result)

    //To compare value inside when
    val number = 100
    val result1 = when
    {
        number <= 101 -> "It is less then 101"
        number >= 100  -> "It is equal to 100"
        number == 99 -> "Number is 100 - 1"
        else -> "It does not exist"
    }
    println(result1)
}