package com.example.food_order.Request;

import java.util.List;

import com.example.food_order.Model.ContactInformation;

import lombok.Data;

@Data
public class CreateRestaurantRequest {
    
    private Long id;
    private String name;
    private String description;
    private String cuisineType;
    private String address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;
}
