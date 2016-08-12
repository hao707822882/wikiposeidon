package com.boom.mondao;/**
 * Created by Administrator on 2016/8/10.
 */

import com.boom.model.mongo.LolWikiItemPersistent;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
public interface LolWikiItemPersistentDao extends MongoRepository<LolWikiItemPersistent, Long> {
    //根据名字获取wikiItem
    LolWikiItemPersistent findByName(String name);

    //根据Id获取
    List<LolWikiItemPersistent> findByIdIn(ArrayList<Long> itemIds);

}
