package com.boom.dto.request;/**
 * Created by Administrator on 2016/8/11.
 */

import com.boom.model.mongo.LolWikiContentPersistent;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/11
 */
public class WikiContentCreateRequest {

    //wiki词条Id
    private Long wikiItemId;

    //wiki详细内容
    private LolWikiContentPersistent wikiContent;


    public Long getWikiItemId() {
        return wikiItemId;
    }

    public void setWikiItemId(Long wikiItemId) {
        this.wikiItemId = wikiItemId;
    }

    public LolWikiContentPersistent getWikiContent() {
        return wikiContent;
    }

    public void setWikiContent(LolWikiContentPersistent wikiContent) {
        this.wikiContent = wikiContent;
    }
}
