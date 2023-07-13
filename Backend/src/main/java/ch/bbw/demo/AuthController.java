package ch.bbw.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @PostMapping("/change-password")
    public boolean changePassword(@RequestBody ChangePasswordRequest changePasswordRequest, @RequestParam String masterPassword) {
        if (changePasswordRequest.getOldPassword().equals(masterPassword)) {
            // Update the master password
            masterPassword = changePasswordRequest.getNewPassword();
            return true;
        }
        return false;
    }
}
