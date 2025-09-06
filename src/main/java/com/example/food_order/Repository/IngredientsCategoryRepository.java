package com.example.food_order.Repository;

import com.example.food_order.Model.IngredientCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientsCategoryRepository extends JpaRepository<IngredientCategory,Long> {
    List<IngredientCategory> findByRestaurantId(Long id);

}
