package num.edu.freelanceHub.service;

import num.edu.freelanceHub.model.User;
import num.edu.freelanceHub.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepo;

    public User register(User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return userRepo.save(user);
    }

    public User login(String email, String rawPassword) {
        User user = userRepo.findByEmail(email).orElseThrow(() -> new RuntimeException("User not found"));
        if (new BCryptPasswordEncoder().matches(rawPassword, user.getPassword())) {
            return user;
        } else {
            throw new RuntimeException("Invalid password");
        }
    }
}
