package com.example.food_order.service;

import com.example.food_order.Model.Cart;
import com.example.food_order.Model.CartItem;
import com.example.food_order.Request.AddCartItemRequest;

public interface CartService {

    public CartItem addItemToCart(AddCartItemRequest req,String jwt) throws  Exception;

    public CartItem updateCartItemQuality(Long cartItemId,int quality) throws Exception;

    public Cart removeItemFromCart(Long cartItemId,String jwt) throws Exception;

    public Long calculateCartTotals(Cart cart) throws Exception;

    public Cart findCartById(Long id) throws Exception;

    public Cart findCartByUserId(Long userId) throws Exception;

    public Cart clearCart(Long userId) throws Exception;

}
