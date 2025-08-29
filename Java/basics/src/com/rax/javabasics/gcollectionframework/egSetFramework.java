package com.rax.javabasics.gcollectionframework;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class egSetFramework {
//    Set -> HashSet & LinkedHashSet

//    HashSet -> underlying data structure is HashMap
//    HashSet -> does not maintain insertion order
    public static void main(String[] args) {
        Set<Integer> set1 = new HashSet<>();
        set1.add(12);
        set1.add(12);

        System.out.println(set1);

//    LinkedHashSet -> maintains insertion order
//    LinkedHashSet -> underlying data structure is LinkedHashMap
//    LinkedHashSet -> requires more memory than HashSet, slightly slower than HashSet
        Set<Integer> set2 = new LinkedHashSet<>();
        set2.add(12);
        set2.add(13);
        set2.add(14);
        set2.add(15);
        set2.add(12);
        System.out.println(set2);
    }
}
