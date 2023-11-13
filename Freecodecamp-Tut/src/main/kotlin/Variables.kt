import kotlin.math.min

fun main() {
    /* variable name must be using camelCase.*/

    //var value can be changed
    var userName: String = "Rakesh"
    userName = "Rax"

    //val value cannot be changed
    val number1: Int = 19

    //kotlin automatically assigns the data type.
    var myName = "Raju"

    println("Hi my name is $userName")
    println("My lucky number is $number1")
    println("My number is $myName")

    //Byte, Short, Long
    val number: Int
    number = 29

    val maxIntegerValue: Int = Int.MAX_VALUE
    val minIntegerValue: Int = Int.MIN_VALUE

    println("Value of number is: $number")
    println("Int max value is : $maxIntegerValue")
    println("Int min value is : $minIntegerValue")

    //Float & Double

    //To declare a float,by default kotlin thinks it as double
    val myNumber = 1.1f

    //by default, it is Double
    val myNumber1 = 1.1

    //Char and Boolean

    val character: Char = 'R'
    val boolean: Boolean = true

        println("The character is $character")
        println(character)
        println(boolean)

}