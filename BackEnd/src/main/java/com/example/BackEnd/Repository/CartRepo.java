package com.example.BackEnd.Repository;

import com.example.BackEnd.Module.Cart;
import com.example.BackEnd.Module.MyUsers;
import com.example.BackEnd.Module.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepo extends JpaRepository<Cart,Integer> {
    @Query("select c from Cart c where c.myUsers = :customerId")
    List<Cart> findByCustomerId(MyUsers customerId);

    @Query("select c from Cart c where c.myUsers = :cust_id and c.product = :prod_id")
    Cart findByCust_idProd_Id(MyUsers cust_id, Product prod_id);
}
