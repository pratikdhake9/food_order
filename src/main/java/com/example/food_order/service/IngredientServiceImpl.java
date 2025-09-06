package com.example.food_order.service;

import com.example.food_order.Model.IngredientCategory;
import com.example.food_order.Model.IngredientsItem;
import com.example.food_order.Model.Restaurant;
import com.example.food_order.Repository.IngredientsCategoryRepository;
import com.example.food_order.Repository.IngredientsItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImpl implements IngredientsService {

    @Autowired
    private IngredientsItemRepository ingredientsItemRepository;

    @Autowired
    private IngredientsCategoryRepository ingredientsCategoryRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientCategory createIngredientCategory(String name, Long restaurantId) throws Exception {
        Restaurant restaurant=restaurantService.findRestaurantById(restaurantId);

        IngredientCategory category=new IngredientCategory();
        category.setRestaurant(restaurant);
        category.setName(name);

        return ingredientsCategoryRepository.save(category);
    }

    @Override
    public IngredientCategory findIngredientCategoryById(Long id) throws Exception {
        Optional<IngredientCategory> opt=ingredientsCategoryRepository.findById(id);

        if(opt.isEmpty()){
            throw new Exception("Ingredient Category not found");
        }

        return opt.get();
    }

    @Override
    public List<IngredientCategory> findIngredientCategoryByRestaurantId(Long id) throws Exception {
        restaurantService.findRestaurantById(id);
        return ingredientsCategoryRepository.findByRestaurantId(id);
    }

    @Override
    public IngredientsItem createIngredientsItem(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
        Restaurant restaurant=restaurantService.findRestaurantById(restaurantId);
        IngredientCategory category=findIngredientCategoryById(categoryId);

        IngredientsItem item=new IngredientsItem();
        item.setName(ingredientName);
        item.setRestaurant(restaurant);
        item.setCategory(category);

        IngredientsItem ingredient=ingredientsItemRepository.save(item);
        category.getIngredients().add(ingredient);
        return ingredient;
    }

    @Override
    public List<IngredientsItem> findRestaurantIngredients(Long restaurantId) throws Exception {
        return ingredientsItemRepository.findByRestaurantId(restaurantId);
    }

    @Override
    public IngredientsItem updateStock(Long id) throws Exception {
        Optional<IngredientsItem> opt=ingredientsItemRepository.findById(id);
        if(opt.isEmpty()){
            throw new Exception("Ingredient Item not found");
        }
        IngredientsItem ingredientsItem=opt.get();
        ingredientsItem.setStoke(!ingredientsItem.isStoke());
        return ingredientsItemRepository.save(ingredientsItem);
    }
}
