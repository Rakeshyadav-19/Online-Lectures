//Create and store integer in array and find smallest,biggest,and both in single function
fun main()
{
   val numbers = arrayOf(1,2,3,4,5,6,7,8,9)
    println("The maximum number is: ${findMax(numbers)}")
    println("The minimum number is: ${findMin(numbers)}")
    println("The number is: ${findMinMax(numbers,false)}")
}


fun findMax(numbers: Array<Int>): Int
{
    var max = numbers[0]

    for(number in numbers)
    {
        if (number > max)
        {
            max = number
        }
    }

    return max
}

fun findMin(numbers : Array<Int>): Int
{
    var min = numbers[0]

    for(number in numbers)
    {
        if (number < min)
            min = number
    }

    return min
}

//To combine both the functions
fun findMinMax(numbers : Array<Int> , searchMax: Boolean) : Int {
    var num = numbers[0]
    if (searchMax)
    {
        for (number in numbers)
        {
            if (number > num)
            {
                num = number
            }
        }
    }
    else
    {
        for(number in numbers)
        {
            if (number < num)
                num = number
        }
    }

    return num
}