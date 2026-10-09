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
  category: 'research';
  type: { en: string; zh: string };
  subtitle: { en: string; zh: string };
  description: { en: string; zh: string };
  tags: string[];
  links: { label: string; url: string }[];
  featured?: boolean;
}

export interface Dataset {
  id: string;
  name: string;
  fullName: { en: string; zh: string };
  description: { en: string; zh: string };
  detail: { en: string; zh: string };
  category: { en: string; zh: string };
  modalities: string[];
  links: { label: string; url: string }[];
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

];


export const datasets: Dataset[] = [
  {
    id: 'evdb',
    name: 'EVDB',
    fullName: {en: 'Event-based Deblurring Dataset', zh: '事件相机图像去模糊数据集'},
    category: {en: 'IMAGE RESTORATION', zh: '图像复原'},
    description: {
      en: 'Real-world image deblurring with synchronized blurry images and event streams.',
      zh: '包含真实模糊图像和事件流的事件视觉图像去模糊数据集。',
    },
    detail: {
      en: 'The original site describes a real-world evaluation set without ground-truth sharp images. The linked publication is a paper reference, not a direct download.',
      zh: '旧主页注明该数据集包含无清晰图像真值的真实场景测试集。下方链接为相关论文，而非直接数据下载地址。',
    },
    modalities: ['Event', 'RGB', 'Deblurring'],
    links: [{label: 'Paper', url: 'https://ieeexplore.ieee.org/document/11247836'}],
  },
  {
    id: 'evcslr',
    name: 'EvCSLR',
    fullName: {en: 'Event-based Continuous Sign Language Recognition', zh: '基于事件视觉的连续手语识别数据集'},
    category: {en: 'SIGN LANGUAGE', zh: '手语理解'},
    description: {
      en: 'An event-based dataset and benchmark for continuous sign language recognition.',
      zh: '面向连续手语识别研究的事件视觉数据集与评测基准。',
    },
    detail: {
      en: 'The research repository contains the associated publication and project materials.',
      zh: '可通过公开研究仓库查看关联论文及项目资料。',
    },
    modalities: ['Event', 'Sign Language', 'CSLR'],
    links: [
      {label:'Paper',url:'https://ieeexplore.ieee.org/document/10814091'},
      {label:'Repository',url:'https://github.com/diamondxx/EvCSLR'},
    ],
  },
  {
    id: 'illumslr',
    name: 'IllumSLR',
    fullName: {en: 'Sign Language Recognition under Diverse Illumination', zh: '多光照条件手语识别数据集'},
    category: {en: 'MULTIMODAL PERCEPTION', zh: '多模态感知'},
    description: {
      en: 'An isolated sign language dataset captured under varying illumination, involving RGB, skeleton, and event modalities.',
      zh: '覆盖不同光照条件的孤立手语识别数据集，包含 RGB、骨骼与事件等模态。',
    },
    detail: {
      en: 'The previous website reports 700 sign classes. The link below points to the related paper.',
      zh: '旧主页记录该数据集覆盖 700 个手语类别。下方链接指向相关论文。',
    },
    modalities: ['RGB', 'Skeleton', 'Event'],
    links: [{label:'Paper',url:'https://ieeexplore.ieee.org/document/11447342'}],
  },
  {
    id: 'evsl',
    name: 'EvSL',
    fullName: {en: 'Event-based Sign Language Dataset', zh: '事件视觉手语数据集'},
    category: {en: 'SIGN LANGUAGE', zh: '手语理解'},
    description: {
      en: 'An event-based sign language dataset designed for multiple sign language understanding tasks.',
      zh: '面向多类手语理解任务的事件视觉数据集。',
    },
    detail: {
      en: 'Dataset information is retained from the previous website. A verified public download or publication link is not yet listed.',
      zh: '相关简介沿用旧主页；暂未提供经过核实的公开下载或论文链接。',
    },
    modalities: ['Event', 'Sign Language', 'Multitask'],
    links: [],
  },
];

