fun main() {
    //TO assign a variable  Null write ?(safe call operator) at end of dataType
    // ? => checks if the variable is null and throws output else if null says null
    // !! => if variable has null throw the exception error but if not null throw the next output
    // ?: => executes of after the ?: id variable is null
    val text: String? = null
    println(text)

    var name: String? = "Rakesh"
    //using null operator assigned it value, so check if it is null or not
    if (name != null) {
        println(name.length)
    } else {
        println("The text is null")
    }
    //               OR
    var fix: String? = "Rax"
    println(fix?.length)

    //Using !!
    val nn: String? = null
    // println(nn!!.length)

    //Elvis operator => ?:
    //Execute the operation after "?:" if variable is null
    val nn2 = nn ?: "The variable is NULL"
    println(nn2)
    //               OR(Without ELVIS)
    var ra: String? = null
    ra = "THis is not null"
    var ra1 = " "
    if (ra != null) {
        ra1 = ra
    } else {
        ra1 = "THis is null"
    }
    println(ra1)
}