package com.rax.javabasics.cconditionalstatements;

import java.util.Scanner;

public class ternaryOperator {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());

//      Ternary operator
//      result = (condition)? true: false;
        String bigValue = (num>100) ? "Pass" : "Fail";
        System.out.println(bigValue);
    }
}
