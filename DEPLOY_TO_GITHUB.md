# 部署到 GitHub Pages 指南

## 方法一：通过 GitHub 仓库设置（推荐）

### 步骤 1: 准备 GitHub 仓库
1. 访问 https://github.com/doudouzhou/doudouzhou.github.io
2. 确保仓库存在（如果不存在，需要先创建）

### 步骤 2: 上传文件
将 `github-pages-deploy` 文件夹中的所有文件上传到仓库根目录：
- index.html
- assets/ 文件夹

### 步骤 3: 配置 GitHub Pages
1. 进入仓库的 Settings
2. 在左侧菜单找到 "Pages"
3. 在 "Source" 下选择 "Deploy from a branch"
4. 选择 "main" 分支和 "/ (root)" 文件夹
5. 点击 "Save"

### 步骤 4: 等待部署
- GitHub 会自动构建并部署网站
- 通常需要 1-5 分钟
- 部署完成后，网站将在 https://doudouzhou.github.io/ 可访问

## 方法二：使用 GitHub CLI（需要安装 gh）

```bash
# 1. 克隆仓库
cd /tmp
git clone https://github.com/doudouzhou/doudouzhou.github.io.git
cd doudouzhou.github.io

# 2. 复制新文件
cp -r /home/ubuntu/doudou-portfolio/github-pages-deploy/* .

# 3. 提交并推送
git add .
git commit -m "Update portfolio website with new design"
git push origin main
```

## 方法三：使用 Git 命令行

如果您已经有本地仓库：

```bash
cd /path/to/doudouzhou.github.io
cp -r /home/ubuntu/doudou-portfolio/github-pages-deploy/* .
git add .
git commit -m "Update portfolio website"
git push
```

## 注意事项

1. **自定义域名**：如果您想使用自定义域名，需要：
   - 在仓库根目录添加 `CNAME` 文件，内容为您的域名
   - 在域名提供商处配置 DNS 记录

2. **HTTPS**：GitHub Pages 自动支持 HTTPS，建议启用 "Enforce HTTPS" 选项

3. **更新网站**：每次更新网站时，只需重复步骤 2 和 3

## 文件说明

- `index.html`: 主页面文件
- `assets/`: 包含所有 CSS、JavaScript 和其他资源文件

## 故障排除

如果网站没有正确显示：
1. 检查 GitHub Pages 设置是否正确
2. 确认所有文件都已正确上传
3. 清除浏览器缓存后重试
4. 查看 GitHub Actions 标签页，确认部署是否成功
