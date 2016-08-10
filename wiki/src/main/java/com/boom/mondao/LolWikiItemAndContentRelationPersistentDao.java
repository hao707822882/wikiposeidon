package com.boom.mondao;/**
 * Created by Administrator on 2016/8/10.
 */

import com.boom.model.mongo.LolWikiItemAndContentRelationPersistent;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
public interface LolWikiItemAndContentRelationPersistentDao extends MongoRepository<LolWikiItemAndContentRelationPersistent, Long> {
}
