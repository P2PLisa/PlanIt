package com.websystique.springmvc.service;
 
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
 
import org.springframework.stereotype.Service;
 
import com.websystique.springmvc.model.User;
 
@Service("userServices")
public class UserServicseImpl implements UserServices{
     
    private static final AtomicLong counter = new AtomicLong();
     
    private static List<User> users;
     
    public void createUser(User user) {
        user.setId(counter.incrementAndGet());
        users.add(user);
    }

    public void loginUser(User user) {
	//TODO check if user exists
	//log them in...
    }

    public boolean doesUserExist(User user) {
        return false; //TODO change this
    }
 
}
