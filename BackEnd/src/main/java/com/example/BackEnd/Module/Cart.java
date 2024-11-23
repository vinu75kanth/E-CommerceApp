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
    @ManyToOne
    @JoinColumn(name = "cust_id",nullable = false)
    private MyUsers myUsers;
    @ManyToOne
    @JoinColumn(name = "prod_id",nullable = false)
    private Product product;
}
