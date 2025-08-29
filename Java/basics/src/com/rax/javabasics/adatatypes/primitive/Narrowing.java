package com.rax.javabasics.adatatypes.primitive;

public class Narrowing {
    public static void main(String[] args){
        System.out.println("Narrowing conversion example: ");
        System.out.println("-----------------");

//      It is explicit
        double doubleValue = 923.55678900987654321;
        float floatValue = (float) doubleValue;
        long longValue = (long) floatValue;
        int intValue = (int) longValue;

        System.out.println("double: "+ doubleValue);
        System.out.println("float: "+ floatValue);
        System.out.println("long: "+ longValue);
        System.out.println("int: "+ intValue);
    }
}
