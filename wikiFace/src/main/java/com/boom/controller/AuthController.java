package com.boom.controller;


import com.boom.angel.user.model.BoomUser;
import com.boom.dto.BoomUserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * ━━━━━━神兽出没━━━━━━
 * 　　　┏┓　　　┏┓
 * 　　┏┛┻━━━┛┻┓
 * 　　┃　　　　　　　┃
 * 　　┃　　　━　　　┃
 * 　　┃　┳┛　┗┳　┃
 * 　　┃　　　　　　　┃
 * 　　┃　　　┻　　　┃
 * 　　┃　　　　　　　┃
 * 　　┗━┓　　　┏━┛
 * 　　　　┃　　　┃神兽保佑, 永无BUG!
 * 　　　　┃　　　┃Code is far away from bug with the animal protecting
 * 　　　　┃　　　┗━━━┓
 * 　　　　┃　　　　　　　┣┓
 * 　　　　┃　　　　　　　┏┛
 * 　　　　┗┓┓┏━┳┓┏┛
 * 　　　　　┃┫┫　┃┫┫
 * 　　　　　┗┻┛　┗┻┛
 * ━━━━━━感觉萌萌哒━━━━━━
 * Module Desc:clover
 * User: z.mm | 2428922347@qq.com
 * Date: 2016/3/4
 * Time: 10:11
 * state:
 */
@RestController
public class AuthController {

    @RequestMapping(value = "/admin/statue", method = {RequestMethod.POST, RequestMethod.GET})
    public BoomUserDto authStatue() {
        final BoomUser adminuser = (BoomUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        BoomUserDto target = new BoomUserDto();
        BeanUtils.copyProperties(adminuser, target);
        return target;
    }

}
