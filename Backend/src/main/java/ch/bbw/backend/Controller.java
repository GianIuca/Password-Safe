package ch.bbw.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/login/{username}/{password}")
    public boolean login(@PathVariable String username, @PathVariable String password) {
        String usernameFile = "";
        String passwordFile = "";

        if (username.equals(usernameFile) && password.equals(passwordFile)) {
            return true;
        }
        return false;
    }

    @GetMapping("/list")
    public String[] getPasswordList() {
        String[] list = new String[1];

        return list;
    }
}
