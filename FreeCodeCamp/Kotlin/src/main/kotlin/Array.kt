fun main() {
    //val names: Array<String> = arrayOf("Rax","Raju","Ram")
    val names = arrayOf("Rax" , "Raju" , "Ram")
    val numbers = arrayOf(19 , 30 , 21)
    val mixedElements = arrayOf(1 , 2 , 3 , "text",'A')
    names[1] = "Raj"

    println("First Element: ${names[0]}")
    println("Second Element: ${names[1]}")
    println("Size of Array: ${names.size}")

    //To print only specific Datatype
    for (i in mixedElements)
    {
        //is, used to check if true condition in if,
        //returns true of false
        if (i is Int)
        {
            println("It is Integer $i")
        }
        if(i is Char)
        {
            println("It is Character $i")
        }
    }
}