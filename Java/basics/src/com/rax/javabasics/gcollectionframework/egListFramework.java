package com.rax.javabasics.gcollectionframework;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class egListFramework {
//    List -> ArrayList & LinkedList
    public static void main (String[] args) {
//        By default, size of ArrayList is 10, if we add more than 10 elements, it will increase its size by 50% and copy all elements to new array
        ArrayList<Integer> array1 = new ArrayList<>();
        array1.add(20);
        array1.add(30);
        array1.add(30);

        System.out.println(array1);
        System.out.println(array1.contains(12));
        System.out.println(array1.get(2));
//        array.addAll(); // to add/appends all elements of another collection
        System.out.println(array1.size());
        array1.remove(1);
        System.out.println(array1);
        System.out.println(array1.size());


        System.out.println("==================================");
//        Linked List -> Doubly Linked List
        List<Integer> list1 = new LinkedList<>();
        list1.add(12);
        list1.add(13);
        list1.add(14);
        list1.add(15);
        System.out.println(list1);
    }
}
