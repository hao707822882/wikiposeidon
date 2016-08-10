package com.boom.model.mongo;/**
 * Created by Administrator on 2016/8/10.
 */

import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;

/**
 * @author chen.xinghu
 *         词条与内容联系，根据es检索到的获取根词条
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
@Document
public class LolWikiItemAndContentRelationPersistent implements Serializable {

    /**
     * 词条ID
     */
    private Long itemId;

    /**
     * 内容ID
     */
    private Long contentId;

    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    public Long getContentId() {
        return contentId;
    }

    public void setContentId(Long contentId) {
        this.contentId = contentId;
    }
}
