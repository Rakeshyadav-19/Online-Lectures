/*
Lecture Number 3
13 Nov
*/
fun main()
{
    //simple if else
    val isActive = false

    /* (isActive == true) -> isActive => checks if it is true, only for val usable */
    if (isActive)
    {
        println("User is Active")
    }
    else
    {
        println("User is Inactive")
    }

    //else if
    val num = 10
    if (num>100)
    {
        println("The number is greater than 100")
    }
    else if(num==100)
    {
       println("The  umber is equal to 100")
    }
    else
    {
        println("The number is less than 100")
    }

    //storing if else output in variable
    val numb1 = 10
    val numb2 = 100
    val result = if (numb1 >= 100 || numb2 >= 100)
    {
        println("One condition is true")
        "Access Given"//given to store in variable result
    }
    else
    {
        println("None of the condition is true")
        "Access Denied"
    }
    println(result)
}