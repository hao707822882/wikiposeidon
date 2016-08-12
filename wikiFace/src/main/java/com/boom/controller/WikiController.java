package com.boom.controller;/**
 * Created by Administrator on 2016/8/11.
 */

import com.boom.angel.user.model.BoomUser;
import com.boom.base.rq.Page;
import com.boom.base.rt.DateRTBean;
import com.boom.base.rt.GridRTBean;
import com.boom.dto.request.WikiContentCreateRequest;
import com.boom.dto.request.WikiItemCreateRequest;
import com.boom.service.WikiService;
import com.boom.util.AuthUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/11
 */
@RestController
@RequestMapping("/admin")
public class WikiController {

    @Autowired
    private WikiService wikiService;

    //获取所有wiki
    @RequestMapping("/getWiki")
    public GridRTBean getWiki(@RequestBody(required = false) Page page) {
        if (page == null) {
            page = new Page(0, 15);
        }
        return wikiService.getWikiItemByPage(page.getPage().longValue(), page.getSize().longValue());
    }

    //创建新wiki
    @RequestMapping("/createWiki")
    public DateRTBean createWiki(@RequestBody WikiItemCreateRequest wikiRequest) {
        BoomUser auth = AuthUtil.getAuth();
        return wikiService.createWiki(wikiRequest.getWiki(), auth.getId(), wikiRequest.isRoot());
    }


    //初始化wiki对应的内容
    @RequestMapping("/initWikiContent")
    public DateRTBean initWikiContent(@RequestBody WikiContentCreateRequest wikiContentCreateRequest) {
        BoomUser auth = AuthUtil.getAuth();
        return wikiService.initWikiContent(auth.getId(), wikiContentCreateRequest);
    }

    //增加wiki新版本内容
    @RequestMapping("/newVersionWikiContent")
    public DateRTBean newVersionWikiContent(@RequestBody WikiContentCreateRequest wikiContentCreateRequest) {
        BoomUser auth = AuthUtil.getAuth();
        return wikiService.newVersionWikiContent(auth.getId(), wikiContentCreateRequest);
    }

    //删除wiki词条项
    @RequestMapping("/delWikiItem")
    public DateRTBean delWikiItem(@RequestBody WikiContentCreateRequest wikiContentCreateRequest) {
        BoomUser auth = AuthUtil.getAuth();
        return wikiService.delWikiItem(auth.getId(), wikiContentCreateRequest.getWikiItemId());
    }


    //删除wiki词条项
    @RequestMapping("/delWikiContent")
    public DateRTBean delWikiContent(@RequestBody WikiContentCreateRequest wikiContentCreateRequest) {
        BoomUser auth = AuthUtil.getAuth();
        return wikiService.delWikiContent(auth.getId(), wikiContentCreateRequest.getWikiItemId(), wikiContentCreateRequest.getWikiContent().getId());
    }

    //修改wiki
    @RequestMapping("/updateWikiContent")
    public DateRTBean updateWikiContent(@RequestBody WikiContentCreateRequest wikiContentCreateRequest) {
        BoomUser auth = AuthUtil.getAuth();
        return wikiService.updateWikiContent(auth.getId(), wikiContentCreateRequest);
    }

    //检索wiki
    @RequestMapping("/searchWiki")
    public DateRTBean searchWiki(String search) {
        return wikiService.searchWiki(search);
    }

    //词条的斧子关系

}
