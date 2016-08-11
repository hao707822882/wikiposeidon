package com.boom.service;
/**
 * Created by Administrator on 2016/8/11.
 */

import com.boom.base.rt.DateRTBean;
import com.boom.base.rt.GridRTBean;
import com.boom.dto.request.WikiContentCreateRequest;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/11
 */
public interface WikiService {

    /**
     * 分页获取wiki
     *
     * @param page
     * @param size
     * @return
     */
    GridRTBean getWikiItemByPage(Long page, Long size);


    /**
     * 创建新wiki词条
     *
     * @param wiki
     * @param id
     * @return
     */
    DateRTBean createWiki(String wiki, long id, boolean root);


    /**
     * 为词条添加内容
     *
     * @param wikiContentCreateRequest
     * @return
     */
    DateRTBean initWikiContent(Long actorId, WikiContentCreateRequest wikiContentCreateRequest);

    /**
     * 添加新版本的词条详细
     *
     * @param actorId
     * @param wikiContentCreateRequest
     * @return
     */
    DateRTBean newVersionWikiContent(long actorId, WikiContentCreateRequest wikiContentCreateRequest);

    /**
     * 删除wiki
     *
     * @param actorId
     * @param wikiContentCreateRequest
     * @return
     */
    DateRTBean delWikiItem(long actorId, WikiContentCreateRequest wikiContentCreateRequest);

    /**
     * 更新wikiContent
     *
     * @param actorId
     * @param wikiContentCreateRequest
     * @return
     */
    DateRTBean updateWikiContent(long actorId, WikiContentCreateRequest wikiContentCreateRequest);

    /**
     * 删除词条
     *
     * @param id
     * @param wikiItemId
     * @param wikiItemContentId
     * @return
     */
    DateRTBean delWikiContent(long id, Long wikiItemId, Long wikiItemContentId);

    /**
     * 删除词条项
     *
     * @param id
     * @param wikiItemId
     * @return
     */
    DateRTBean delWikiItem(long id, Long wikiItemId);
}
