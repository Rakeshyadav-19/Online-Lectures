package com.rax.javabasics.eoops.eabstraction;

public class abstractClassesMethod {
    public static void main(String[] args){
        Animal dogy = new Dog();
        Animal caty = new Cat();
        dogy.sayHello();
        caty.sayHello();
        dogy.sayBye();
        dogy.sleep();
        caty.sleep();

    }
}

abstract class Animal{
    public abstract void sayHello();
    public abstract void sayBye();
    public void sleep(){
        System.out.println("Sleeping....");
    }
}

class Dog extends Animal{
    public void sayHello(){
        System.out.println("Bark");
    }
    public void sayBye(){
        System.out.println("Bark Bark Bark");
    }
}

class Cat extends Animal{
    public void sayHello(){
        System.out.println("Meow");
    }
    public void sayBye(){
        System.out.println("Meow Meow Meow");
    }
}