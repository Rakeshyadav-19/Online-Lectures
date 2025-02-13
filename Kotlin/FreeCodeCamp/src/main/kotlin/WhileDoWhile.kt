fun main()
{
    //It loops until certain condition is true
    var number = 0

    //If we want to execute the loop least once even if condition is false
    /*do {
        println(number)
        number++
    }while (number < 10)*/


    //if condition false does not go in
    while (number < 10)
    {
        number++
        
        //it skips the step and continues to next step
        /*if (number == 8)
        {
            continue
        }*/

        //It exits the loop
        if (number == 9)
        {
            break
        }
        println(number)

    }
}