package com.rax.javabasics.fmultithreading.threads;

public class numberCounter extends Thread {

    @Override
    public void run() {
        int count = 0;
        for (int i = 0; i <= 500000000; i++) {
            if(i%10 == 7){
                count ++;
            }
        }
        System.out.println("Count of numbers ending with 7= "+count);
    }
}
