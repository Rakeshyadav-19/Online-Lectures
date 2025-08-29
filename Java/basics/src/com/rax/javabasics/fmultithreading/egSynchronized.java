package com.rax.javabasics.fmultithreading;

public class egSynchronized extends Thread {
    public static void main(String[] args) {
        Counter counter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) {
                counter.increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 10000; i++) {
                counter.increment();
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
        System.out.println("Final count: " + counter.getCount());
    }
}

class Counter {
    int count;

//    Without synchronized keyword the output will be inconsistent as both threads can access this method at the same time.
//    To avoid this we use synchronized keyword which makes sure that only one thread can access this
    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}