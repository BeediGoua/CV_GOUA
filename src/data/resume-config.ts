import type { ResumeConfig } from './types';

export const resumeConfig: ResumeConfig = {
  // ===== INFORMATIONS PERSONNELLES =====
  personal: {
    name: 'Goua Beedi',
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Data Scientist',
      en: 'Data Scientist',
    },
    subtitle: {
      fr: 'IA Générative • Ingénierie des données • Systèmes ML',
      en: 'Generative AI • Data Engineering • ML Systems',
    },
    profile: {
      fr: "Diplômé de l’ENSAI, j’ai travaillé sur la conception de pipelines data/ML et de systèmes d’évaluation de modèles, notamment en IA générative. Je souhaite évoluer en tant que Data Scientist sur des projets d’IA appliquée, avec une attention particulière à la robustesse, à l’évaluation et à la fiabilité des résultats.",
      en: "Graduate of ENSAI, I have worked on designing data/ML pipelines and model evaluation systems, particularly in generative AI. I aim to evolve as a Data Scientist on applied AI projects with a focus on robustness, evaluation and reliability of results."
    },
    location: 'Paris, France',
  },

  // ===== SEO =====
  seo: {
    title: 'Goua Beedi — Data Scientist',
    description:
      'CV interactif de Goua Beedi, Data Scientist spécialisé en IA Générative, Ingénierie des données et évaluation de modèles.',
  },

  // ===== LANGUES =====
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: {
      fr: 'FR',
      en: 'EN',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'website', label: { fr: 'beedigoua.github.io', en: 'beedigoua.github.io' }, href: 'https://beedigoua.github.io' },
    { type: 'github', label: { fr: 'beedigoua', en: 'beedigoua' }, href: 'https://github.com/beedigoua' },
    { type: 'linkedin', label: { fr: 'Goua Beedi', en: 'Goua Beedi' }, href: 'https://linkedin.com/in/gouabeedi' },
    { type: 'email', label: { fr: 'gouabeedi@gmail.com', en: 'gouabeedi@gmail.com' } },
    { type: 'location', label: { fr: 'Paris, France', en: 'Paris, France' } },
  ],

  // ===== COMPÉTENCES =====
  skills: [
    {
      title: { fr: 'Langages de programmation', en: 'Programming Languages' },
      type: 'badges',
      items: [
        { name: { fr: 'Python', en: 'Python' } },
        { name: { fr: 'SQL', en: 'SQL' } },
        { name: { fr: 'R', en: 'R' } },
      ],
    },
    {
      title: { fr: 'Machine Learning & Statistiques', en: 'Machine Learning & Statistics' },
      type: 'text',
      items: [
        {
          name: { fr: 'Modélisation statistique & apprentissage automatique', en: 'Statistical Modeling & Machine Learning' },
          details: { fr: 'Évaluation et explicabilité', en: 'Evaluation and Explainability' },
        },
      ],
    },
    {
      title: { fr: 'IA Générative', en: 'Generative AI' },
      type: 'text',
      items: [
        {
          name: { fr: 'Systèmes RAG', en: 'RAG Systems' },
          details: { fr: 'Évaluation et robustesse des LLM', en: 'Evaluation and Robustness of LLMs' },
        },
      ],
    },
    {
      title: { fr: 'Data Engineering', en: 'Data Engineering' },
      type: 'badges',
      items: [
        { name: { fr: 'ETL', en: 'ETL' } },
        { name: { fr: 'ELT', en: 'ELT' } },
        { name: { fr: 'PostgreSQL', en: 'PostgreSQL' } },
        { name: { fr: 'Qualité des données', en: 'Data Quality' } },
      ],
    },
    {
      title: { fr: 'Déploiement', en: 'Deployment' },
      type: 'badges',
      items: [
        { name: { fr: 'FastAPI', en: 'FastAPI' } },
        { name: { fr: 'Docker', en: 'Docker' } },
        { name: { fr: 'CI/CD', en: 'CI/CD' } },
        { name: { fr: 'AWS', en: 'AWS' } },
        { name: { fr: 'GCP', en: 'GCP' } },
      ],
    },
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Professionnel', en: 'Professional' } },
      ],
    },
  ],

  // ===== EXPÉRIENCES PROFESSIONNELLES =====
  experiences: [
    {
      id: 'square-management',
      company: { fr: 'Square Management — Square Research Center', en: 'Square Management — Square Research Center' },
      role: { fr: 'Stagiaire IA Générative & Data Science', en: 'Intern in Generative AI & Data Science' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Avr 2025 – Nov 2025', en: 'Apr 2025 – Nov 2025' },
      description: {
        fr: 'Conception d’architectures RAG et de cadres d’évaluation pour améliorer la robustesse des modèles.',
        en: 'Designing RAG architectures and evaluation frameworks to improve model robustness.',
      },
      techs: ['Python', 'FastAPI', 'Docker', 'BM25', 'Embeddings', 'CI/CD'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Stage de fin d’études au Square Research Center, consacré à l’IA générative et aux systèmes RAG.',
          en: 'Final internship at the Square Research Center, focused on Generative AI and RAG systems.',
        },
        tasks: {
          fr: [
            'Conception d’une architecture RAG complète pour l’analyse de documents (OCR, chunking, embeddings, retrieval)',
            'Comparaison de 189+ configurations de retrieval, génération et reranking pour améliorer la pertinence',
            'Mise en place d’un cadre d’évaluation automatique (fidélité, pertinence, traçabilité)',
            'Optimisation du retrieval via recherche hybride (BM25 + embeddings)',
            'Packaging technique : API FastAPI, Docker, CI/CD et documentation',
          ],
          en: [
            'Designing a complete RAG architecture for document analysis (OCR, chunking, embeddings, retrieval)',
            'Comparing 189+ configurations of retrieval, generation, and reranking to improve relevance',
            'Setting up an automatic evaluation framework (fidelity, relevance, traceability)',
            'Optimizing retrieval through hybrid search (BM25 + embeddings)',
            'Technical packaging: FastAPI API, Docker, CI/CD, and documentation',
          ],
        },
        env: {
          fr: 'Python / FastAPI / Docker / BM25 / Embeddings / OCR / CI/CD',
          en: 'Python / FastAPI / Docker / BM25 / Embeddings / OCR / CI/CD',
        },
      },
    },
    {
      id: 'ville-de-paris',
      company: { fr: 'Ville de Paris — Agence de la Mobilité', en: 'City of Paris — Mobility Agency' },
      role: { fr: 'Stagiaire Data Science', en: 'Data Science Intern' },
      type: { fr: 'Stage', en: 'Internship' },
      period: { fr: 'Juin 2024 – Sep 2024', en: 'Jun 2024 – Sep 2024' },
      description: {
        fr: 'Développement de modèles de segmentation et de pipelines data/ML multi-sources pour la mobilité urbaine.',
        en: 'Development of segmentation models and multi-source data/ML pipelines for urban mobility.',
      },
      techs: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'Scikit-learn', 'Monitoring'],
      details: {
        context: { fr: 'Stage de 4 mois au sein de l’Agence de la Mobilité de la Ville de Paris.', en: '4-month internship at the Mobility Agency of the City of Paris.' },
        tasks: {
          fr: [
            'Développement d’un modèle supervisé pour segmenter les flottes de véhicules les plus polluantes',
            'Conception d’un pipeline SQL + Python multi‑sources sur 30 000+ enregistrements',
            'Mise en place d’un monitoring (latence, robustesse, qualité des données)',
            'Restitution via dashboards de KPI et segmentation pour faciliter l’analyse et la décision',
          ],
          en: [
            'Developing a supervised model to segment the most polluting fleets of vehicles',
            'Designing a multi-source SQL + Python pipeline on 30,000+ records',
            'Setting up monitoring (latency, robustness, data quality)',
            'Presenting via KPI dashboards and segmentation to facilitate analysis and decision-making',
          ],
        },
        env: {
          fr: 'Python / SQL / PostgreSQL / Scikit‑learn / Pandas / Monitoring',
          en: 'Python / SQL / PostgreSQL / Scikit-learn / Pandas / Monitoring',
        },
      },
    },
  ],

  // ===== PROJETS =====
  projects: [
    {
      id: 'credit-scoring',
      title: { fr: 'Credit Scoring — Modèle de risque à horizon 12 mois', en: 'Credit Scoring — 12-Month Risk Model' },
      description: {
        fr: 'Développement d’un modèle de scoring sur 530 000 comptes et 143 variables : imputation et détection de fuite, sélection de variables, régression logistique (AUC=0,78 ; Gini=0,57) comparée à Random Forest et XGBoost, et déploiement sous forme d’API FastAPI dockerisée.',
        en: 'Development of a scoring model on 530,000 accounts and 143 variables: imputation and leakage detection, variable selection, logistic regression (AUC=0.78; Gini=0.57) compared to Random Forest and XGBoost, and deployment as a dockerized FastAPI API.',
      },
      techs: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI', 'Docker', 'XGBoost', 'Random Forest'],
    },
    {
      id: 'etl-pipeline',
      title: { fr: 'Pipeline ETL — Analyse du marché de l’emploi', en: 'ETL Pipeline — Job Market Analysis' },
      description: {
        fr: 'Mise en place d’un pipeline d’ingestion multi‑sources avec architecture Bronze/Silver/Gold, déduplication et historisation (SCD2), chargement dans PostgreSQL et production de KPI fiables sur la demande par compétence.',
        en: 'Setting up a multi-source ingestion pipeline with Bronze/Silver/Gold architecture, deduplication and historization (SCD2), loading into PostgreSQL and producing reliable KPIs on skill demand.',
      },
      techs: ['Python', 'SQL', 'ETL', 'PostgreSQL', 'Pandas'],
    },
    {
      id: 'llm-hallucination',
      title: { fr: 'Détection d’hallucinations — Évaluation de résumés LLM', en: 'Hallucination Detection — LLM Summaries Evaluation' },
      description: {
        fr: 'Pipeline automatisé d’analyse de résumés sur 300+ articles, méthodologie d’évaluation des incohérences entre la source et le résumé, et développement d’une interface d’annotation pour analyser et catégoriser les incohérences.',
        en: 'Automated pipeline for analyzing summaries on 300+ articles, methodology for evaluating inconsistencies between source and summary, and development of an annotation interface to analyze and categorize inconsistencies.',
      },
      techs: ['Python', 'LLM', 'Annotation', 'Evaluation'],
    },
    {
      id: 'portfolio-site',
      title: { fr: 'Portfolio & Blog', en: 'Portfolio & Blog' },
      description: { fr: 'Site personnel présentant mes projets et articles.', en: 'Personal site showcasing my projects and articles.' },
      techs: ['React', 'TypeScript', 'Vite'],
      url: 'https://beedigoua.github.io',
      github: 'https://github.com/beedigoua/beedigoua.github.io',
    },
  ],

  // ===== FORMATION =====
  education: [
    {
      school: { fr: 'ENSAI', en: 'ENSAI' },
      degree: { fr: 'Diplôme d’ingénieur en Data Science et IA', en: 'Engineering Degree in Data Science and AI' },
      specialty: { fr: 'Machine Learning, NLP et Big Data', en: 'Machine Learning, NLP and Big Data' },
      period: '2022 – 2025',
    },
    {
      school: { fr: 'Classes Préparatoires', en: 'Preparatory Classes' },
      degree: { fr: 'Mathématiques, Physique & Sciences de l’Ingénieur', en: 'Mathematics, Physics & Engineering Sciences' },
      period: '2020 – 2022',
    },
  ],

  // ===== PDF =====
  pdf: {
    label: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    path: {
      fr: '/cv/fr/GOUA_CV_FR.pdf',
      en: '/cv/fr/GOUA_CV_EN.pdf'
    },
  },

  // ===== THÈME =====
  theme: {
    preset: 'slate',
  },

  // ===== LIBELLÉS UI =====
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
    },
    experience: {
      mainTasks: { fr: 'Tâches principales :', en: 'Main Tasks:' },
      moreTasks: { fr: 'autres tâches...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Environnement technique :', en: 'Technical Environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
};