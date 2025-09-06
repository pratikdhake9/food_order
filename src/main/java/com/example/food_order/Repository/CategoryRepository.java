package com.example.food_order.Repository;

import com.example.food_order.Model.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CategoryRepository extends CrudRepository<Category, Long> {

    public List<Category> findByRestaurantId(Long id);
}
