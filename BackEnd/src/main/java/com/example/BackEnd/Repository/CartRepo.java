package com.example.BackEnd.Repository;

import com.example.BackEnd.Module.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepo extends JpaRepository<Cart,Integer> {
    @Query("select c from Cart c where c.cust_id = :customerId")
    List<Cart> findByCustomerId(int customerId);
}
