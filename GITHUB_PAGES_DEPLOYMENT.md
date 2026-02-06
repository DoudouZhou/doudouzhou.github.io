# STAR Lab 网站 - GitHub Pages 部署指南

## 快速部署步骤

### 方法一：通过 GitHub 网页界面上传（最简单）

1. **访问您的 GitHub 仓库**
   - 打开 https://github.com/doudouzhou/doudouzhou.github.io

2. **上传文件**
   - 点击 "Add file" → "Upload files"
   - 将 `github-pages-deploy` 文件夹中的所有文件拖拽到上传区域
   - 或者先压缩文件夹，上传后解压

3. **提交更改**
   - 在页面底部填写提交信息，例如："Update STAR Lab website"
   - 点击 "Commit changes"

4. **配置 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main" 和 "/ (root)"
   - 点击 Save

5. **等待部署**
   - 通常需要 1-5 分钟
   - 部署完成后访问：https://doudouzhou.github.io/

### 方法二：使用 Git 命令行

```bash
# 1. 克隆或进入您的仓库
cd /path/to/your/local/directory
git clone https://github.com/doudouzhou/doudouzhou.github.io.git
cd doudouzhou.github.io

# 2. 复制新网站文件
cp -r /home/ubuntu/doudou-portfolio/github-pages-deploy/* .

# 3. 提交并推送
git add .
git commit -m "Deploy STAR Lab website"
git push origin main
```

## 网站特性

✅ **多页面导航**
- Home - 实验室简介和最新动态
- Research - 研究方向和项目
- People - 团队成员
- Publications - 论文列表（支持分类筛选）
- Software - 开源工具和软件包
- Teaching - 课程信息
- Join Us - 招聘信息

✅ **响应式设计**
- 完美支持桌面、平板和手机

✅ **现代蓝色主题**
- 充满活力的蓝色配色方案
- 流畅的动画和交互效果

✅ **GitHub Pages 兼容**
- 客户端路由，无需服务器
- 404 页面回退处理

## 重要文件说明

- `index.html` - 主页面入口
- `404.html` - 路由回退页面（与 index.html 相同）
- `assets/` - 所有 CSS、JavaScript 和图片资源

## 自定义内容

### 更新个人照片
目前使用的是占位符（字母缩写）。要添加真实照片：
1. 将照片上传到 `assets/` 文件夹
2. 修改代码中的占位符部分

### 更新 Google Scholar 链接
在以下文件中搜索 `YOUR_ID` 并替换为您的 Google Scholar ID：
- Footer.tsx
- People.tsx
- Publications.tsx

### 添加更多内容
所有页面的源代码都在项目的 `client/src/pages/` 目录中。

## 故障排除

### 问题：页面显示 404
**解决方案**：
- 确保 `404.html` 文件存在且与 `index.html` 内容相同
- 检查 GitHub Pages 设置中的分支和目录是否正确

### 问题：样式或图片没有加载
**解决方案**：
- 清除浏览器缓存
- 检查 GitHub Pages 部署状态（Settings → Pages）
- 确认所有文件都已正确上传

### 问题：路由不工作
**解决方案**：
- 这是正常的，GitHub Pages 使用客户端路由
- 404.html 会自动处理路由回退
- 直接访问子页面可能显示 404，但点击导航链接会正常工作

## 更新网站

每次需要更新网站时：
1. 在 Manus 中修改并重新构建
2. 下载新的 `github-pages-deploy` 文件
3. 替换 GitHub 仓库中的所有文件
4. 提交更改

## 需要帮助？

如果遇到问题：
1. 检查 GitHub Actions 标签页查看部署日志
2. 确认 GitHub Pages 设置正确
3. 尝试清除浏览器缓存并强制刷新（Ctrl+Shift+R）

---

**实验室名称**: STAR Lab (Statistical Theory and AI Research Laboratory)
**主持人**: Prof. Doudou Zhou
**机构**: National University of Singapore
