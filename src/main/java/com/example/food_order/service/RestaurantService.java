package com.example.food_order.service;

import java.util.List;

import com.example.food_order.Dto.RestaurantDto;
import com.example.food_order.Model.Restaurant;
import com.example.food_order.Model.User;
import com.example.food_order.Request.CreateRestaurantRequest;

public interface RestaurantService {

    public Restaurant createRestaurant(CreateRestaurantRequest req,User user);

    public Restaurant updateRestaurant(Long restaurantId, CreateRestaurantRequest updatedRestaurant) throws Exception;

    public void deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(long id) throws Exception;

    public Restaurant getRestaurantByUserId(Long userId) throws Exception;
    
    public RestaurantDto addToFavorites(Long restaurantId,User user) throws Exception;

    public Restaurant updateRestauranntStatus(Long id) throws Exception;
    
}
