package com.example.symptomsapi.config;

import com.example.symptomsapi.entity.User;

import com.example.symptomsapi.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Bean
    public UserDetailsService userDetailsService() {
        return new UserService();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(userDetailsService());
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors().disable().authorizeRequests()
                .and()
                .csrf().disable().authorizeRequests()
                //Доступ только для не зарегистрированных пользователей
//                    .antMatchers("/shop/**").hasRole("ADMIN")
//                    .antMatchers("/customer/**").hasRole("USER")
                .and()
                .formLogin().successHandler(new AuthenticationSuccessHandler() {
                    @Override
                    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                        response.setStatus(200);
                        User user = (User)authentication.getPrincipal();
                        response.getWriter().print("{\"role\":\""+user.getUsername()+"\"}");


                        //response.getWriter().print("{\"status\":\"success\"}");
                        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                        response.setHeader("Access-Control-Allow-Origin", ((HttpServletRequest) request).getHeader("Origin"));
                        response.setHeader("Access-Control-Allow-Credentials", "true");
                    }
                }).failureHandler(new AuthenticationFailureHandler() {
                    @Override
                    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
                        response.setStatus(403);
                        response.getWriter().print(request.getParameter("username")+ request.getParameter("password"));
                        //response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                        response.setHeader("Access-Control-Allow-Origin", ((HttpServletRequest) request).getHeader("Origin"));
                        response.setHeader("Access-Control-Allow-Credentials", "true");
                    }
                })
                .usernameParameter("username")
                .and()
                .logout()
                .logoutSuccessHandler(new LogoutSuccessHandler() {
                    @Override
                    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                        response.setStatus(200);
                        response.getWriter().print("{\"status\":\"success\"}");
                        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
                        response.setHeader("Access-Control-Allow-Origin", ((HttpServletRequest) request).getHeader("Origin"));
                        response.setHeader("Access-Control-Allow-Credentials", "true");

                        Cookie cookie = new Cookie("AuthToken", null);
                        cookie.setMaxAge(0);
                        response.addCookie(cookie);
                    }
                })
                .logoutUrl("/logout")
                .logoutSuccessUrl("/").permitAll();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }
}
