package com.boom.dto;/**
 * Created by Administrator on 2016/6/16.
 */

import com.boom.angel.user.model.BoomRole;
import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;
import java.util.Collection;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/6/16
 */
public class BoomUserDto implements Serializable {

    private long id;

    private String username;

    private String password;

    private boolean enabled;
    /**
     * 阿坤
     */
    private String name;

    /**
     * 头像
     */
    private String img;

    /**
     * 权限
     */
    private Collection<? extends GrantedAuthority> authorities;

    /**
     * 角色：包含若干权限
     */
    private Collection<? extends BoomRole> roles;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    public Collection<? extends BoomRole> getRoles() {
        return roles;
    }

    public void setRoles(Collection<? extends BoomRole> roles) {
        this.roles = roles;
    }
}
