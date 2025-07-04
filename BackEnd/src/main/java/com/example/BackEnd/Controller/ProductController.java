package com.example.BackEnd.Controller;

import com.example.BackEnd.Module.Product;
import com.example.BackEnd.Service.ServiceRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class ProductController {

    private ServiceRegistry service;

    @Autowired
    public void setService(ServiceRegistry service) {
        this.service = service;
    }

    @GetMapping("")
    public String home() {
        return "Welcome Folks";
    }

    @GetMapping("/product")
    public List<Product> getProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/product/{id}")
    public Product getProductById(@PathVariable int id) {
        return service.getProductById(id);
    }

    @PostMapping("/product")
    public void addProduct(@RequestBody Product product) {
        service.addProduct(product);
    }

    @PutMapping("/updateProduct")
    public void updateProduct(@RequestBody Product product) {
        service.updateProduct(product);
    }

    @DeleteMapping("/deleteproduct/{id}")
    public void deleteProduct(@PathVariable int id) {
        service.deleteProductByID(id);
    }

    @GetMapping("/searchproduct")
    public List<Product> getSearchProducts(String keyword) {
        return service.searchProducts(keyword);
    }

    @PostMapping("/cart")
    public void addToCart(@CookieValue("token") String token,int prod_id) {
        service.addToCart(token,prod_id);
    }

    @GetMapping("/cart")
    public List<Product> getCart(@CookieValue("token") String token) {
        return service.getProductInCart(token);
    }
}