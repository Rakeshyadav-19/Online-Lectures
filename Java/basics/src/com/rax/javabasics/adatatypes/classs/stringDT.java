package com.rax.javabasics.adatatypes.classs;

public class stringDT {
    public static void main(String[] args) {
//      s1 does not store value it points, it contains address
        String s1 = "Hello"; //String Literal (Putting Value directly)
//      When we create new object the JVM allocates some memory in Heap Memory(It contains String Pool, etc.)
        String s2 = new String("Hello"); //Using Constructor

        System.out.println("String Pool VS Heap");

//      When we do this we check first if in heap memory weather we have this in stringPool if not we create new object for that text.
//      StringPool is small part Heap
//        str i here stores address of Hello
        String str1 = "Hello";
//      It will check if string is available in stringPool if there is,it will refer to string available in stringPool
        String str2 = "Hello";
        String str3 = new String("Hello");

//      Here with == we check the reference not value
        System.out.println(str1 == str2); //True (Same reference in pool)
        System.out.println(str1 == str3); //False (different objects)
//      To check values
        System.out.println(str1.equals(str3)); //True (Same content)

//      JVM has 2 DS to store data - Stack and Heap(It has string pool)
        int a = 2; //It is stored in stack
    }
}
