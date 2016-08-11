package com.boom;/**
 * Created by Administrator on 2016/8/11.
 */

import org.hibernate.validator.HibernateValidator;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.context.embedded.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;

import javax.servlet.MultipartConfigElement;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/11
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackageClasses = WikiFaceStarter.class)
@ImportResource(value = {"classpath:META-INF/spring/boom-wiki-consumer.xml"})
public class WikiFaceStarter {

    public static void main(String[] args) {
        SpringApplication.run(WikiFaceStarter.class, args);
    }

    @Bean
    public LocalValidatorFactoryBean validator() {
        LocalValidatorFactoryBean localValidatorFactoryBean = new LocalValidatorFactoryBean();
        localValidatorFactoryBean.setProviderClass(HibernateValidator.class);
        return localValidatorFactoryBean;
    }

    @Bean
    public MultipartConfigElement multipartConfigElement() {
        MultipartConfigFactory factory = new MultipartConfigFactory();
        factory.setMaxRequestSize(Long.MAX_VALUE);
        return factory.createMultipartConfig();
    }
}
