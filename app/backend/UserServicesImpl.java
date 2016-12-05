package com.websystique.springmvc.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Service;

import com.websystique.springmvc.model.User;

@Service("userServices")
public class UserServicesImpl implements UserServices{

    private static final AtomicLong counter = new AtomicLong();

    private static List<User> users;

    public void createUser(User user) {
        user.setId(counter.incrementAndGet());
        users.add(user);
        Register.addUser(user); // Add the user to the database
    }

    public void loginUser(User user) {

        if (doesUserExist(user)) { // check if user exists
        }
	      //log them in...
    }

    // Look up the user in the table.
    // Return true or false based on whether or not it's there.
    public boolean doesUserExist(User user) {
        if (getUserInfo(user) == null) return false;
        else return true;
    }

}