export const researchAreas = [
  {id:'01', title:{en:'Embodied Intelligence',zh:'具身智能'}, description:{
    en:'Vision-language-action policy training and adaptation, robot manipulation, safety and robustness evaluation, and action-conditioned modeling of how the world changes.',
    zh:'研究视觉语言动作模型的训练与适配、机器人操作，以及模型安全性与鲁棒性评测；探索动作条件下的环境变化建模。'
  }, tags:['VLA','Robot Learning','World Models']},
  {id:'02', title:{en:'Multimodal Perception',zh:'多模态感知'}, description:{
    en:'Multimodal representation learning across images, language, events, and motion, with applications to sign language recognition and translation, visual understanding, and image restoration.',
    zh:'面向图像、语言、事件流与运动信息的多模态表征学习，研究手语识别与翻译、视觉理解以及图像复原等任务。'
  }, tags:['Vision-Language','Sign Language','Event Vision']},
  {id:'03', title:{en:'Research Systems',zh:'科研系统与基准'}, description:{
    en:'Developing reusable training and evaluation infrastructure, curating datasets and benchmarks, and organizing evidence-driven comparisons to improve research reproducibility.',
    zh:'构建可复用的训练与评测基础设施，整理数据集与基准设置，并通过规范化的实验对比和研究资料组织提升可复现性。'
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
    nav: { home: 'Home', publications: 'Publications', projects: 'Projects', datasets: 'Datasets', about: 'About' },
    heroEyebrow: 'HELLO, I’M',
    heroName: 'Qi Chu',
    heroCn: '初琦',
    heroTitle: 'Exploring the space between',
    heroTitleEm: 'perception & action.',
    heroIntro: 'I am a Ph.D. student in Computer Science and Technology at the University of Electronic Science and Technology of China (UESTC). My research interests span embodied intelligence, multimodal learning, and practical AI research systems.',
    heroPrimary: 'Explore my research',
    heroSecondary: 'Get in touch',
    heroImgCaption: 'A LITTLE BIT OF ELYSIA',
    heroSide: 'RESEARCH / 2026',
    sectionResearch: 'Research interests',
    researchSubtitle: 'Connecting intelligent perception, purposeful actions, and the systems that make research reproducible.',
    sectionPubs: 'Publications',
    pubsSubtitle: 'Published journal and conference papers, with a separate archive for filtering and pagination.',
    sectionProjects: 'Research projects',
    projectsSubtitle: 'Research frameworks and open scientific resources that support reproducible AI research.',
    sectionNews: 'Recent updates',
    newsSubtitle: 'Selected milestones from my research and academic journey.',
    sectionReach: 'Let’s connect.',
    reachIntro: 'Open to academic conversations, thoughtful collaborations, and interesting ideas.',
    reachBtn: 'Send an email',
    allPublications: 'All publications',
    allProjects: 'All projects',
    allDatasets: 'View datasets',
    sectionDatasets: 'Research datasets',
    datasetsSubtitle: 'Datasets and benchmarks from vision, event-based perception, and sign language research.',
    pageDatasetEyebrow: 'DATASETS & BENCHMARKS',
    pageDatasetTitle: 'Datasets',
    pageDatasetIntro: 'Research datasets curated from my previous academic website, with publication or repository links where available.',
    datasetInfoNote: 'Publication links are labeled as papers; they are not necessarily direct dataset downloads.',
    moreNews: 'More about me',
    pagePubEyebrow: 'ACADEMIC OUTPUT',
    pagePubTitle: 'Publications',
    pagePubIntro: 'All published journal and conference papers, organized by topic with ten papers per page.',
    pageProjectEyebrow: 'RESEARCH SYSTEMS & RESOURCES',
    pageProjectTitle: 'Projects',
    pageProjectIntro: 'Research platforms and open resources I develop or contribute to, with a focus on robot learning and VLA research.',
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
    experiencePeriod: 'Jun 2026 — Present',
    snapshotTitle: 'Academic profile',
    snapshotSubtitle: 'A brief introduction to my current academic work and experience.',
    snapshotStudy: 'Current studies',
    snapshotExperience: 'Research experience',
    snapshotService: 'Academic service',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
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
    nav: { home: '首页', publications: '论文', projects: '项目', datasets: '数据集', about: '关于' },
    heroEyebrow: '你好，我是',
    heroName: 'Qi Chu',
    heroCn: '初琦',
    heroTitle: '探索感知、理解与',
    heroTitleEm: '行动之间的智能。',
    heroIntro: '目前就读于电子科技大学，攻读计算机科学与技术博士学位。主要关注具身智能、多模态学习，以及支持可复现研究的 AI 系统与科研基础设施。',
    heroPrimary: '探索研究方向',
    heroSecondary: '与我联系',
    heroImgCaption: 'A LITTLE BIT OF ELYSIA',
    heroSide: '研究 / 2026',
    sectionResearch: '研究方向',
    researchSubtitle: '连接多模态感知、具身行动与可复用的科研系统。',
    sectionPubs: '论文发表',
    pubsSubtitle: '按时间整理正式发表成果，独立论文页面支持方向筛选与分页浏览。',
    sectionProjects: '科研项目',
    projectsSubtitle: '用于具身智能研究与可复现科研实践的框架和开放知识资源。',
    sectionNews: '近期动态',
    newsSubtitle: '记录研究进展与学术经历中的重要节点。',
    sectionReach: '保持联系。',
    reachIntro: '欢迎学术交流、研究合作与有趣的想法。',
    reachBtn: '发送邮件',
    allPublications: '全部论文',
    allProjects: '全部项目',
    allDatasets: '查看全部数据集',
    sectionDatasets: '研究数据集',
    datasetsSubtitle: '涵盖视觉感知、事件视觉及手语理解的研究数据集与基准。',
    pageDatasetEyebrow: '数据集与基准',
    pageDatasetTitle: '研究数据集',
    pageDatasetIntro: '整理自此前学术主页中的数据集资料，并明确标注可访问的论文与仓库链接。',
    datasetInfoNote: 'Paper 标识的是相关论文链接，并不代表数据集可直接下载。',
    moreNews: '了解更多',
    pagePubEyebrow: '学术成果',
    pagePubTitle: '论文发表',
    pagePubIntro: '完整的正式发表论文列表，支持研究方向筛选，每页最多展示 10 篇。',
    pageProjectEyebrow: '科研框架与开放资源',
    pageProjectTitle: '项目作品',
    pageProjectIntro: '聚焦具身智能研究、机器人学习框架与开放科研知识基础设施。',
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
    experiencePeriod: '2026.06 — 至今',
    snapshotTitle: '学术简介',
    snapshotSubtitle: '概览当前的学术阶段、研究经历和学术服务。',
    snapshotStudy: '当前学习',
    snapshotExperience: '研究经历',
    snapshotService: '学术服务',
    themeToLight: '切换为日间模式',
    themeToDark: '切换为夜间模式',
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
export const navOrder: Section[] = ['home', 'publications', 'projects', 'datasets', 'about'];
export const email = '202611080345@std.uestc.edu.cn';
