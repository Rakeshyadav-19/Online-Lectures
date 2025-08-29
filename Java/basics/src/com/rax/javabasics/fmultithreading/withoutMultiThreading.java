package com.rax.javabasics.fmultithreading;

public class withoutMultiThreading {
    public static void main(String[] args){
        long startTime = System.currentTimeMillis();

        long sum = 0;
        for (int i = 0; i <= 1000000000; i++) {
            sum += i;
        }
        System.out.println("Sum= "+sum);

        int count = 0;
        for (int i = 0; i <= 500000000; i++) {
            if(i%10 == 7){
                count ++;
            }
        }
        System.out.println("Count of numbers ending with 7= "+count);

        System.out.println(System.currentTimeMillis() - startTime);
    }
}
