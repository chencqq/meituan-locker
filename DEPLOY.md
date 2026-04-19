# 美团外卖柜网站部署指南

## 域名建议

### 推荐域名（按优先级排序）

| 域名 | 说明 | 预估价格 |
|------|------|----------|
| **meituanwaimaigui.com** | 美团外卖柜全拼，品牌直接 | ¥50-100/年 |
| **mtwmg.com** | 美团外卖柜首字母缩写，简洁 | ¥50-100/年 |
| **meituan-locker.com** | 美团+locker组合，国际化 | ¥60-120/年 |
| **waimaigui.cn** | 外卖柜拼音，简短易记 | ¥30-80/年 |
| **smartlocker.cn** | 智能柜，行业通用 | ¥50-100/年 |
| **qucangui.com** | 取餐柜拼音，功能导向 | ¥50-100/年 |

### 备选域名
- meituanqucan.com
- waimaizhinenggui.com
- mtqucan.com
- wmgui.cn
- meituanbox.com

## Vercel 部署步骤

### 1. 准备代码
```bash
# 确保已构建生产版本
pnpm run build

# 检查 dist 目录
ls -la dist/
```

### 2. 安装 Vercel CLI
```bash
npm i -g vercel
```

### 3. 登录 Vercel
```bash
vercel login
```

### 4. 部署项目
```bash
# 在项目根目录执行
vercel --prod

# 或指定目录
vercel --prod dist/
```

### 5. 配置自定义域名
1. 登录 Vercel Dashboard
2. 选择项目 → Settings → Domains
3. 添加自定义域名
4. 按提示配置 DNS 解析

## 阿里云域名购买步骤

1. 访问 [阿里云域名注册](https://wanwang.aliyun.com/)
2. 搜索想要的域名
3. 加入购物车并结算
4. 完成实名认证
5. 配置 DNS 解析到 Vercel

## DNS 解析配置

在阿里云域名控制台添加以下记录：

| 记录类型 | 主机记录 | 记录值 | TTL |
|---------|---------|--------|-----|
| CNAME | @ | cname.vercel-dns.com | 600 |
| CNAME | www | cname.vercel-dns.com | 600 |

## 环境变量配置（如需要）

在 Vercel Dashboard → Settings → Environment Variables 中添加：

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 自动部署

配置 GitHub 集成后，每次推送到 main 分支会自动部署：

```bash
# 初始化 git
git init
git add .
git commit -m "Initial commit"

# 推送到 GitHub
git remote add origin https://github.com/yourusername/meituan-locker.git
git push -u origin main
```

## 注意事项

1. **备案**：如果使用 .cn 域名，需要完成 ICP 备案
2. **HTTPS**：Vercel 自动提供 SSL 证书
3. **CDN**：Vercel 自带全球 CDN 加速
4. **图片资源**：确保 public/images 目录已正确复制到 dist

## 推荐方案

**快速上线方案**：
1. 购买 `meituanwaimaigui.com` 或 `mtwmg.com`
2. 使用 Vercel 部署
3. 配置 CNAME 解析
4. 开启 HTTPS

预计总成本：域名 ¥50-100/年 + Vercel 免费版