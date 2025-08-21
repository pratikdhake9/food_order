package com.example.food_order.Model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data


public class ContactInformation {
    private String email;
    private String mobile;
    private String twitter;
    private String instagram;
}
