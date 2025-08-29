package com.rax.javabasics.eoops.bencapsulation;

public class secretsCar {
    private int speed;
    private String color;

    public secretsCar(String color){
        this.color = color;
        System.out.println("The color is: "+ color);
    }

    public void setSpeed(int speed){
        this.speed = speed;
        System.out.println("The speed is: "+ speed);
    }
}
