package ch.bbw.backend;

import org.springframework.web.bind.annotation.*;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ch.bbw.backend.JwtUserDetailsService;


import ch.bbw.backend.JwtTokenUtil;
import ch.bbw.backend.JwtRequest;
import ch.bbw.backend.JwtResponse;
import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.nio.charset.StandardCharsets;
import java.security.NoSuchAlgorithmException;

@RestController
@CrossOrigin
public class Controller {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

        final UserDetails userDetails = userDetailsService
                .loadUserByUsername(authenticationRequest.getUsername());

        final String token = jwtTokenUtil.generateToken(userDetails);

        return ResponseEntity.ok(new JwtResponse(token));
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }





    /*
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

    @PostMapping("/add")
    public void addPassword() {

    }

    @PutMapping("/change")
    public void changeMaster() {

    }
*/
    /*
    //generateKey();
    String content = "Name: Schucan\n" +
            "Vorname: Maurin\n" +
            "Klasse: 5IA20b";
        try {
        byte[] data = content.getBytes(StandardCharsets.UTF_8);//...data to encrypt
        Cipher cipher = Cipher.getInstance("RSA");
        //cipher.init(Cipher.ENCRYPT_MODE, publicKey);
        byte[] bytesToSend = cipher.doFinal(data);

        byte[] bytesReceived = bytesToSend;

        Cipher cipherDecrypt = Cipher.getInstance("RSA");
        //cipherDecrypt.init(Cipher.DECRYPT_MODE, privateKey);
        byte[] decrypted = cipherDecrypt.doFinal(bytesReceived);
        System.out.println(new String((decrypted)));
    } catch (
    NoSuchPaddingException e) {
        e.printStackTrace();
    } catch (
    IllegalBlockSizeException e) {
        e.printStackTrace();
    } catch (
    NoSuchAlgorithmException e) {
        e.printStackTrace();
    } catch (
    BadPaddingException e) {
        e.printStackTrace();
    }*/
}
