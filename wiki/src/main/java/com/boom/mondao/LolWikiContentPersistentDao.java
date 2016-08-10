package com.boom.mondao;/**
 * Created by Administrator on 2016/8/10.
 */

import com.boom.model.mongo.LolWikiContentPersistent;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
public interface LolWikiContentPersistentDao extends MongoRepository<LolWikiContentPersistent, Long> {
    LolWikiContentPersistent findByName(String s);
}
