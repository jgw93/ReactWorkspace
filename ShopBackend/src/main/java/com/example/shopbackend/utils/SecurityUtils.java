package com.example.shopbackend.utils;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

public class SecurityUtils {
    private static final String ROLE_PREFIX = "ROLE_";

    public static SimpleGrantedAuthority convertToAuthority(String role){
        String formatRole = role.startsWith(ROLE_PREFIX)? role: ROLE_PREFIX + role;
        return new SimpleGrantedAuthority(formatRole);
    }
}
