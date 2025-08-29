package com.rax.javabasics.eoops.cinheritance;

public class eg {
    public static void main(String[] args){
        child child = new child();
        child.newHair();
        child.hair();
    }
}

class parent{
    void hair(){
        String color = "Black";
        System.out.println(color);
    }
}

class child extends parent{
    void newHair(){
        System.out.println("The hair color is, call hair() to know ");
    }
}