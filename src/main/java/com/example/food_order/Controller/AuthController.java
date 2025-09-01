package com.example.food_order.Controller;

import com.example.food_order.Config.JwtProvider;
import com.example.food_order.Model.Cart;
import com.example.food_order.Model.User;
import com.example.food_order.Repository.CartRepository;
import com.example.food_order.Repository.UserRepository;
import com.example.food_order.Request.LoginRequest;
import com.example.food_order.Response.AuthResponse;
import com.example.food_order.User_Role;
import com.example.food_order.service.CustomerUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtProvider jwtProvider;
    @Autowired
    private CustomerUserDetailService customerUserDetailService;
    @Autowired
    private CartRepository cartRepository;

    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception {

        User isEmailExist=userRepository.findByEmail(user.getEmail());
        if(isEmailExist!=null){
            throw new Exception("email is already used with another account");

        }
        User createdUser=new User();
        createdUser.setEmail(user.getEmail());
        createdUser.setFullName(user.getFullName());
        createdUser.setRole(user.getRole());
        createdUser.setPassword(passwordEncoder.encode(user.getPassword()));

        User savedUser= userRepository.save(createdUser);

        Cart cart=new Cart();
        cart.setCustomer(savedUser);
        cartRepository.save(cart);

        Authentication authentication=new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt=jwtProvider.generateToken(authentication);

        AuthResponse authresponse=new AuthResponse();
        authresponse.setJwt(jwt);
        authresponse.setMessage("Register Successfully");
        authresponse.setRole(savedUser.getRole());


        return new ResponseEntity<>(authresponse, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
   public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest req) {

        String username= req.getEmail();
        String password=req.getPassword();

        Authentication authentication=authenticate(username,password);
       Collection<? extends GrantedAuthority> authorities=authentication.getAuthorities();

       String role=authorities.isEmpty()?null:authorities.iterator().next().getAuthority();
       String jwt=jwtProvider.generateToken(authentication);

       AuthResponse authresponse=new AuthResponse();
       authresponse.setJwt(jwt);
       authresponse.setMessage("Register Successfully");
       authresponse.setRole(User_Role.valueOf(role));


       return new ResponseEntity<>(authresponse, HttpStatus.OK);
   }

    private Authentication authenticate(String username, String password) {
        UserDetails userDetails= customerUserDetailService.loadUserByUsername(username);

        if(userDetails==null){
            throw new BadCredentialsException("Invalid username...");
        }
        if(!passwordEncoder.matches(password,userDetails.getPassword())){
            throw new BadCredentialsException("Invalid password...");
        }

        return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
    }

}
