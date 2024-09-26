package com.example.BackEnd.Controller;

import com.example.BackEnd.Module.Product;
import com.example.BackEnd.Service.ServiceRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class ProductController {

    private ServiceRegistry service;

    @Autowired
    public void setService(ServiceRegistry service) {
        this.service = service;
    }

    @RequestMapping("")
    public String home() {
        return "Hello World";
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return service.getAllProducts();
    }
}