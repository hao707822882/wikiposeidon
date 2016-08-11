package com.boom.model.mongo;/**
 * Created by Administrator on 2016/8/9.
 */

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.List;

/**
 * @author chen.xinghu
 *         wiki词条
 * @comment 炸弹人数据平台
 * @date 2016/8/9
 */
@Document
public class LolWikiItemPersistent implements Serializable {

    @Id
    private Long id;

    private String name;
    /**
     * 是不是根节点
     */
    private boolean root;

    /**
     * 词条创建者Id
     */
    private Long createrId;

    /**
     * 子节点
     */
    @Field(value = "childs")
    private List<Long> childs;

    /**
     * 父节点
     */
    @Field(value = "parents")
    private List<Long> parents;

    /**
     * 兄弟节点
     */
    @Field(value = "brothers")
    private List<Long> brothers;

    /**
     * 当前最新的版本号
     */
    private Long newestVersion = 1L;

    /**
     * 词条内容
     */
    @Field(value = "contentVersions")
    private List<LolWikiContentVersionItemPersistent> versions;


    public Long getCreaterId() {
        return createrId;
    }

    public void setCreaterId(Long createrId) {
        this.createrId = createrId;
    }

    public Long getNewestVersion() {
        return newestVersion;
    }

    public void setNewestVersion(Long newestVersion) {
        this.newestVersion = newestVersion;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isRoot() {
        return root;
    }

    public void setRoot(boolean root) {
        this.root = root;
    }

    public List<Long> getChilds() {
        return childs;
    }

    public void setChilds(List<Long> childs) {
        this.childs = childs;
    }

    public List<Long> getParents() {
        return parents;
    }

    public void setParents(List<Long> parents) {
        this.parents = parents;
    }

    public List<Long> getBrothers() {
        return brothers;
    }

    public void setBrothers(List<Long> brothers) {
        this.brothers = brothers;
    }

    public List<LolWikiContentVersionItemPersistent> getVersions() {
        return versions;
    }

    public void setVersions(List<LolWikiContentVersionItemPersistent> versions) {
        this.versions = versions;
    }

    @Override
    public String toString() {
        return "LolWikiItemPersistent{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", root=" + root +
                ", childs=" + childs +
                ", parents=" + parents +
                ", brothers=" + brothers +
                ", newestVersion=" + newestVersion +
                ", versions=" + versions +
                '}';
    }
}
