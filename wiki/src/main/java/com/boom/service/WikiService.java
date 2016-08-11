package com.boom.service;/**
 * Created by Administrator on 2016/8/10.
 */

import com.boom.base.rt.DateRTBean;
import com.boom.base.rt.GridRTBean;
import com.boom.esdao.LolWikiItemSearchESDao;
import com.boom.export.IdGenerate;
import com.boom.model.elastic.LolWikiItemSearch;
import com.boom.model.mongo.LolWikiContentPersistent;
import com.boom.model.mongo.LolWikiContentVersionItemPersistent;
import com.boom.model.mongo.LolWikiItemAndContentRelationPersistent;
import com.boom.model.mongo.LolWikiItemPersistent;
import com.boom.mondao.LolWikiContentPersistentDao;
import com.boom.mondao.LolWikiItemAndContentRelationPersistentDao;
import com.boom.mondao.LolWikiItemPersistentDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
@Service
public class WikiService {

    public static final String ID_PREFIX = "_";

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


    public LolWikiItemPersistent createWiki(String wiki, Long creatorId, boolean root) {
        Long id = idGenerate.getId();

        LolWikiItemPersistent lolWikiItemPersistent = new LolWikiItemPersistent();
        lolWikiItemPersistent.setName(wiki);
        lolWikiItemPersistent.setId(id);
        lolWikiItemPersistent.setCreaterId(creatorId);
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
    public LolWikiItemPersistent createWikiContent(Long wikiItemId, Long actorId, LolWikiContentPersistent lolWikiContentPersistent) {

        //保存mongodb
        Long id = idGenerate.getId();
        lolWikiContentPersistent.setId(id);
        LolWikiContentPersistent save = lolWikiContentPersistentDao.save(lolWikiContentPersistent);

        //保存es,独立一个字段专门是用来做检索的
        LolWikiItemSearch lolWikiItemSearch = new LolWikiItemSearch();
        lolWikiItemSearch.setName(lolWikiContentPersistent.getName());
        lolWikiItemSearch.setSummary(lolWikiContentPersistent.getSummary());

        //这个ID里包含词条ID和词条详情ID
        lolWikiItemSearch.setWikiItemContentId(getSearchId(wikiItemId, id));
        lolWikiItemSearchESDao.save(lolWikiItemSearch);

        //建立关联关系
        LolWikiItemAndContentRelationPersistent lolWikiItemAndContentRelationPersistent = new LolWikiItemAndContentRelationPersistent();
        lolWikiItemAndContentRelationPersistent.setItemId(wikiItemId);
        lolWikiItemAndContentRelationPersistent.setContentId(id);
        lolWikiItemAndContentRelationPersistentDao.save(lolWikiItemAndContentRelationPersistent);

        //添加版本信息
        LolWikiContentVersionItemPersistent lolWikiContentVersionItemPersistent = new LolWikiContentVersionItemPersistent();
        lolWikiContentVersionItemPersistent.setId(id);
        lolWikiContentVersionItemPersistent.setActorId(actorId);
        lolWikiContentVersionItemPersistent.setActTime(new Date().getTime());
        lolWikiContentVersionItemPersistent.setHasData(true);
        lolWikiContentVersionItemPersistent.setVersion(1L);
        LolWikiItemPersistent one = lolWikiItemPersistentDao.findOne(wikiItemId);
        one.setNewestVersion(1L);
        List<LolWikiContentVersionItemPersistent> versions = one.getVersions();
        if (versions == null) {
            versions = new ArrayList<>();
            versions.add(lolWikiContentVersionItemPersistent);
            one.setVersions(versions);
        } else {
            versions.add(lolWikiContentVersionItemPersistent);
        }

        //在词条目录添加版本
        LolWikiItemPersistent save1 = lolWikiItemPersistentDao.save(one);
        return save1;
    }


    private String getSearchId(Long itemId, Long contentId) {
        return itemId + ID_PREFIX + contentId;
    }

    /**
     * -1 表示没有
     *
     * @param searchId
     * @return
     */
    private Long getWikiItemId(String searchId) {
        String[] split = searchId.split(ID_PREFIX);
        if (split.length > 1) {
            return Long.parseLong(split[0]);
        } else {
            return -1L;
        }
    }

    public LolWikiItemPersistent createNewVersionWikiContent(Long wikiItemId, Long actorId, LolWikiContentPersistent lolWikiContentPersistent) {
        //保存新版本
        Long id = idGenerate.getId();
        lolWikiContentPersistent.setId(id);
        LolWikiContentPersistent save = lolWikiContentPersistentDao.save(lolWikiContentPersistent);

        //添加搜索信息
        //保存es,独立一个字段专门是用来做检索的
        LolWikiItemSearch lolWikiItemSearch = new LolWikiItemSearch();
        lolWikiItemSearch.setName(lolWikiContentPersistent.getName());
        lolWikiItemSearch.setSummary(lolWikiContentPersistent.getSummary());
        //这个ID里包含词条ID和词条详情ID
        lolWikiItemSearch.setWikiItemContentId(getSearchId(wikiItemId, id));
        lolWikiItemSearchESDao.save(lolWikiItemSearch);

        //建立关联关系
        LolWikiItemAndContentRelationPersistent lolWikiItemAndContentRelationPersistent = new LolWikiItemAndContentRelationPersistent();
        lolWikiItemAndContentRelationPersistent.setItemId(wikiItemId);
        lolWikiItemAndContentRelationPersistent.setContentId(id);
        lolWikiItemAndContentRelationPersistentDao.save(lolWikiItemAndContentRelationPersistent);


        //添加版本信息
        LolWikiContentVersionItemPersistent lolWikiContentVersionItemPersistent = new LolWikiContentVersionItemPersistent();
        lolWikiContentVersionItemPersistent.setId(id);
        lolWikiContentVersionItemPersistent.setActorId(actorId);
        lolWikiContentVersionItemPersistent.setActTime(new Date().getTime());
        lolWikiContentVersionItemPersistent.setHasData(true);
        LolWikiItemPersistent one = lolWikiItemPersistentDao.findOne(wikiItemId);
        lolWikiContentVersionItemPersistent.setVersion(one.getNewestVersion() + 1);
        one.setNewestVersion(one.getNewestVersion() == null ? 1 : (one.getNewestVersion() + 1));
        List<LolWikiContentVersionItemPersistent> versions = one.getVersions();
        if (versions == null) {
            versions = new ArrayList<>();
            versions.add(lolWikiContentVersionItemPersistent);
            one.setVersions(versions);
        } else {
            versions.add(lolWikiContentVersionItemPersistent);
        }
        LolWikiItemPersistent save1 = lolWikiItemPersistentDao.save(one);
        return save1;
    }

    public List<LolWikiItemSearch> searchWiki(String query) {
        List<LolWikiItemSearch> bySummaryLike = lolWikiItemSearchESDao.findBySummaryLike(query);
        return bySummaryLike;
    }

    public GridRTBean getWikiItemByPage(Pageable pageable) {
        Page<LolWikiItemPersistent> all = lolWikiItemPersistentDao.findAll(pageable);
        return pageToGrid(all, pageable, "获取词条分页数据失败");
    }

    private GridRTBean pageToGrid(Page<LolWikiItemPersistent> all, Pageable pageable, String msg) {
        if (all == null) {
            return GridRTBean.newInstance(true, msg, null);
        }
        return GridRTBean.newInstance(all.getTotalElements(), Integer.valueOf(all.getTotalPages()).longValue(), Integer.valueOf(pageable.getPageNumber()).longValue(), pageable.getPageSize(), false, "", all.getContent());
    }

    public DateRTBean delWikiItem(long actorId, Long wikiItemId) {
        //删除 mongo
        LolWikiItemPersistent one = lolWikiItemPersistentDao.findOne(wikiItemId);
        List<LolWikiContentVersionItemPersistent> versions = one.getVersions();
        if (versions != null) {
            for (LolWikiContentVersionItemPersistent version : versions) {
                delWikiContent(actorId, version.getId(), wikiItemId);
                Long delNum = lolWikiItemSearchESDao.deleteByWikiItemContentId(getSearchId(wikiItemId, version.getId()));
            }
        }
        //删除 es
        return DateRTBean.newInstance(false, "", null);
    }

    public DateRTBean delWikiContent(Long actorid, Long wikiContentId, Long wikiItemContentId) {
        lolWikiContentPersistentDao.delete(wikiContentId);
        return DateRTBean.newInstance(false, "删除词条项成功！", null);
    }


    public DateRTBean updateWikiContent(long actorId, Long wikiItemId, LolWikiContentPersistent wikiContent) {
        return null;
    }
}
