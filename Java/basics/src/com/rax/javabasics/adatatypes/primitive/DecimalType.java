package com.rax.javabasics.adatatypes.primitive;

public class DecimalType {
    public static void main(String[] args) {
        System.out.println("float Range");

        float a = 127.1234567890f; // Give 7 significant digits
        System.out.println("Example float Value = " + a);
        System.out.println("Max positive float : " + Float.MAX_VALUE);
        System.out.println("Min positive float : " + Float.MIN_VALUE);
        System.out.println("Min negative float : -" + Float.MIN_VALUE);
        System.out.println("Max negative float : -" + Float.MAX_VALUE);


        double b = 129.12345678901112131415f; // Give 15 significant digits
        System.out.println("Example double Value = ." + b);
        System.out.println("Max positive double : " + Double.MAX_VALUE);
        System.out.println("Min positive double : " + Double.MIN_VALUE);
        System.out.println("Min negative double : -" + Double.MIN_VALUE);
        System.out.println("Max negative double : -" + Double.MAX_VALUE);

    }
}
