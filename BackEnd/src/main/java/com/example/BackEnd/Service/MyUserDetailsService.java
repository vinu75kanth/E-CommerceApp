package com.example.BackEnd.Service;

import com.example.BackEnd.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public
class MyUserDetailsService implements UserDetailsService {

    private ProductRepo repo;

    @Autowired
    public void setRepo(ProductRepo repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
