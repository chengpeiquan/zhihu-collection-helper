# zhihu-collection-helper

知乎收藏夹助手，可将专栏的文章添加到收藏夹中，适用于合集类的收藏夹。

参考收藏夹：[凶杀案·刑侦与法医](https://www.zhihu.com/collection/839257512)

## 使用方法

这是一个 Node.js 项目，因此需要提前安装 Node 。

```bash
# 克隆仓库到本地
git clone https://github.com/chengpeiquan/zhihu-collection-helper.git

# 进入项目目录
cd zhihu-collection-helper

# 安装依赖（可使用 npm / yarn 等其他包管理器）
pnpm i

# 运行开始命令
pnpm start
```

不过程序正确运行的前提是需要先准备好一个 [配置文件](#配置文件) 。

## 配置文件

基于 [dotenv](https://github.com/motdotla/dotenv) 管理配置文件，创建一个名为 `.env` 的文件保存到

|         配置选项          |         作用          |         数据来源或设置说明         |
| :-----------------------: | :-------------------: | :--------------------------------: |
|       COLLECTION_ID       | 要添加数据的收藏夹 ID |            收藏夹的 URL            |
| DATA_SOURCE_COLLECTION_ID |   要爬取的收藏夹 ID   |            收藏夹的 URL            |
|     START_PAGE_NUMBER     |    起始的爬取页数     |              如果中间              |
|           LIMIT           |     分页条数限制      |             上限 `100`             |
|          X_AB_PB          |    请求的鉴权参数     | 知乎 AJAX 请求的 `Request Headers` |
|        X_XSRFTOKEN        |    请求的鉴权参数     | 知乎 AJAX 请求的 `Request Headers` |
|         X_ZSE_93          |    请求的鉴权参数     | 知乎 AJAX 请求的 `Request Headers` |
|         X_ZSE_96          |    请求的鉴权参数     | 知乎 AJAX 请求的 `Request Headers` |
|         X_ZSE_81          |    请求的鉴权参数     | 知乎 AJAX 请求的 `Request Headers` |
|          COOKIE           |    请求的鉴权参数     | 知乎 AJAX 请求的 `Request Headers` |
