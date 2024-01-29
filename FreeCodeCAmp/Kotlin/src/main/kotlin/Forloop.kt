fun main()
{

    //FOR INCREMENT
    //for range, we just type  ".." here we go till value becomes equal to limit
    //Last number is included

    /*    for (i in 1..10)
        {
            println("i = $i")
        }*/

    //for range, we use until keyword, it will loop until value is not equal to limit
    //Last  number is excluded
/*    for (i in 1 until 10)
    {
        println("i = $i")
    }*/

    //FOR DECREMENT
    //Includes 10
/*    for (i in 10 downTo 1)
    {
        println("i= $i")
    }*/

    //TO SKIP TO THAT LOOP STEP
    //SKIP THIS MANY LOOP STEPS AND THEN EXECUTE THE NEXT ONE
    for (i in 1 .. 10 step 3)
    {
        //execute 1 after 1 it skips (3-1) steps and prints the next
        println(i)
    }
    for (i in 1 .. 100 step 10)
    {
        println(i)
    }
}