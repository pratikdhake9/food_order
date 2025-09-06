package com.example.food_order.Request;


import lombok.Data;

import java.util.List;

@Data
public class AddCartItemRequest {

    private Long foodId;
    private int quality;
    private List<String> ingredients;
}
