package com.example.BackEnd.Controller;

import com.example.BackEnd.Module.MyUsers;
import com.example.BackEnd.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public String login(@RequestBody MyUsers user){
        return userService.verify(user);
    }

    @PostMapping("register")
    public String register(@RequestBody MyUsers user){
        return userService.registerUser(user);
    }
}
