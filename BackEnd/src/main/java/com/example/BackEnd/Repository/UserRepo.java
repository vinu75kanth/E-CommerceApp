package com.example.BackEnd.Repository;

import com.example.BackEnd.Module.MyUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<MyUsers,Integer> {

    MyUsers findByUsername(String username);

//    int deleteByUsername(String username);
}
