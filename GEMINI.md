# Unraid Manager - 官网项目指南 (Astro 重构版)

## 项目概述
本项目是 Unraid Manager iOS App 的官方营销与着陆页网站的重构版本，旨在利用 Astro 的高性能特性提升访问体验。本项目基于 `astro-theme-vitesse` 模板，使用 **Astro 5** 和 **UnoCSS** 构建。

## 技术栈
- **核心框架**: Astro 5.x
- **UI 引擎**: UnoCSS (配置于 `uno.config.ts`)
- **交互组件**: Vue 3 (通过 `@astrojs/vue` 集成) 或 Astro Server Components
- **语言**: TypeScript / Markdown / MDX
- **包管理器**: pnpm (推荐版本 8.x+)
- **代码规范**: ESLint (@antfu/eslint-config) + Prettier

## 目录结构
- `src/`: 源代码目录
  - `pages/`: 页面路由 (支持 `.astro`, `.md`, `.mdx`)。
  - `layouts/`: 页面布局模板。
  - `components/`: 复用组件 (Vue 或 Astro 组件)。
  - `styles/`: 全局样式 (如 `main.css`, `prose.css` 等)。
- `public/`: 静态资源 (图片, favicon 等)。
- `uno.config.ts`: UnoCSS 配置文件 (自定义原子类, 快捷方式, 主题)。
- `astro.config.ts`: Astro 项目配置。

## 开发指南

### 常用命令
- **安装依赖**: `pnpm install`
- **启动开发**: `pnpm dev` (默认端口 `http://localhost:4321`)
- **构建生产**: `pnpm build`
- **本地预览**: `pnpm preview`
- **代码检查**: `pnpm lint` / `pnpm lint:fix`

### UI 与样式规范 (UnoCSS)
本项目使用 **UnoCSS** 进行原子化样式开发，支持 Attribute Mode。

- **颜色与主题**:
  - 主要背景: `bg-main` (适配暗色模式)
  - 主要文字: `text-main`
  - 链接文字: `text-link`
  - 边框颜色: `border-main`
  - 详细定义请参考 `uno.config.ts` 中的 `shortcuts`。

- **图标使用**:
  - 使用 Iconify 图标集，前缀为 `i-`。
  - 常用集合: `carbon`, `simple-icons`, `ri` (Remix Icon), `logos` 等。
  - 示例: `<div class="i-carbon-sun dark:i-carbon-moon" />`

- **排版**:
  - 文章类内容使用 `@unocss/preset-typography` (类名 `prose`)。
  - 字体配置: `font-sans` (Inter), `font-mono` (DM Mono)。

### 开发注意事项
1. **组件优先**: 静态内容优先使用 `.astro` 组件以获得最佳性能。需要客户端交互时使用 Vue 组件并添加 `client:*` 指令 (如 `client:visible`, `client:load`)。
2. **响应式设计**: 使用 UnoCSS 的响应式前缀 (如 `sm:`, `md:`, `lg:`) 确保移动端和桌面端体验一致。
3. **暗色模式**: 项目内置暗色模式支持，使用 `dark:` 前缀适配深色样式。`bg-main` 和 `text-main` 已自动处理深浅色切换。
4. **代码风格**: 提交前请运行 `pnpm lint:fix` 确保代码风格统一。

### 部署
- 项目构建为静态站点 (`output: 'static'` 默认)，构建产物位于 `dist/` 目录。
- 适合部署至 Cloudflare Pages, Vercel 或 Netlify。
