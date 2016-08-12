package com.boom.eimpl;/**
 * Created by Administrator on 2016/8/10.
 */

import com.boom.base.rt.DateRTBean;
import com.boom.base.rt.GridRTBean;
import com.boom.export.WikiExport;
import com.boom.model.elastic.LolWikiItemSearch;
import com.boom.model.mongo.LolWikiContentPersistent;
import com.boom.model.mongo.LolWikiItemPersistent;
import com.boom.service.WikiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
@Service
public class WikiExportImpl implements WikiExport {

    @Autowired
    private WikiService wikiService;

    @Override
    public LolWikiItemPersistent createWiki(String wiki, Long creatorId, boolean root) {
        return wikiService.createWiki(wiki, creatorId, root);
    }

    @Override
    public LolWikiItemPersistent createWikiContent(Long wikiItemId, Long actorId, LolWikiContentPersistent lolWikiContentPersistent) {
        return wikiService.createWikiContent(wikiItemId, actorId, lolWikiContentPersistent);
    }

    @Override
    public LolWikiItemPersistent createNewVersionWikiContent(Long wikiItemId, Long actorId, LolWikiContentPersistent lolWikiContentPersistent) {
        return wikiService.createNewVersionWikiContent(wikiItemId, actorId, lolWikiContentPersistent);
    }

    @Override
    public List<LolWikiItemSearch> searchWiki(String query) {
        return wikiService.searchWiki(query);
    }

    @Override
    public GridRTBean getWikiItemByPage(Long page, Long size) {
        page = page == null ? 0 : page;
        size = size == null ? 0 : size;
        Pageable pageable = new PageRequest(page.intValue(), size.intValue());
        return wikiService.getWikiItemByPage(pageable);
    }

    @Override
    public DateRTBean delWikiItem(long actorId, Long wikiItemId) {
        return wikiService.delWikiItem(actorId, wikiItemId);
    }

    @Override
    public DateRTBean delWikiContent(long actorId, Long wikiItemId, Long wikiItemContentId) {
        return wikiService.delWikiContent(actorId, wikiItemId, wikiItemContentId);
    }

    @Override
    public DateRTBean updateWikiContent(long actorId, Long wikiItemId, LolWikiContentPersistent wikiContent) {
        return wikiService.updateWikiContent(actorId, wikiItemId, wikiContent);
    }

    @Override
    public LolWikiItemPersistent getWikiItemByName(String name) {
        return wikiService.getWikiItemByName(name);
    }

    @Override
    public List<LolWikiItemPersistent> getWikiItemById(ArrayList<Long> itemIds) {
        return wikiService.getWikiItemByIds(itemIds);
    }

    @Override
    public LolWikiItemPersistent getWikiItemById(Long itemId) {
        return wikiService.getWikiItemById(itemId);
    }
}
