package com.example.food_order.Request;

import lombok.Data;

@Data
public class UpdateCartItemRequest {
    private Long cardItemId;
    private int quantity;
}
