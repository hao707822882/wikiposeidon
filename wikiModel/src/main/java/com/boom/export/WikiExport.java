package com.boom.export;/**
 * Created by Administrator on 2016/8/10.
 */

import com.boom.model.elastic.LolWikiItemSearch;
import com.boom.model.mongo.LolWikiContentPersistent;
import com.boom.model.mongo.LolWikiItemPersistent;

import java.util.List;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
public interface WikiExport {
    //创建词条
    LolWikiItemPersistent createWiki(String wiki, boolean root);

    //录入词条内容
    LolWikiItemPersistent createWikiContent(Long wikiItemId, Long actorId, LolWikiContentPersistent lolWikiContentPersistent);

    //创建一个新版本--》获取内容，复制一份，将子版本加入到词条关系中
    LolWikiItemPersistent createNewVersionWikiContent(Long wikiItemId, Long actorId, LolWikiContentPersistent lolWikiContentPersistent);

    //检索wiki
    List<LolWikiItemSearch> searchWiki(String query);


}
