package com.example.food_order.Repository;

import com.example.food_order.Model.Orderitem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<Orderitem,Long> {


}
