package com.rax.javabasics.adatatypes.primitive;

public class Widening {
    public static void main(String[] args) {
         System.out.println("Widening Conversion Example:");
         System.out.println("------------------");

//       It is implicit, it is done automatically, convert small size variable to large size
         byte byteValue = 10; // 1byte
         short shortValue = byteValue; // 2 byte
         int intValue = shortValue; // 4 byte
         long longValue = intValue; // 8 byte
         float floatValue = longValue; // 4 byte
         float doubleValue = floatValue; // 8 byte

         System.out.println("int: "+intValue);
         System.out.println("long: "+longValue);
         System.out.println("float: "+floatValue);
         System.out.println("double: "+doubleValue);

    }
}
