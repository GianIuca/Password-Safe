package ch.bbw.demo;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PasswordController {
    private List<PasswordEntry> passwordEntries = new ArrayList<>();
    private String masterUsername = "admin";
    private String masterPassword = "admin";

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        if (loginRequest.getUsername().equals(masterUsername) && loginRequest.getPassword().equals(masterPassword)) {
            HttpHeaders headers = new HttpHeaders();
            headers.set("Access-Control-Allow-Origin", "http://localhost:3000");
            return ResponseEntity.ok().headers(headers).body("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }



    @GetMapping("/passwords")
    public List<PasswordEntry> getPasswords() {
        return passwordEntries;
    }

    @PostMapping("/passwords")
    public ResponseEntity<String> addPassword(@RequestBody PasswordEntry passwordEntry) {
        passwordEntries.add(passwordEntry);
        return ResponseEntity.ok("Password added successfully");
    }

    @PutMapping("/passwords/{id}")
    public ResponseEntity<String> updatePassword(@PathVariable("id") int id, @RequestBody PasswordEntry passwordEntry) {
        if (id >= 0 && id < passwordEntries.size()) {
            passwordEntries.set(id, passwordEntry);
            return ResponseEntity.ok("Password updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Password entry not found");
        }
    }

    @DeleteMapping("/passwords/{id}")
    public ResponseEntity<String> deletePassword(@PathVariable("id") int id) {
        if (id >= 0 && id < passwordEntries.size()) {
            passwordEntries.remove(id);
            return ResponseEntity.ok("Password deleted successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Password entry not found");
        }
    }

    @PutMapping("/master-password")
    public ResponseEntity<String> changeMasterPassword(@RequestBody ChangePasswordRequest changePasswordRequest) {
        if (changePasswordRequest.getUsername().equals(masterUsername) && changePasswordRequest.getPassword().equals(masterPassword)) {
            masterPassword = changePasswordRequest.getNewPassword();
            return ResponseEntity.ok("Master password changed successfully");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }
    }
}
