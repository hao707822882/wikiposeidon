package com.boom.model.elastic;/**
 * Created by Administrator on 2016/8/9.
 */

import com.boom.dto.AnalyseType;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Version;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldIndex;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.io.Serializable;

/**
 * @author chen.xinghu
 *         检索使用model
 * @comment 炸弹人数据平台
 * @date 2016/8/9
 */
@Document(indexName = "wiki_lol", type = "LolWikiItemSearch", shards = 5, replicas = 0, refreshInterval = "-1", createIndex = true)
public class LolWikiItemSearch implements Serializable {

    @Id
    private String id;

    @Version
    private Long version;


    /**
     * 与wiki冠梁的组合ID
     */
    private String wikiItemContentId;

    /**
     * 标题
     */
    @Field(index = FieldIndex.analyzed, store = true, analyzer = AnalyseType.IK, searchAnalyzer = AnalyseType.IK, type = FieldType.String)
    private String name;

    /**
     * 摘要
     */
    @Field(index = FieldIndex.analyzed, store = true, analyzer = AnalyseType.IK, searchAnalyzer = AnalyseType.IK, type = FieldType.String)
    private String summary;

    public String getWikiItemContentId() {
        return wikiItemContentId;
    }

    public void setWikiItemContentId(String wikiItemContentId) {
        this.wikiItemContentId = wikiItemContentId;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getId() {
        return id;
    }

    public Long getVersion() {
        return version;
    }

    public void setVersion(Long version) {
        this.version = version;
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

    @Override
    public String toString() {
        return "LolWikiItemSearch{" +
                "id='" + id + '\'' +
                ", version=" + version +
                ", wikiItemContentId='" + wikiItemContentId + '\'' +
                ", name='" + name + '\'' +
                ", summary='" + summary + '\'' +
                '}';
    }
}
