package com.example.BackEnd.Module;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String description;
    private String brand;
    private BigDecimal price;
    private String category;
    @JsonFormat(shape = JsonFormat.Shape.STRING , pattern = "yyyy-MM-dd")
    private Date ReleaseDate;
    private boolean available;
    private int quantity;
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL,orphanRemoval = true)
    @Transient
    private List<Cart> carts;
}
