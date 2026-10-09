# Invoidstar · Personal Academic Homepage

**Official website / 正式个人主页：** **[https://invoidstar.github.io/](https://invoidstar.github.io/)**

A bilingual academic homepage for **Qi Chu（初琦）**, covering publications, research projects, datasets, academic experience, and contact information.

中英双语个人学术主页，展示论文、科研项目、数据集与学术经历。

## Pages / 页面

| Page | English | 中文 |
| --- | --- | --- |
| Home / 首页 | [Home](https://invoidstar.github.io/) | [首页](https://invoidstar.github.io/zh/) |
| Publications / 论文 | [Publications](https://invoidstar.github.io/publications/) | [论文发表](https://invoidstar.github.io/zh/publications/) |
| Projects / 项目 | [Projects](https://invoidstar.github.io/projects/) | [科研项目](https://invoidstar.github.io/zh/projects/) |
| Datasets / 数据集 | [Datasets](https://invoidstar.github.io/datasets/) | [研究数据集](https://invoidstar.github.io/zh/datasets/) |
| About / 关于 | [About](https://invoidstar.github.io/about/) | [关于我](https://invoidstar.github.io/zh/about/) |

## Technology

- **Astro + TypeScript + responsive CSS**: static academic website.
- **GitHub Pages only**: automatic deployment through `.github/workflows/deploy.yml` after a push to `main`; no additional hosting method.
- **Light / dark themes**: respects system settings initially and remembers a manual choice.
- **Bilingual content**: managed centrally in `src/data/content.ts`.
- **Publications**: complete list on the homepage, with a dedicated filtering and 10-items-per-page view.
- **Original portrait**: preserved in `public/assets/avatar.jpg`.

## Local development / 本地开发

```bash
npm install
npm run dev
npm run build
npm run verify
```

Local commands are for development and verification only. **The public website is deployed exclusively through GitHub Pages.**

科研内容请编辑 `src/data/content.ts`；外观与移动端样式请编辑 `src/styles/global.css`。无需服务器、第三方部署服务或手工上传构建结果。
