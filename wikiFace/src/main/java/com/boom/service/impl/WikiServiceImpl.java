package com.boom.service.impl;/**
 * Created by Administrator on 2016/8/11.
 */

import com.boom.base.rt.DateRTBean;
import com.boom.base.rt.GridRTBean;
import com.boom.dto.request.WikiContentCreateRequest;
import com.boom.export.WikiExport;
import com.boom.model.mongo.LolWikiItemPersistent;
import com.boom.service.WikiService;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/11
 */
public class WikiServiceImpl implements WikiService {

    @Autowired
    private WikiExport wikiExport;

    @Override
    public GridRTBean getWikiItemByPage(Long page, Long size) {
        return wikiExport.getWikiItemByPage(page, size);
    }

    @Override
    public DateRTBean createWiki(String wiki, long id, boolean root) {
        LolWikiItemPersistent wiki1 = wikiExport.createWiki(wiki, id, root);
        return DateRTBean.newInstance(false, "", wiki1);
    }

    @Override
    public DateRTBean initWikiContent(Long actorId, WikiContentCreateRequest wikiContentCreateRequest) {
        LolWikiItemPersistent wikiContent
                = wikiExport.createWikiContent(wikiContentCreateRequest.getWikiItemId(), actorId, wikiContentCreateRequest.getWikiContent());
        return DateRTBean.newInstance(false, "", wikiContent);
    }

    @Override
    public DateRTBean newVersionWikiContent(long actorId, WikiContentCreateRequest wikiContentCreateRequest) {
        LolWikiItemPersistent wikiContent
                = wikiExport.createNewVersionWikiContent(wikiContentCreateRequest.getWikiItemId(), actorId, wikiContentCreateRequest.getWikiContent());
        return DateRTBean.newInstance(false, "", wikiContent);
    }

    @Override
    public DateRTBean delWikiItem(long actorId, WikiContentCreateRequest wikiContentCreateRequest) {
        return delWikiItem(actorId, wikiContentCreateRequest.getWikiItemId());
    }

    @Override
    public DateRTBean updateWikiContent(long actorId, WikiContentCreateRequest wikiContentCreateRequest) {
        return wikiExport.updateWikiContent(actorId, wikiContentCreateRequest.getWikiItemId(), wikiContentCreateRequest.getWikiContent());
    }

    @Override
    public DateRTBean delWikiContent(long actorId, Long wikiItemId, Long wikiItemContentId) {
        return wikiExport.delWikiContent(actorId, wikiItemId, wikiItemContentId);
    }

    @Override
    public DateRTBean delWikiItem(long actorId, Long wikiItemId) {
        return wikiExport.delWikiItem(actorId, wikiItemId);
    }
}
