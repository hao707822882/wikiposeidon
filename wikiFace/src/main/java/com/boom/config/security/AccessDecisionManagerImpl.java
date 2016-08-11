package com.boom.config.security;

import org.springframework.security.access.AccessDecisionManager;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.ConfigAttribute;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.FilterInvocation;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.Collection;

/**
 * @author Eric
 */
@Component
public class AccessDecisionManagerImpl implements AccessDecisionManager {

    private static final String NON_ANONYMOUS_URL_PREFIX__ADMIN = "/admin";
    private static final String NON_ANONYMOUS_URL_PREFIX__HYDRA = "/angel/index.html";

    @Override
    public void decide(Authentication authentication, Object object, Collection<ConfigAttribute> configAttributes)
            throws AccessDeniedException, InsufficientAuthenticationException {
        if (authentication instanceof AnonymousAuthenticationToken) {
            FilterInvocation invocation = (FilterInvocation) object;
            HttpServletRequest request = invocation.getRequest();
            String url = request.getRequestURI();
            if (url.startsWith(NON_ANONYMOUS_URL_PREFIX__ADMIN) || url.startsWith(NON_ANONYMOUS_URL_PREFIX__HYDRA)) {
                throw new AccessDeniedException("anonymous user forbidden");
            }
        }
    }

    @Override
    public boolean supports(ConfigAttribute attribute) {
        return true;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return true;
    }

}
