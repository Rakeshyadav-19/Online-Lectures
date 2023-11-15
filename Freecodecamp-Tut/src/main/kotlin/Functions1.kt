//Function call....
fun main()
{
    sayHello("Rakesh",19)
    sayHello("Rax",18)

    val hasInterrnetConnection = false
    if (hasInterrnetConnection)
    {
        getData("Your request")
    }
    else
    {
        noData()
    }
}

//Function with parameters.
fun sayHello(name: String,age: Int)
{
    println("Hello, World!!!")
    println("My name is $name, My age  is $age")
}

fun getData(data: String)
{
    println("Your requested data is: $data")
}

fun noData()
{
    println("You are not connected to internet")
}