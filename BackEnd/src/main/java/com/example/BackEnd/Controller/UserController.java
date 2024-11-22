package com.example.BackEnd.Controller;

import com.example.BackEnd.Module.MyUsers;
import com.example.BackEnd.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public void login(@RequestBody MyUsers user){
        userService.verify(user);
    }

    @PostMapping("register")
    public void register(@RequestBody MyUsers user){
        MyUsers temp = new MyUsers();
        temp.setUsername(user.getUsername());
        temp.setPassword(user.getPassword());
        userService.registerUser(user);
        userService.verify(temp);
    }
}
