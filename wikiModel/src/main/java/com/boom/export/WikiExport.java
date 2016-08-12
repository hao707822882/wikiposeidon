package com.boom.export;/**
 * Created by Administrator on 2016/8/10.
 */

import com.boom.base.rt.DateRTBean;
import com.boom.base.rt.GridRTBean;
import com.boom.model.elastic.LolWikiItemSearch;
import com.boom.model.mongo.LolWikiContentPersistent;
import com.boom.model.mongo.LolWikiItemPersistent;

import java.util.ArrayList;
import java.util.List;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
public interface WikiExport {
    //创建词条
    LolWikiItemPersistent createWiki(String wiki, Long creatorId, boolean root);

    //录入词条内容
    LolWikiItemPersistent createWikiContent(Long wikiItemId, Long actorId, LolWikiContentPersistent lolWikiContentPersistent);

    //创建一个新版本--》获取内容，复制一份，将子版本加入到词条关系中
    LolWikiItemPersistent createNewVersionWikiContent(Long wikiItemId, Long actorId, LolWikiContentPersistent lolWikiContentPersistent);

    //检索wiki
    List<LolWikiItemSearch> searchWiki(String query);

    //获取词条
    GridRTBean getWikiItemByPage(Long page, Long size);

    //删除词条
    DateRTBean delWikiItem(long actorId, Long wikiItemId);

    //删除词条项
    DateRTBean delWikiContent(long actorId, Long wikiItemId, Long wikiItemContentId);

    //更新词条
    DateRTBean updateWikiContent(long actorId, Long wikiItemId, LolWikiContentPersistent wikiContent);

    //根据词条查找wiki
    LolWikiItemPersistent getWikiItemByName(String search);

    //根据IDs 获取词条列表
    List<LolWikiItemPersistent> getWikiItemById(ArrayList<Long> itemIds);

    //根据id获取词条
    LolWikiItemPersistent getWikiItemById(Long itemId);
}
