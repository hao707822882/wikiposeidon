/**
 * Created by Administrator on 2016/3/10.
 */
myAppModule.service("MD5Service", function () {
        var rt = {};
        //获取文件的M5D值
        rt.getFileMd5 = function (file, endCall) {
            var fileReader = new FileReader();
            blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,
                chunkSize = 2097152,
                // read in chunks of 2MB
                chunks = Math.ceil(file.size / chunkSize),
                currentChunk = 0,
                spark = new SparkMD5();

            fileReader.onload = function (e) {
                console.log("read chunk nr", currentChunk + 1, "of", chunks);
                spark.appendBinary(e.target.result); // append binary string
                currentChunk++;
                if (currentChunk < chunks) {
                    loadNext();
                }
                else {
                    endCall && endCall(spark.end())
                }
            };
            function loadNext() {
                var start = currentChunk * chunkSize,
                    end = start + chunkSize >= file.size ? file.size : start + chunkSize;

                fileReader.readAsBinaryString(blobSlice.call(file, start, end));
            };
            loadNext();
        }
        return rt;
    }
)