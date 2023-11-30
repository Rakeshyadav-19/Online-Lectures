fun main()
{
    var num1 = 21f
    var num2 = 2
    var sum = num1 + num2

    //using another variable to store output
    println("sum is = $sum")

    //using placeholder -> {}, do operation inside this.
    println("\nsum is = ${num1+num2}")
    println("subtraction is = ${num1-num2}")
    println("Multiplication is = ${num1*num2}")
    println("Division is = ${num1/num2}")
    println("Modulus is = ${num1%num2}")

    //assignment operator
    sum += 2
    print("\n$sum")

    //precedence
    println("\n\n3 + 3 * 4 = ${3+3*4}")
        //we can change precedence by using brackets
    println("3 + 3 * 4 = ${(3+3)*4}")

    //increment and decrement
    var i = 0
    println("\n${i++}")
    println("$i")
    println("${++i}")
    println("${--i}")

    //logical operators
    val isTrue = true
    val a = 0

    if (isTrue && a == 1) //AND
    {
        print("It is true")
    }
    else if(!isTrue || a==0) //OR
    {
        println("It is half true")
    }
    else
    {
        println("All conditions ale false")
    }

}