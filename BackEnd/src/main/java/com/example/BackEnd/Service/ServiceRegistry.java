package com.example.BackEnd.Service;

import com.example.BackEnd.Module.Cart;
import com.example.BackEnd.Module.MyUsers;
import com.example.BackEnd.Module.Product;
import com.example.BackEnd.Repository.CartRepo;
import com.example.BackEnd.Repository.ProductRepo;
import com.example.BackEnd.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServiceRegistry {

    private ProductRepo repo;
    private JwtService jwtService;
    private UserRepo userRepo;
    private CartRepo cartRepo;

    @Autowired
    public void setRepo(ProductRepo repo) {
        this.repo = repo;
    }

    @Autowired
    public void setJwtService(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Autowired
    public void setUserRepo(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Autowired
    public void setCartRepo(CartRepo cartRepo) {
        this.cartRepo = cartRepo;
    }

    public List<Product> getAllProducts() {
        return repo.findAll();
    }

    public Product getProductById(int id) {
        return repo.findById(id).orElse(null);
    }

    public void addProduct(Product product) {
        repo.save(product);
    }

    public void updateProduct(Product product) {
        repo.save(product);
    }

    public void deleteProductByID(int id) {
        repo.deleteById(id);
    }

    public List<Product> searchProducts(String keyword) {
        return repo.searchProduct(keyword);
    }

    public void addToCart(String token, int prod_id) {
        String username = jwtService.extractUserName(token);
        MyUsers user = userRepo.findByUsername(username);
        Cart cart = new Cart();
        cart.setCust_id(user.getId());
        cart.setProd_id(prod_id);
        cartRepo.save(cart);
    }

    public List<Product> getProductInCart(String token) {
        String username = jwtService.extractUserName(token);
        MyUsers user = userRepo.findByUsername(username);
        List<Cart> cart = cartRepo.findByCustomerId(user.getId());
        List<Product> products = new ArrayList<>();

        for(Cart cartItem : cart) {
            Product product = repo.findById(cartItem.getProd_id()).orElse(null);
            products.add(product);
        }
        return products;
    }
}
