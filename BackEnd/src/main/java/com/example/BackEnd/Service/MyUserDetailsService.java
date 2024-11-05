package com.example.BackEnd.Service;

import com.example.BackEnd.Module.MyUsers;
import com.example.BackEnd.Module.UserPrincipal;
import com.example.BackEnd.Repository.ProductRepo;
import com.example.BackEnd.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    private UserRepo repo;

    @Autowired
    public void setRepo(UserRepo repo) {
        this.repo = repo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

//        System.out.println(username);

        MyUsers user = repo.findByUsername(username);

//        System.out.println(user);

        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new UserPrincipal(user);
    }
}
