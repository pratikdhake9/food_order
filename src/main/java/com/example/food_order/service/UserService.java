package com.example.food_order.service;

import com.example.food_order.Model.User;

public interface UserService {
    public User findUserByJwtToken(String jwt) throws Exception;

    public User findUserByJwtEmail(String email) throws Exception;
}
