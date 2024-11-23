package com.example.BackEnd.Module;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MyUsers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
    @OneToMany(mappedBy = "myUsers", cascade = CascadeType.ALL, orphanRemoval = true)
    @Transient
    private List<Cart> carts;
}
