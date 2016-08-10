package com.boom.model.mongo;/**
 * Created by Administrator on 2016/8/10.
 */

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.io.Serializable;
import java.util.List;

/**
 * @author chen.xinghu
 *         词条内容
 * @comment 炸弹人数据平台
 * @date 2016/8/10
 */
@Document
public class LolWikiContentPersistent implements Serializable {

    @Id
    private Long id;

    /**
     * 标题
     */

    private String name;

    /**
     * 摘要，检索项
     */
    private String summary;

    /**
     * 内容
     */
    private String content;

    /**
     * 词条详细项，目前版本直接用富文本编辑器
     */
    @Field("item")
    private List<?> child;

    public List<?> getChild() {
        return child;
    }

    public void setChild(List<LolWikiContentPersistent> child) {
        this.child = child;
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

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        return "LolWikiContentPersistent{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", summary='" + summary + '\'' +
                ", content='" + content + '\'' +
                ", child=" + child +
                '}';
    }
}
