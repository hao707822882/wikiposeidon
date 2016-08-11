/**
 * Created by Administrator on 2016/3/9.
 */
myAppModule.service("tableService", function () {
        var rt = {};
        //计算总页数
        function totalPageFunc(data) {
            if (!data) {
                throw new Error("data can not be null")
            }
            var size = data.length
            if (size % 15 == 0) {
                return size / 15
            } else {
                return (size - (size % 15)) / 15 + 1
            }

        }

        //切分根据总页数切分list
        function splitArray(data, pageNum, pageSize) {
            var arraySplit = [];
            for (var a = 0; a < pageNum; a++) {
                arraySplit.push(data.slice(15 * a, 15 * a + 14))
            }
            return arraySplit;
        }


        rt.tabDate = function (data) {
            /**
             * rt_data={data,totalPage,nowPage,previous,next,pageLab}
             * @type {null}
             */
            var rt_data = {};
            /**totalElement;totalPage;nowPage;size;**/
                //设置总页数
            rt_data.totalPage = data.totalPage;
            //设置当前页
            rt_data.nowPage = data.nowPage;
            //设置数据
            rt_data.data = data.data;
            //前进
            if (data.nowPage == data.totalPage)
                rt_data.next = false;
            else
                rt_data.next = true;
            //回退
            if (data.nowPage == 1)
                rt_data.previous = false;
            else
                rt_data.previous = true;

            function rangToArray(start, end) {
                var array = [];
                for (var a = start; a <= end; a++) {
                    array.push(a)
                }
                return array;
            }

            //计算页码,返回页码数组
            function pages(nowPage, totalPage, pageSize) {
                var pageSize = pageSize ? pageSize : 5;
                if (totalPage < pageSize) {
                    return rangToArray(1, totalPage);
                } else {
                    if (nowPage == totalPage) {
                        return rangToArray(totalPage - 4, totalPage);
                    } else if (totalPage - nowPage < 2) {
                        var end = totalPage;
                        var jg = totalPage - nowPage
                        var start = nowPage - (5 - jg - 1);
                        return rangToArray(start, end);
                    } else if (nowPage - 2 < 1) {
                        var start = 1;
                        var jg = nowPage - 1
                        var end = nowPage + (5 - jg - 1);
                        return rangToArray(start, end);
                    } else {
                        return rangToArray(nowPage - 2, nowPage + 2)
                    }
                }

            }

            //设置页码
            rt_data.pageLab = pages(data.nowPage, data.totalPage, 5)

            return rt_data;
        }

        /**
         * 一次请求所有数据，本地分页
         * @param data
         * @returns {null}
         */
        rt.tabLocalDate = function (data) {
            /**
             * rt_data={data,totalPage,nowPage,previous,next,pageLab}
             * @type {null}
             */
            var rt_data = {};
            var totalPage = totalPageFunc(data)
            var splites = splitArray(data, totalPage, 15);

            //设置总页数
            rt_data.totalPage = totalPage;
            //设置数据
            rt_data.data = splites;

            return rt_data;
        }

        /**
         * 本地数据分页
         * @param data
         * @returns {null}
         */
        rt.tabLocalPage = function (data, page) {
            var rt_data = {};
            /**totalElement;totalPage;nowPage;size;**/
                //设置总页数
            rt_data.totalPage = data.totalPage;
            //设置当前页
            rt_data.nowPage = page;
            //设置数据
            rt_data.data = data.data[parseInt(page)];
            //前进
            if (rt_data.nowPage == rt_data.totalPage)
                rt_data.next = false;
            else
                rt_data.next = true;
            //回退
            if (rt_data.nowPage == 1)
                rt_data.previous = false;
            else
                rt_data.previous = true;

            function rangToArray(start, end) {
                var array = [];
                for (var a = start; a <= end; a++) {
                    array.push(a)
                }
                return array;
            }

            //计算页码,返回页码数组
            function pages(nowPage, totalPage, pageSize) {
                var pageSize = pageSize ? pageSize : 5;
                if (totalPage < pageSize) {
                    return rangToArray(1, totalPage);
                } else {
                    if (nowPage == totalPage) {
                        return rangToArray(totalPage - 4, totalPage);
                    } else if (totalPage - nowPage < 2) {
                        var end = totalPage;
                        var jg = totalPage - nowPage
                        var start = nowPage - (5 - jg - 1);
                        return rangToArray(start, end);
                    } else if (nowPage - 2 < 1) {
                        var start = 1;
                        var jg = nowPage - 1
                        var end = nowPage + (5 - jg - 1);
                        return rangToArray(start, end);
                    } else {
                        return rangToArray(nowPage - 2, nowPage + 2)
                    }
                }

            }

            //设置页码
            rt_data.pageLab = pages(rt_data.nowPage, rt_data.totalPage, 5)
            return rt_data;

        }

        return rt;
    }
)
