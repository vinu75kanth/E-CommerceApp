package com.example.BackEnd.Filter;

import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class FirstFilter extends OncePerRequestFilter {
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            filterChain.doFilter(request, response);
        }
        catch (ExpiredJwtException e){
            //response.setStatus(403);
            //response.sendError(HttpServletResponse.SC_UNAUTHORIZED, e.getMessage());
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.getOutputStream().println(e.getMessage());
            //response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
        }
        catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}
