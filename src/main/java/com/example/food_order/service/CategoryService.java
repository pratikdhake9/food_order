package com.example.food_order.service;

import com.example.food_order.Model.Category;
import jdk.dynalink.linker.LinkerServices;

import java.util.List;

public interface CategoryService {

    public Category createCategory(String name,Long userId) throws Exception;

    public List<Category> findCategoryByRestaurantId(Long id) throws Exception;

    public Category findCategoryById(Long id) throws Exception;

}
