package com.rax.javabasics.adatatypes.classs;


public class StringOperations{
    public static void main(String[] args) {

        //Strings are immutable.
        String name = "rax";
        String upperName = name.toUpperCase(); // Thw toUpperCase creates new string
        System.out.println(name);
        System.out.println(upperName);

//      Common String operations
        String text = "Hello World";
        System.out.println(text.length()); //Length os string
        System.out.println(text.charAt(1)); //Accessing characters
        System.out.println(text.substring(0,5)); //Substring
        System.out.println(text.contains("Hell")); //contains. startsWith, endsWith
        System.out.println(text.replace("World", "Java")); //Replace
        System.out.println(text);
    }
}
