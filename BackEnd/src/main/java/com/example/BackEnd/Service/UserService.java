package com.example.BackEnd.Service;

import com.example.BackEnd.CustomException;
import com.example.BackEnd.Module.MyUsers;
import com.example.BackEnd.Repository.UserRepo;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class UserService {

    private AuthenticationManager authenticationManager;
    private UserRepo userRepo;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);
    private JwtService jwtService;
    private HttpServletResponse response;

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

    @Autowired
    public void setResponse(HttpServletResponse response) {
        this.response = response;
    }

    public void verify(MyUsers user){
        try{
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword())
            );
            if(authentication.isAuthenticated()){
                Cookie cookie = new Cookie("token",jwtService.generateToken(user.getUsername()));
                cookie.setPath("/");
                cookie.setHttpOnly(true);
                cookie.setMaxAge(120);
                response.addCookie(cookie);
            }
        }
        catch(Exception e){
            response.setStatus(403);
            throw new CustomException(e.getMessage());
            //response.sendError(401,"Login again");
        }
    }

    public String registerUser(MyUsers user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        MyUsers ans =  userRepo.save(user);
        return (ans == null) ? "re-try" : "success";
    }
}
