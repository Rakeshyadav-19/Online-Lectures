package com.rax.javabasics.eoops.dpolymorphism;

class Calculator{
   int add(int a, int b){
       return a+b;
   }

   int add(int a, int b, int c){
       return a+b+c;
   }
}

public class methodOverloading {
    public static void main(String[] args){
        Calculator calc = new Calculator();
        System.out.println(calc.add(2,3));
        System.out.println(calc.add(2,3,2));
    }
}
