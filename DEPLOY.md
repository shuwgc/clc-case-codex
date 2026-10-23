# 合并与发布检查

本仓库提供项目组成果发布站和案例库Web版。静态网页可以独立预览；Windows安装包通过GitHub Releases分发。

## 当前状态

- 当前正式版本为1.0.0；发布元数据、上传状态、大小与SHA-256见releases.json。
- 首页展示六个真实案例场景和八项程序界面，导航、研究表述与联系邮箱同步修订；界面截图须与当前程序版本一致。
- 19个早期安装包通过installer-archive-20261021归档，0.6.7与1.0.0分别使用独立版本标签。正式1.0.0与早期同号包分别分组，0.6.7的原始包和两份修订包分别保留入口。
- 新版安装包完整下载并核对SHA-256后再启用正式链接；安装器不进入Git仓库。Web版位于app.html。

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

**严格检查通过后再合并/推送主分支并发布。**新版本须先上传并核验安装包，再启用下载入口。

4. 确认仓库GitHub Pages的既有发布来源；本分支不修改账户权限、分支保护或Pages配置。部署完成后核对首页、versions.html、log.html、字体、背景、快照、各版本下载及手机导航。

## 回退

保留原仓库历史；必要时通过新的revert提交回退站点，不强推历史。安装包归档与网页可以独立管理。此次1.0.0站点从正式main检出，未覆盖旧的本地发布工作目录。

## 核验边界

Website Auditor返回PRO_REQUIRED，未得到本站审计评分。现有验证来自真实文件、HTTP和浏览器检查；不将示例报告视为本站结果。未完成真实屏幕阅读器、跨浏览器或操作系统200%缩放测试。

## 本次公开归档

安装包归档：https://github.com/shuwgc/clc-case-codex/releases/tag/installer-archive-20261021

本次使用网页端上传既有安装包并核验公开附件。tools/publish_installers.py保留按版本发布的维护流程；重复发布前应先检查已有归档并使用当前releases.json地址。

## 0.6.7同步

Web版同步35项细则释义、定位高亮与统一返回；保留原有浏览器检索降级。当前截图于2026-10-21至22日从0.6.7真实渲染，公开元数据在assets/current-captures-067.json。安装包公开后验证文件大小与SHA-256，再启用releases.json下载链接。


0.6.7导航修订：返回入口仅用于索引定位；主动选择首页、栏目、案例或标签后清空。该历史构建使用CLC-v067-heat-navigation-x64.exe，原同号构建保留于Release附件；校验值与具体记录见releases.json。


0.6.7 色块定位修订 1022-B：矩阵色块立即定位案例和细则；修复返回顶部生成多余返回链。该历史下载为CLC-v067-heat-navigation-x64.exe，前两份0.6.7构建保留附件；页脚可识别该次修订。
