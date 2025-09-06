package com.example.food_order.service;

import com.example.food_order.Model.*;
import com.example.food_order.Repository.*;
import com.example.food_order.Request.OrderRequest;
import jdk.jshell.spi.ExecutionControl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private CartService cartService;

    @Override
    public Order createOrder(OrderRequest order, User user) throws Exception {
        Address address=order.getDeliveryAddress();
        Address savedAddress=addressRepository.save(address);
        if(!user.getAddresses().contains(savedAddress)){
            user.getAddresses().add(savedAddress);
            userRepository.save(user);
        }
        Restaurant restaurant=restaurantService.findRestaurantById(order.getRestaurantId());

        Order createorder=new Order();
        createorder.setCustomer(user);
        createorder.setCreatedAt(new Date());
        createorder.setOrderStatus("PENDING");
        createorder.setDeliveryAddress(savedAddress);
        createorder.setRestaurant(restaurant);

        Cart cart=cartService.findCartByUserId(user.getId());

        List<Orderitem> orderitems=new ArrayList<>();
        for (CartItem cartItem:cart.getItem()){
            Orderitem orderitem=new Orderitem();
            orderitem.setFood(cartItem.getFood());
            orderitem.setIngredients(cartItem.getIngredients());
            orderitem.setQuentity(cartItem.getQuantity());
            orderitem.setTotalPrice(cartItem.getTotalPrice());

            Orderitem savedOrderItem=orderItemRepository.save(orderitem);
            orderitems.add(savedOrderItem);
        }
        Long totalPrice=cartService.calculateCartTotals(cart);
        createorder.setItems(orderitems);
        createorder.setTotalPrice(totalPrice);

        Order savedOrder=orderRepository.save(createorder);
        restaurant.getOrders().add(createorder);
        return createorder;
    }

    @Override
    public Order updateOrder(Long orderId, String orderStatus) throws Exception {
        Order order=findOrderById(orderId);
        if(orderStatus.equals("OUT_FOR_DELIVERY")
                || orderStatus.equals("DELIVERED")
                ||orderStatus.equals("COMPLETED")
                ||orderStatus.equals("PENDING")){
            order.setOrderStatus(orderStatus);
            return orderRepository.save(order);
        }
            throw new Exception("please select a valid order status");

    }

    @Override
    public void cancelOrder(Long orderId) throws Exception {
            Order order=findOrderById(orderId);
            orderRepository.deleteById(orderId);
    }

    @Override
    public List<Order> getUserOrder(Long userId) throws Exception {

        return orderRepository.findByCustomerId(userId);
    }

    @Override
    public List<Order> getRestaurantOrder(Long restaurantId, String orderStatus) throws Exception {
        List<Order> orders=orderRepository.findByRestaurantId(restaurantId);
        if (orderStatus != null) {
            orders=orders.stream().filter(order->order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList());
        }
        return orders;
    }

    @Override
    public Order findOrderById(Long orderId) throws Exception {
        Optional<Order> opt=orderRepository.findById(orderId);
        if(opt.isEmpty()){
            throw new Exception("Order not found");
        }

        return opt.get();
    }
}
