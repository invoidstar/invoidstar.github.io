import type { Lang, Section } from '../lib/routes';

export interface Publication {
  year: number;
  title: string;
  authors: string;
  venue: string;
  venueShort: string;
  area: 'Multimodal' | 'Vision';
  featured?: boolean;
  links: { label: string; url: string }[];
}

export interface Project {
  id: string;
  name: string;
  category: 'research' | 'tools';
  type: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  description: { en: string; zh: string };
  tags: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
}

export const publications: Publication[] = [
  {
    year: 2026,
    title: 'TextSLR: Learning Text-Aware Representations for Sign Language Recognition',
    authors: 'Qi Chu, Yuehang Wang, Qianren Guo, Shuang Xu, Yongji Zhang, Sen Liu, Yu Jiang*',
    venue: 'IEEE Transactions on Industrial Informatics',
    venueShort: 'IEEE TII',
    area: 'Multimodal',
    featured: true,
    links: [{label: 'Paper', url: 'https://ieeexplore.ieee.org/document/11447342'}],
  },
  {
    year: 2026,
    title: 'HyperSign: Hierarchical Hypergraph-based Co-occurrence Modeling for Sign Language Recognition and Translation',
    authors: 'Qianren Guo, Yuehang Wang, Yongji Zhang, Qi Chu, Sen Liu, Yu Jiang*',
    venue: 'AAAI Conference on Artificial Intelligence',
    venueShort: 'AAAI',
    area: 'Multimodal',
    featured: true,
    links: [
      {label: 'Paper', url: 'https://ojs.aaai.org/index.php/AAAI/article/view/42440'},
      {label: 'Project', url: 'https://invoidstar.github.io/HyperSign/'}
    ],
  },
  {
    year: 2026,
    title: 'GANet: Multi-Modal Adaptation Continuous Sign Language Recognition via Gloss-Aware Network',
    authors: 'Qi Chu, Shuang Xu*, Yuehang Wang, Yongji Zhang, Qianren Guo, Hongde Qin, Yu Jiang',
    venue: 'Complex Engineering Systems',
    venueShort: 'CES',
    area: 'Multimodal',
    featured: true,
    links: [{label: 'Paper', url: 'https://www.oaepublish.com/articles/ces.2025.79'}],
  },
  {
    year: 2025,
    title: 'Event-based Image Deblurring via Cross-Modal Interaction Fusion',
    authors: 'Qi Chu, Yuehang Wang, Yongji Zhang, Yu Jiang*',
    venue: 'IEEE Transactions on Industrial Informatics',
    venueShort: 'IEEE TII',
    area: 'Vision',
    featured: true,
    links: [{label: 'Paper', url: 'https://ieeexplore.ieee.org/document/11247836'}],
  },
  {
    year: 2025,
    title: 'DGRFormer: A Hand-Gesture Recognition Framework for Underwater Human–Robot Interaction',
    authors: 'Yong Wang, Qi Hong, Qi Chu, Qianren Guo, Kai Wang*',
    venue: 'IEEE International Conference on Unmanned Systems',
    venueShort: 'IEEE ICUS',
    area: 'Vision',
    links: [{label: 'Paper', url: 'https://ieeexplore.ieee.org/document/11294307'}],
  },
  {
    year: 2024,
    title: 'EvCSLR: Event-Guided Continuous Sign Language Recognition and Benchmark',
    authors: 'Yu Jiang, Yuehang Wang, Siqi Li, Yongji Zhang, Qianren Guo, Qi Chu, Yue Gao*',
    venue: 'IEEE Transactions on Multimedia',
    venueShort: 'IEEE TMM',
    area: 'Multimodal',
    links: [
      {label: 'Paper', url: 'https://ieeexplore.ieee.org/document/10814091'},
      {label: 'Code', url: 'https://github.com/diamondxx/EvCSLR'},
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'elysia', name: 'ElysiaRobot', category: 'research', featured: true,
    type: {en: 'ROBOT LEARNING INFRASTRUCTURE', zh: '机器人学习基础设施'},
    subtitle: {en: 'Train, evaluate, and iterate on VLA policies.', zh: '面向 VLA 策略的训练、评测与迭代框架。'},
    description: {
      en: 'A modular research framework for vision-language-action policy development, with reproducible training pipelines and robot benchmark evaluation.',
      zh: '模块化视觉语言动作研究框架，专注于可复现的模型训练流程与机器人基准评测。',
    },
    tags: ['VLA', 'Robot Learning', 'Evaluation'], links: [],
  },
  {
    id: 'radar', name: 'VLA-Radar', category: 'research', featured: true,
    type: {en: 'OPEN RESEARCH RESOURCE', zh: '开放科研知识平台'},
    subtitle: {en: 'A living map of vision-language-action research.', zh: '持续更新的视觉语言动作领域研究地图。'},
    description: {
      en: 'An evolving collection of VLA papers, benchmark settings, reproducibility notes, and research updates.',
      zh: '系统整理 VLA 论文、Benchmark 评测设置、可复现资料与领域研究动态。',
    },
    tags: ['VLA', 'Literature', 'Benchmark'],
    links: [{label:'Website',url:'https://invoidstar.github.io/VLA-Radar/'},{label:'GitHub',url:'https://github.com/invoidstar/VLA-Radar'}],
  },
  {
    id: 'iislu', name: 'IISLU', category: 'research', featured: true,
    type: {en: 'DATASET & BENCHMARK', zh: '数据集与基准'},
    subtitle: {en: 'Industrial Information Sign Language Understanding.', zh: '工业信息手语理解数据集。'},
    description: {
      en: 'A dataset initiative for industrial sign language recognition and translation, spanning vocabulary understanding and sequence modeling.',
      zh: '面向工业场景的手语识别与翻译数据集项目，涵盖词汇识别与序列理解。',
    },
    tags: ['Sign Language', 'Dataset', 'Multimodal'], links: [],
  },
  {
    id: 'matcher', name: 'Color Matcher', category: 'tools', featured: true,
    type: {en: 'CREATIVE SOFTWARE TOOL', zh: '个人开发工具'},
    subtitle: {en: 'From images to practical color palettes.', zh: '让图像配色与色卡匹配更高效。'},
    description: {
      en: 'A browser-based visual tool for color-card matching, region editing, and palette exploration.',
      zh: '支持色卡匹配、区域编辑和配色预览的浏览器端可视化工具。',
    },
    tags: ['Web App', 'Image Processing', 'Open Source'],
    links: [{label:'Website',url:'https://invoidstar.github.io/color-matcher/'},{label:'GitHub',url:'https://github.com/invoidstar/color-matcher'}],
  },
];

export const researchAreas = [
  {id:'01', title:{en:'Embodied Intelligence',zh:'具身智能'}, description:{
    en:'Vision-language-action models, robot policy learning, and model safety.',
    zh:'视觉语言动作模型、机器人策略学习与模型安全。'
  }, tags:['VLA','Robot Learning','World Models']},
  {id:'02', title:{en:'Multimodal Perception',zh:'多模态感知'}, description:{
    en:'Vision-language learning, sign language understanding, and image restoration.',
    zh:'视觉语言学习、手语理解，以及图像复原。'
  }, tags:['Vision-Language','Sign Language','Event Vision']},
  {id:'03', title:{en:'Research Systems',zh:'科研系统与基准'}, description:{
    en:'Reusable training frameworks, benchmark evaluation, and open research resources.',
    zh:'可复用训练框架、基准评测与开放研究资源。'
  }, tags:['Frameworks','Datasets','Reproducibility']},
];

export const news = [
  {date: '2026.09', en: 'Started Ph.D. studies at UESTC.', zh: '于电子科技大学开始博士阶段的研究。'},
  {date: '2026.03', en: 'GANet was published in Complex Engineering Systems.', zh: 'GANet 论文发表于 Complex Engineering Systems。'},
  {date: '2026.02', en: 'TextSLR was accepted by IEEE TII.', zh: 'TextSLR 论文被 IEEE TII 接收。'},
  {date: '2025.11', en: 'HyperSign was accepted by AAAI 2026.', zh: 'HyperSign 论文被 AAAI 2026 接收。'},
];

export const awards = [
  {date: '2026.09', en: 'Doctoral Academic Scholarship · UESTC', zh: '博士学业奖学金 · 电子科技大学'},
  {date: '2025.12', en: 'LangChao Scholarship · Jilin University', zh: '浪潮奖学金 · 吉林大学'},
  {date: '2023.12', en: 'Third Prize · China Postgraduate Mathematical Contest in Modeling', zh: '中国研究生数学建模竞赛三等奖'},
  {date: '2023.04', en: 'Outstanding Graduate of Shandong Province', zh: '山东省优秀毕业生'},
  {date: '2022.05', en: 'Meritorious Winner · Mathematical Contest in Modeling', zh: '美国大学生数学建模竞赛 Meritorious Winner'},
  {date: '2021.04', en: 'Honorable Mention · Mathematical Contest in Modeling', zh: '美国大学生数学建模竞赛 Honorable Mention'},
];

export const copy = {
  en: {
    brandCaption: 'ACADEMIC HOMEPAGE',
    nav: { home: 'Home', publications: 'Publications', projects: 'Projects', about: 'About' },
    heroEyebrow: 'HELLO, I’M',
    heroName: 'Qi Chu',
    heroCn: '初琦',
    heroTitle: 'Exploring the space between',
    heroTitleEm: 'perception & action.',
    heroIntro: 'I am a Ph.D. student in Computer Science and Technology at the University of Electronic Science and Technology of China (UESTC). My research interests span embodied intelligence, multimodal learning, and practical AI research systems.',
    heroPrimary: 'Explore my research',
    heroSecondary: 'Get in touch',
    heroPosition: 'Ph.D. STUDENT · UESTC',
    heroImgCaption: 'A LITTLE BIT OF ELYSIA',
    heroSide: 'RESEARCH / 2026',
    microUniversity: 'University of Electronic Science and Technology of China',
    sectionResearch: 'Research interests',
    researchSubtitle: 'Connecting intelligent perception, purposeful actions, and the systems that make research reproducible.',
    sectionPubs: 'Selected publications',
    pubsSubtitle: 'A selection of peer-reviewed research papers. Visit the full list for more.',
    sectionProjects: 'Things I build',
    projectsSubtitle: 'Research infrastructure, open scientific resources, and practical software.',
    sectionNews: 'Recent notes',
    newsSubtitle: 'A few updates along the way.',
    sectionReach: 'Let’s connect.',
    reachIntro: 'Open to academic conversations, thoughtful collaborations, and interesting ideas.',
    reachBtn: 'Send an email',
    allPublications: 'All publications',
    allProjects: 'All projects',
    moreNews: 'More about me',
    pagePubEyebrow: 'ACADEMIC OUTPUT',
    pagePubTitle: 'Publications',
    pagePubIntro: 'Selected journal and conference papers in multimodal learning, sign language understanding, and computer vision.',
    pageProjectEyebrow: 'RESEARCH & SIDE PROJECTS',
    pageProjectTitle: 'Projects',
    pageProjectIntro: 'A collection of research platforms, datasets, and tools I am developing or contributing to.',
    researchProjects: 'Research & open resources',
    sideProjects: 'Tools & experiments',
    inDevelopment: 'In development',
    pageAboutEyebrow: 'A LITTLE MORE ABOUT ME',
    pageAboutTitle: 'About me',
    pageAboutIntro: 'Curiosity, careful experiments, and a preference for making useful things.',
    aboutBio: 'I am currently pursuing a Ph.D. in Computer Science and Technology at UESTC. My research connects embodied intelligence with multimodal perception, while I enjoy building reusable research software and sharing curated resources with the community.',
    education: 'Education',
    experience: 'Experience',
    honors: 'Honors & awards',
    service: 'Academic service',
    educationCurrent: 'Ph.D. in Computer Science and Technology',
    educationPrevious: 'Prior graduate studies',
    currentLabel: 'Sep 2026 — Present',
    previousLabel: 'Previous education',
    uestc: 'University of Electronic Science and Technology of China',
    jlu: 'Jilin University',
    experienceLine: 'Embodied intelligence algorithm research and development',
    serviceLine: 'Reviewer for AAAI, IEEE Transactions on Multimedia, and IEEE Transactions on Industrial Informatics.',
    filterAll: 'All',
    filterMultimodal: 'Multimodal',
    filterVision: 'Computer Vision',
    selected: 'Featured',
    returnHome: 'Back to homepage',
    publishedNote: '* denotes corresponding author, where provided in the source material.',
    footerNote: 'Built with care, curiosity, and a little starlight.',
    footerRights: 'All rights reserved.',
    emailLabel: 'Email',
    tocLabel: 'On this page',
  },
  zh: {
    brandCaption: '个人学术主页',
    nav: { home: '首页', publications: '论文', projects: '项目', about: '关于' },
    heroEyebrow: '你好，我是',
    heroName: 'Qi Chu',
    heroCn: '初琦',
    heroTitle: '探索感知、理解与',
    heroTitleEm: '行动之间的智能。',
    heroIntro: '目前就读于电子科技大学，攻读计算机科学与技术博士学位。主要关注具身智能、多模态学习，以及支持可复现研究的 AI 系统与科研基础设施。',
    heroPrimary: '探索研究方向',
    heroSecondary: '与我联系',
    heroPosition: '博士研究生 · 电子科技大学',
    heroImgCaption: 'A LITTLE BIT OF ELYSIA',
    heroSide: '研究 / 2026',
    microUniversity: '电子科技大学 · University of Electronic Science and Technology of China',
    sectionResearch: '研究方向',
    researchSubtitle: '连接多模态感知、具身行动与可复用的科研系统。',
    sectionPubs: '代表论文',
    pubsSubtitle: '部分已发表研究成果，完整列表可在论文页面查看。',
    sectionProjects: '正在构建',
    projectsSubtitle: '科研基础设施、开放研究资源，以及一些实用的个人开发工具。',
    sectionNews: '近期动态',
    newsSubtitle: '研究道路上的一些记录。',
    sectionReach: '保持联系。',
    reachIntro: '欢迎学术交流、研究合作与有趣的想法。',
    reachBtn: '发送邮件',
    allPublications: '全部论文',
    allProjects: '全部项目',
    moreNews: '了解更多',
    pagePubEyebrow: '学术成果',
    pagePubTitle: '论文发表',
    pagePubIntro: '多模态学习、手语理解与计算机视觉方向的期刊及会议论文。',
    pageProjectEyebrow: '科研项目与个人开发',
    pageProjectTitle: '项目作品',
    pageProjectIntro: '正在开发或参与建设的科研框架、数据集、知识资源与实用工具。',
    researchProjects: '科研项目与开放资源',
    sideProjects: '工具与实验',
    inDevelopment: '开发中',
    pageAboutEyebrow: '关于我',
    pageAboutTitle: '个人简介',
    pageAboutIntro: '保持好奇、认真研究，也喜欢做一些真正有用的东西。',
    aboutBio: '我目前在电子科技大学攻读计算机科学与技术博士学位，研究工作主要涉及具身智能与多模态感知，同时也关注可复用的科研软件、评测基础设施与开放研究资源建设。',
    education: '教育经历',
    experience: '研究经历',
    honors: '荣誉与奖励',
    service: '学术服务',
    educationCurrent: '计算机科学与技术 · 博士研究生',
    educationPrevious: '此前研究生阶段学习',
    currentLabel: '2026.09 — 至今',
    previousLabel: '此前学习经历',
    uestc: '电子科技大学',
    jlu: '吉林大学',
    experienceLine: '具身智能相关算法研发',
    serviceLine: '曾担任 AAAI、IEEE Transactions on Multimedia 和 IEEE Transactions on Industrial Informatics 审稿人。',
    filterAll: '全部',
    filterMultimodal: '多模态',
    filterVision: '计算机视觉',
    selected: '精选',
    returnHome: '返回首页',
    publishedNote: '若原始记录包含 *，则其表示通信作者。',
    footerNote: '因好奇而探索，认真地做一些有用的东西。',
    footerRights: '保留所有权利。',
    emailLabel: '邮箱',
    tocLabel: '本页内容',
  },
} as const;

export function strings(lang: Lang) {
  return copy[lang];
}
export const navOrder: Section[] = ['home', 'publications', 'projects', 'about'];
export const email = '202611080345@std.uestc.edu.cn';
