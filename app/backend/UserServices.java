 import java.util.List;
  
public interface UserService {
     
    void createUser(User user);
     
    void loginUser(User user);
     
    public boolean doesUserExist(User user);
     
}
