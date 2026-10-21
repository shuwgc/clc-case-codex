# 合并与发布检查

本分支将原单文件案例网站改成项目组成果发布站。静态网页可以独立预览；Windows安装包通过GitHub Releases分发。

## 当前状态

- 网页、字体、四组矢量背景、三组案例照片、八项程序快照均已准备。
- releases.json保留12个版本的19个现存安装包及31张历史快照。
- 19个安装包已公开上传至installer-archive-20261021归档。releases.json记录经核验的真实下载地址；同号构建保留独立附件。
- 附件大小及GitHub SHA-256已逐一核验，当前0.6.6包另经完整下载比对；安装器不进入Git仓库。既有Web版保留于app.html。

## 本地审阅

```shell
python tools/check_site.py
python tools/serve_site.py --root . --port 8891
```

浏览器访问终端打印的/clc-case-codex/路径，以核对GitHub项目站子目录下的相对资源、导航和版本清单。

## 上线前必须完成

1. 使用对shuwgc/clc-case-codex有写权限的GitHub账号登录。本分支不包含密码、令牌或本机凭据。
2. 在维护者电脑运行以下命令，inventory指向本机版本清单，报告写在仓库之外：

```shell
python tools/publish_installers.py --inventory /path/to/versions-inventory.json --site . --report ../published-assets.json
```

工具读取既有EXE，按记录的字节数与SHA-256验证后上传归档附件。它保留不同构建，不替换已存在且内容不同的附件；GitHub返回的校验值、公开下载状态和长度均需通过，当前包还完整下载复核。工具不运行安装器，也不上传本机路径或论文文件。

3. 审阅工具更新的releases.json和首页下载入口，再运行严格检查：

```shell
python tools/check_site.py --require-downloads --remote
```

**严格检查通过后再合并/推送主分支并发布。**当前19个公开附件已经验证；以后添加版本时，仍须先上传并核验再启用下载入口。

4. 确认仓库GitHub Pages的既有发布来源；本分支不修改账户权限、分支保护或Pages配置。部署完成后核对首页、versions.html、log.html、字体、背景、快照、各版本下载及手机导航。

## 回退

变更基于提交7f64f988f6824b723c4b78b3f295859089a3db8e。保留原仓库历史；必要时通过新的revert提交回退站点，不强推历史。安装包归档与网页可以独立管理。

## 核验边界

Website Auditor返回PRO_REQUIRED，未得到本站审计评分。现有验证来自真实文件、HTTP和浏览器检查；不将示例报告视为本站结果。未完成真实屏幕阅读器、跨浏览器或操作系统200%缩放测试。

## 本次公开归档

安装包归档：https://github.com/shuwgc/clc-case-codex/releases/tag/installer-archive-20261021

本次使用网页端上传既有安装包并核验公开附件。tools/publish_installers.py保留按版本发布的维护流程；重复发布前应先检查已有归档并使用当前releases.json地址。
