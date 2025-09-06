package com.example.food_order.service;

import com.example.food_order.Model.Category;
import com.example.food_order.Model.Food;
import com.example.food_order.Model.Restaurant;
import com.example.food_order.Request.CreateFoodRequest;
import jdk.dynalink.linker.LinkerServices;

import java.util.List;

public interface FoodService {

    public Food creaeFood(CreateFoodRequest req, Category category, Restaurant restaurant);

    void deleteFood(Long foodId) throws Exception;

    public List<Food> getRestaurantFood(Long restaurantId, boolean isVegetarian , boolean isNonveg, boolean isSeasonal, String foodCategory);

    public List<Food> searchFood(String keyword);
    public Food findFoodById(Long FoodId)throws Exception;

    public Food updateAvailibility(Long foodId) throws Exception;


}
