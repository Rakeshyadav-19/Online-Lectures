//Function Default Values
fun main()
{
    sendMessage("Raju,","Yo")
    //If we pass noting takes the default value
    sendMessage("Rax")
    //To pass the value to specific argument or in the order we want
    sendMessage(message = "Hello")
}

//If user doesn't send any value in parameter we can have a default value for it,it can be variable or function or anything.
fun sendMessage(name : String = "User" , message : String = defaultMessage() )
{
    println("Name = $name and message = $message")
}

fun defaultMessage(): String
{
    return "No message"
}