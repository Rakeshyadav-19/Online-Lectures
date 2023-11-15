fun main()
{
    var num = 0
//TO break the outer loop depend ong on inner loop condition
    outer@ while(num < 5)
    {
        println("")
        println(num)
        num ++

        var i = 0
        while (i < 8)
        {
            if (i == 3)
            {
                continue@outer
            }
            println("##$i##")
            i ++
        }

    }
}