package com.example.food_order.Request;


import com.example.food_order.Model.Address;
import lombok.Data;

@Data
public class OrderRequest {
    private Long restaurantId;
    private Address deliveryAddress;
}
