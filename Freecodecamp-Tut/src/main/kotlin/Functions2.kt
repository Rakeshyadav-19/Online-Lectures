import kotlin.math.max
//Function return
fun main()
{
    //Can define variable with same name as that is limited to that function only
    val max = getSmall(3,9)
    println(max)
}

//To define return type write after the round bracket end
fun getSmall(i:Int, j:Int): Int
{
    //can be written in one line
    /*val small = if (i>j)
    {
        i
    }
    else
    {
        j
    }*/

    //smaller version of above
    //val small = if (i<j) i else j

    //smaller version of above
    return if (i<j) i else j

    //as soon as return keyword is reached the block is exited
    println("Does not executes")
}