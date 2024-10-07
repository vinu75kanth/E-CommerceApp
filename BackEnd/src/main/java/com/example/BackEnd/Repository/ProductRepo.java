package com.example.BackEnd.Repository;

import com.example.BackEnd.Module.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepo extends JpaRepository<Product,Integer> {

    @Query("select p from Product p where lower(p.name) like lower(concat('%',:keyword,'%'))")
    List<Product> searchProduct(String keyword);
}
