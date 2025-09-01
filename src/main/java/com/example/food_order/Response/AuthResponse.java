package com.example.food_order.Response;

import com.example.food_order.User_Role;
import lombok.Data;

@Data
public class AuthResponse {

    private String jwt;
    private String message;
    private User_Role role;

}
