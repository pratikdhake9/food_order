package com.example.food_order.service;

import com.example.food_order.Model.Cart;
import com.example.food_order.Model.CartItem;
import com.example.food_order.Model.Food;
import com.example.food_order.Model.User;
import com.example.food_order.Repository.CartItemRepository;
import com.example.food_order.Repository.CartRepository;
import com.example.food_order.Repository.FoodRepository;
import com.example.food_order.Request.AddCartItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfigureBefore;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartServiceImpl implements CartService{

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private FoodService foodService;

    @Override
    public CartItem addItemToCart(AddCartItemRequest req, String jwt) throws Exception {

        User user=userService.findUserByJwtToken(jwt);
        Food food=foodService.findFoodById(req.getFoodId());
        Cart cart=cartRepository.findByCustomerId(user.getId());

        for (CartItem cartItem:cart.getItem()){
            if(cartItem.getFood().equals(food)){
                int newQuantity=cartItem.getQuantity()+req.getQuality();
                return updateCartItemQuality(cartItem.getId(),newQuantity);
            }
        }
        CartItem newCartItem=new CartItem();
        newCartItem.setFood(food);
        newCartItem.setCart(cart);
        newCartItem.setQuantity(req.getQuality());
        newCartItem.setIngredients(req.getIngredients());
        newCartItem.setTotalPrice(req.getQuality()+food.getPrice());

        CartItem savedCartItem=cartItemRepository.save(newCartItem);

        return savedCartItem;
    }

    @Override
    public CartItem updateCartItemQuality(Long cartItemId, int quality) throws Exception {
        Optional<CartItem> cio=cartItemRepository.findById(cartItemId);
        if(cio.isEmpty()){
            throw  new Exception("CartItem not found");
        }
        CartItem item=cio.get();
        item.setQuantity(quality);


        item.setTotalPrice(item.getFood().getPrice()*quality);
        return cartItemRepository.save(item);
    }

    @Override
    public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception {
        User user=userService.findUserByJwtToken(jwt);
        Cart cart=cartRepository.findByCustomerId(user.getId());
        Optional<CartItem> opt=cartItemRepository.findById(cartItemId);
        if(opt.isEmpty()){
            throw new Exception("cart item not found");
        }
        CartItem item=opt.get();
        cart.getItem().remove(item);
        return cartRepository.save(cart);
    }

    @Override
    public Long calculateCartTotals(Cart cart) throws Exception {
        Long total=0L;
        for(CartItem cartItem:cart.getItem()){
            total+=cartItem.getFood().getPrice()*cartItem.getQuantity();
        }
        return total;
    }

    @Override
    public Cart findCartById(Long id) throws Exception {
        Optional<Cart> opt=cartRepository.findById(id);
        if(opt.isEmpty()){
            throw new Exception("cart not found with id  "+id);}
        return opt.get();
    }

    @Override
    public Cart findCartByUserId(Long userId) throws Exception {

        Cart cart= cartRepository.findByCustomerId(userId);
        cart.setTotal(calculateCartTotals(cart));
        return cart;
    }

    @Override
    public Cart clearCart(Long userId) throws Exception {

        Cart cart=findCartByUserId(userId);
        cart.getItem().clear();
        return cartRepository.save(cart);
    }
}
