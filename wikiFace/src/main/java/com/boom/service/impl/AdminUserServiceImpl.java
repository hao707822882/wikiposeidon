package com.boom.service.impl;


import com.boom.angel.user.export.UserService;
import com.boom.angel.user.model.BoomUser;
import com.boom.service.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author Eric
 */
@Service
public class AdminUserServiceImpl implements AdminUserService {

//    @Autowired
//    private AdminUserDao userDao;

    @Autowired
    private UserService userService;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        BoomUser login = userService.login(s);
        return login;
        //return userDao.findFirstByUsername(s);
    }

}
