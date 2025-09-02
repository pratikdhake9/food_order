package com.example.food_order.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.food_order.Config.JwtProvider;
import com.example.food_order.Model.User;
import com.example.food_order.Repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;
    
    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public User findUserByJwtToken(String jwt) throws Exception{
        String email=jwtProvider.getEmailFromJwtToken(jwt);
        User user=findUserByJwtEmail(email);
        return user;
    }

    @Override
    public User findUserByJwtEmail(String email) throws Exception{
        User user=userRepository.findByEmail(email);

        if(user==null){
            throw new Exception("User Not Found");
        }
        return user;
    }


}
