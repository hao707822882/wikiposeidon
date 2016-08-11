package com.boom.service;/**
 * Created by Administrator on 2016/8/11.
 */

import com.boom.BaseTest;
import com.boom.model.elastic.LolWikiItemSearch;
import com.boom.model.mongo.LolWikiContentPersistent;
import com.boom.model.mongo.LolWikiItemPersistent;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * @author chen.xinghu
 * @comment 炸弹人数据平台
 * @date 2016/8/11
 */
public class WikiServiceTest extends BaseTest {

    @Autowired
    private WikiService wikiService;


    //@Test
    public void testCreateWiki() {
        LolWikiItemPersistent zg = wikiService.createWiki("中国", creatorId, true);
        System.out.println(zg);
        //2982698713203712
    }

    //@Test
    public void testCreateWikiContent() {
        LolWikiContentPersistent lolWikiContentPersistent = new LolWikiContentPersistent();
        lolWikiContentPersistent.setName("中国民谣");
        lolWikiContentPersistent.setSummary("民间流传的歌谣。如《江南靖士诗稿·子姑听》（二首）：其一：“闻言世界官能买，现在钱多便买官。请看花钱买官者，明天人也买其官。”其二：“闻言世界钱能骗，现在流行竞骗钱。请看嘻嘻骗钱者，转头人也骗其钱。”（《载敬堂集》）");
        lolWikiContentPersistent.setContent("民间流传的歌谣。如《江南靖士诗稿·子姑听》（二首）：其一：“闻言世界官能买，现在钱多便买官。请看花钱买官者，明天人也买其官。”其二：“闻言世界钱能骗，现在流行竞骗钱。请看嘻嘻骗钱者，转头人也骗其钱。”（《载敬堂集》）民间流传的歌谣。如《江南靖士诗稿·子姑听》（二首）：其一：“闻言世界官能买，现在钱多便买官。请看花钱买官者，明天人也买其官。”其二：“闻言世界钱能骗，现在流行竞骗钱。请看嘻嘻骗钱者，转头人也骗其钱。”（《载敬堂集》）");

        LolWikiItemPersistent zg = wikiService.createWikiContent(2982751001117696L, 10L, lolWikiContentPersistent);
        System.out.println(zg);
        //2982698713203712
    }

    //@Test
    public void testCreateNewVersionWikiContent() {
        LolWikiContentPersistent lolWikiContentPersistent = new LolWikiContentPersistent();
        lolWikiContentPersistent.setName("中国民谣");
        lolWikiContentPersistent.setSummary("中国民谣 电影改编自同名小说，讲述了28岁的凉夏身陷糟糕的感情生活不能自拔，崩溃时误食奇幻巧克力，“心智”重返17岁，并在17岁凉夏的帮助下认清自己、找回初心的故事。");
        lolWikiContentPersistent.setContent("电影改编自同名小说，讲述了28岁的凉夏身陷糟糕的感情生活不能自拔，崩溃时误食奇幻巧克力，“心智”重返17岁，并在17岁凉夏的帮助下认清自己、找回初心的故事。");

        LolWikiItemPersistent zg = wikiService.createNewVersionWikiContent(2982751001117696L, 10L, lolWikiContentPersistent);
        System.out.println(zg);
        //2982698713203712
    }

    @Test
    public void testSearchWiki() {
        List<LolWikiItemSearch> my = wikiService.searchWiki("民谣");
        for (LolWikiItemSearch lolWikiItemSearch : my) {
            System.out.println(lolWikiItemSearch);
        }
    }


}
