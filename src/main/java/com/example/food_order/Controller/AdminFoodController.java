package com.example.food_order.Controller;

import com.example.food_order.Model.Food;
import com.example.food_order.Model.Restaurant;
import com.example.food_order.Model.User;
import com.example.food_order.Request.CreateFoodRequest;
import com.example.food_order.Response.MessageResponse;
import com.example.food_order.service.FoodService;
import com.example.food_order.service.RestaurantService;
import com.example.food_order.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/food")
public class AdminFoodController {

    @Autowired
    private FoodService foodService;
    @Autowired
    private UserService userService;
    @Autowired
    private RestaurantService restaurantService;

    @PostMapping
    public ResponseEntity<Food> createFood(@RequestBody CreateFoodRequest req, @RequestHeader("Authorization")String jwt) throws Exception{
        User user=userService.findUserByJwtToken(jwt);
        Restaurant restaurant=restaurantService.findRestaurantById(req.getRestaurantId());
        Food food= foodService.creaeFood(req,req.getCategory(),restaurant);

        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteFood(@PathVariable Long id, @RequestHeader("Authorization")String jwt) throws Exception{
        User user=userService.findUserByJwtToken(jwt);

        foodService.deleteFood(id);

        MessageResponse res=new MessageResponse();
        res.setMessage("Successfully deleted food");

        return new ResponseEntity<>(res,HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Food> updateFoodaAvaibilityStatus(@PathVariable Long id, @RequestHeader("Authorization")String jwt) throws Exception{
        User user=userService.findUserByJwtToken(jwt);

        Food food= foodService.updateAvailibility(id);

        return new ResponseEntity<>(food, HttpStatus.CREATED);
    }

}
