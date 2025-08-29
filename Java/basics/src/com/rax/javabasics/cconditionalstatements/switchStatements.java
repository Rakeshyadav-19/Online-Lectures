package com.rax.javabasics.cconditionalstatements;

import java.util.Scanner;

public class switchStatements {
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int num = Integer.parseInt(scanner.nextLine());
//      Switch Statement
        switch (num){
            case 1, 2:
                System.out.println(num);
                break;
            case 3:
                System.out.println(num+1);
                break;
            default:
                System.out.println(num*2);
        }

    }
}
