package com.example.food_order.Repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.food_order.Model.Restaurant;
import org.springframework.data.jpa.repository.Query;

public interface RestaurantRepository extends JpaRepository<Restaurant,Long>{

    @Query("SELECT r FROM Restaurant r where lower(r.name) LIKE lower(concat('%',:query,'%')) or lower(r.cuisineType) LIKE lower(concat('%',:query,'%'))")
    List<Restaurant> findBySearchQuery(String query);

    Restaurant findByOwnerId(Long userId);

    
}
