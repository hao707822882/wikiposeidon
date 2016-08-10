package com.boom.service;/**
 * Created by Administrator on 2016/8/10.
 */

import com.boom.esdao.LolWikiItemSearchESDao;
import com.boom.export.IdGenerate;
import com.boom.model.elastic.LolWikiItemSearch;
import com.boom.model.mongo.LolWikiContentPersistent;
import com.boom.model.mongo.LolWikiItemPersistent;
import com.boom.mondao.LolWikiContentPersistentDao;
import com.boom.mondao.LolWikiItemAndContentRelationPersistentDao;
import com.boom.mondao.LolWikiItemPersistentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
@Service
public class WikiService {
    @Autowired
    private LolWikiItemSearchESDao lolWikiItemSearchESDao;

    @Autowired
    private LolWikiContentPersistentDao lolWikiContentPersistentDao;

    @Autowired
    private LolWikiItemPersistentDao lolWikiItemPersistentDao;

    @Autowired
    private LolWikiItemAndContentRelationPersistentDao lolWikiItemAndContentRelationPersistentDao;

    @Autowired
    private IdGenerate idGenerate;


    public LolWikiItemPersistent createWiki(String wiki, boolean root) {
        Long id = idGenerate.getId();

        LolWikiItemPersistent lolWikiItemPersistent = new LolWikiItemPersistent();
        lolWikiItemPersistent.setName(wiki);
        lolWikiItemPersistent.setId(id);
        lolWikiItemPersistent.setRoot(root);

        LolWikiItemPersistent save = lolWikiItemPersistentDao.save(lolWikiItemPersistent);
        return save;
    }

    /**
     * 创建每个词条的第一版
     *
     * @param wikiItemId
     * @param lolWikiContentPersistent
     * @return
     */
    public LolWikiItemPersistent createWikiContent(Long wikiItemId, LolWikiContentPersistent lolWikiContentPersistent) {
        //保存mongodb
        Long id = idGenerate.getId();
        lolWikiContentPersistent.setId(id);
        LolWikiContentPersistent save = lolWikiContentPersistentDao.save(lolWikiContentPersistent);
        //保存es,独立一个字段专门是用来做检索的
        LolWikiItemSearch lolWikiItemSearch = new LolWikiItemSearch();
        lolWikiItemSearch.setName(lolWikiContentPersistent.getName());
        //这个ID里包含词条ID和词条详情ID
//        lolWikiItemSearch.setId();
        //建立关联关系
        //在词条目录添加版本
        return null;
    }
}
