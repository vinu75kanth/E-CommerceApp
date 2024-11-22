package com.example.BackEnd.Module;

import jakarta.persistence.*;
import lombok.Data;
import lombok.ToString;

@Entity
@Data
@ToString
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int s_no;
    private int cust_id;
    private int prod_id;
}
