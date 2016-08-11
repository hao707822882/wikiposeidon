package com.boom.dto.request;/**
 * Created by Administrator on 2016/8/11.
 */

import java.io.Serializable;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/11
 */
public class WikiItemCreateRequest implements Serializable {

    /**
     * 词条
     */
    private String wiki;

    private boolean root;

    public boolean isRoot() {
        return root;
    }

    public void setRoot(boolean root) {
        this.root = root;
    }

    public String getWiki() {
        return wiki;
    }

    public void setWiki(String wiki) {
        this.wiki = wiki;
    }
}
