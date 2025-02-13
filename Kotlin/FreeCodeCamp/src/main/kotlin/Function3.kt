//Function Overloading
fun main() {
    val Max = getMax(2 , 1 , 12)
    println(Max)
}

fun getMax(a : Int , b : Int) : Int
{
    return if (a > b) a else b
}

//If function has only one operation it can be written in this way.
fun getMax(a : Double , b : Double) = if (a > b) a else b

fun getMax(a : Int , b : Int , c : Int) = if (a > b && b > c) a else if (b > a && b > c) b else c
