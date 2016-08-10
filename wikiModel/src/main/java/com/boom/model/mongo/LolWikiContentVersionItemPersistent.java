package com.boom.model.mongo;/**
 * Created by Administrator on 2016/8/9.
 */

import java.io.Serializable;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/9
 */
public class LolWikiContentVersionItemPersistent implements Serializable{

    /**
     * 对应的id
     */
    private Long id;

    /**
     * 版本
     */
    private Long version;

    /**
     * 操作者ID
     */
    private Long actorId;

    /**
     * 操作时间
     */
    private Long actTime;

    /**
     * 有数据吗
     */
    private boolean hasData = false;

    public boolean isHasData() {
        return hasData;
    }

    public void setHasData(boolean hasData) {
        this.hasData = hasData;
    }

    public Long getActorId() {
        return actorId;
    }

    public void setActorId(Long actorId) {
        this.actorId = actorId;
    }

    public Long getActTime() {
        return actTime;
    }

    public void setActTime(Long actTime) {
        this.actTime = actTime;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
