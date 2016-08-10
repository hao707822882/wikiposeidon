package com.boom;/**
 * Created by Administrator on 2016/8/9.
 */

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/9
 */
@SpringBootApplication
@EnableElasticsearchRepositories(basePackages = {"com.boom.esdao"})
@EnableMongoRepositories(basePackages = "com.boom.mondao")
@ComponentScan(basePackages = "com.boom")
@ImportResource(value = {"classpath:META-INF/spring/boom-wiki-provider.xml"})
public class Application {

    public static void main(String[] args) throws Exception {
        SpringApplication springApplication = new SpringApplication(Application.class);
        springApplication.setWebEnvironment(false);
        springApplication.run(args);
        System.in.read();
    }
}
