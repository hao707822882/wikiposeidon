package com.boom.dto.response;/**
 * Created by Administrator on 2016/8/12.
 */

import com.boom.model.mongo.LolWikiItemPersistent;

import java.io.Serializable;
import java.util.List;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/12
 */
public class SearchWikiResponse implements Serializable {

    //与名字匹配的
    private LolWikiItemPersistent finded;

    //检索到的
    private List<LolWikiItemPersistent> searched;

    public LolWikiItemPersistent getFinded() {
        return finded;
    }

    public void setFinded(LolWikiItemPersistent finded) {
        this.finded = finded;
    }

    public List<LolWikiItemPersistent> getSearched() {
        return searched;
    }

    public void setSearched(List<LolWikiItemPersistent> searched) {
        this.searched = searched;
    }
}
