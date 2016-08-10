package com.boom.esdao;/**
 * Created by Administrator on 2016/8/9.
 */

import com.boom.model.elastic.LolWikiItemSearch;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

import java.util.List;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/9
 */
public interface LolWikiItemSearchESDao extends ElasticsearchRepository<LolWikiItemSearch, Long> {

    List<LolWikiItemSearch> findByNameLike(String content);

    List<LolWikiItemSearch> findBySummaryLike(String summary);

}
