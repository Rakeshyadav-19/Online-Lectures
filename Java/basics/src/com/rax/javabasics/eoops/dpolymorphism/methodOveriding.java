package com.rax.javabasics.eoops.dpolymorphism;

class Animal{
    void sound(){
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal{
    void sound() {
        System.out.println("Dog Barks");
    }
}

class Cat extends Animal{
    void sound(){
        System.out.println("Cat Meows");
    }
}

public class methodOveriding {
    public static void main(String[] args){
        Animal animal1 = new Dog(); //Upcasting
        Animal animal2 = new Cat(); //Upcasting

        animal1.sound();
        animal2.sound();

    }
}
