---
title: 如何部署AstroYi到githubPages中
description: 有个小伙伴很久以前就提出要把博客部署到yi上去，但是却路径异常的问题，最近有点时间来把这个问题给解决一下吧
date: 2025-03-14
tags: 技术
category: Astro
---

[管理组织的 GitHub Pages 站点发布](https://docs.github.com/zh/organizations/managing-organization-settings/managing-the-publication-of-github-pages-sites-for-your-organization)

准备工作：

1. fork一个 名称为xxx.github.io 的公共仓库
2. 选择使用github actions 来部署网站
3. 添加/.github/workflows/astro.yml文件

修改的地方：

/src/consts.ts
site.url 的值应该与astro.config.js的site的属性值一样。
