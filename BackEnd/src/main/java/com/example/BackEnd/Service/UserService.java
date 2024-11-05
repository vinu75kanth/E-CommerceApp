package com.example.BackEnd.Service;

import com.example.BackEnd.Module.MyUsers;
import com.example.BackEnd.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private AuthenticationManager authenticationManager;
    private UserRepo userRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);
    private JwtService jwtService;

    @Autowired
    public void setAuthenticationManager(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Autowired
    public void setRepo(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Autowired
    public void setJwtService(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    public String verify(MyUsers user) {
        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
            if(authentication.isAuthenticated()){
                return jwtService.generateToken(user.getUsername());
            }
        }
        catch(Exception e){
            return "Wrong Username or Password";
        }
        return "error 404";
    }

    public String registerUser(MyUsers user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        MyUsers ans =  userRepo.save(user);
        return (ans == null) ? "re-try" : "success";
    }
}
