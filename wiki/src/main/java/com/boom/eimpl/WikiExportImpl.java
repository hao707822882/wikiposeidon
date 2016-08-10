package com.boom.eimpl;/**
 * Created by Administrator on 2016/8/10.
 */

import com.boom.export.WikiExport;
import com.boom.model.elastic.LolWikiItemSearch;
import com.boom.model.mongo.LolWikiContentPersistent;
import com.boom.model.mongo.LolWikiItemPersistent;
import com.boom.service.WikiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public LolWikiItemPersistent createWiki(String wiki, boolean root) {
        return wikiService.createWiki(wiki, root);
    }

    @Override
    public LolWikiItemPersistent createWikiContent(Long wikiItemId, LolWikiContentPersistent lolWikiContentPersistent) {
        return wikiService.createWikiContent(wikiItemId, lolWikiContentPersistent);
    }

    @Override
    public LolWikiItemPersistent createNewVersionWikiContent(String wiki) {
        return null;
    }

    @Override
    public List<LolWikiItemSearch> searchWiki(String query) {
        return null;
    }
}
