package com.rax.javabasics.boperators;

public class binaryOperator {
    public static void main(String[] args){
        int num = 2;  //0010
        int num1 = 5;//0101

//      To get Binary
        System.out.println(Integer.toBinaryString(num));

//      ANd operator &
        System.out.println("And operator: ");
        System.out.println("2 & 3 = " + (num & num1));
        System.out.println("Binary = " + Integer.toBinaryString(num & num1));

//      OR operator |
        System.out.println("OR operator: ");
        System.out.println("2 | 3 = " + (num | num1));
        System.out.println("Binary = " + Integer.toBinaryString(num | num1));

//      XOR operator ^
        System.out.println("XOR operator: ");
        System.out.println("2 ^ 3 = " + (num ^ num1));
        System.out.println("Binary = " + Integer.toBinaryString(num ^ num1));

//      NOT operator
        System.out.println("NOT operator: ");
        System.out.println("~2 = " + (~num));
        System.out.println("Binary = " + Integer.toBinaryString(~num));

//      Left shift
        System.out.println("Left Shift operator: ");
        System.out.println("2 << 3 = " + (num << num1));
        System.out.println("Binary = " + Integer.toBinaryString(num << num1));

//      Right shift
        System.out.println("Right Shift operator: ");
        System.out.println("2 << 3 = " + (num << num1));
        System.out.println("Binary = " + Integer.toBinaryString(num << num1));

    }
}
