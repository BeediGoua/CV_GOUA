import type { ResumeConfig } from './types'

/**
 * Configuration du CV interactif pour Goua Beedi.
 *
 * Cette configuration reprend la structure du template original tout en
 * l’adaptant aux informations contenues dans le CV fourni. Les champs
 * multilingues utilisent uniquement le français, mais peuvent être étendus
 * en ajoutant d’autres clés linguistiques si nécessaire. Le fichier PDF est
 * référencé dans le dossier `public/cv/fr/` pour activer le bouton de
 * téléchargement.
 */
export const resumeConfig: ResumeConfig = {
  // ===== INFORMATIONS PERSONNELLES =====
  personal: {
    name: 'Goua Beedi',
    // Si vous placez une photo dans public/images/, elle sera détectée automatiquement.
    photoBackEmoji: '👨‍💻',
    title: {
      fr: 'Data Scientist',
      en: 'Data Scientist',
    },
    subtitle: {
      fr: 'Spécialisé en IA Générative, Data Engineering et ML',
      en: 'Specialized in Generative AI, Data Engineering and ML',
    },
    // Texte de présentation détaillé (profil)
    profile: {
      fr: 'Diplômé de l’ENSAI, j’ai travaillé sur la conception de pipelines data/ML et de systèmes d’évaluation de modèles, notamment en IA générative. Je souhaite évoluer en tant que Data Scientist sur des projets d’IA appliquée, avec une attention particulière à la robustesse, à l’évaluation et à la fiabilité des résultats.',
      en: 'Graduate of ENSAI, I have worked on designing data/ML pipelines and model evaluation systems, particularly in generative AI. I aim to evolve as a Data Scientist on applied AI projects with a focus on robustness, evaluation and reliability of results.',
    },
    location: 'Paris, France',
  },

  // ===== SEO =====
  seo: {
    title: 'Goua Beedi — Data Scientist',
    description:
      'CV interactif de Goua Beedi, Data Scientist spécialisé en IA Générative, Data Engineering et évaluation de modèles.',
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
    { type: 'website', label: 'beedigoua.github.io', href: 'https://beedigoua.github.io' },
    { type: 'github', label: 'beedigoua', href: 'https://github.com/beedigoua' },
    { type: 'linkedin', label: 'Goua Beedi', href: 'https://linkedin.com/in/gouabeedi' },
    { type: 'email', label: 'gouabeedi@gmail.com' },
    { type: 'location', label: 'Paris, France' },
  ],

  // ===== COMPÉTENCES =====
  skills: [
    {
      title: { fr: 'Langages de programmation', en: 'Programming languages' },
      type: 'badges',
      items: [
        { name: 'Python' },
        { name: 'SQL' },
        { name: 'R' },
      ],
    },
    {
      title: { fr: 'Machine Learning & Statistiques', en: 'Machine Learning & Statistics' },
      type: 'text',
      items: [
        {
          name: { fr: 'Modélisation statistique & apprentissage automatique', en: 'Statistical modeling & machine learning' },
          details: 'Évaluation et explicabilité / Evaluation and interpretability',
        },
      ],
    },
    {
      title: { fr: 'IA Générative', en: 'Generative AI' },
      type: 'text',
      items: [
        {
          name: { fr: 'Systèmes RAG', en: 'RAG systems' },
          details: 'Évaluation et robustesse des LLM / Evaluation and robustness of LLMs',
        },
      ],
    },
    {
      title: { fr: 'Data Engineering', en: 'Data Engineering' },
      type: 'badges',
      items: [
        { name: 'ETL' },
        { name: 'ELT' },
        { name: 'PostgreSQL' },
        { name: 'Data Quality' },
      ],
    },
    {
      title: { fr: 'Déploiement', en: 'Deployment' },
      type: 'badges',
      items: [
        { name: 'FastAPI' },
        { name: 'Docker' },
        { name: 'CI/CD' },
        { name: 'AWS' },
        { name: 'GCP' },
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
      company: { fr: 'Square Management — Square Research Center' },
      role: { fr: 'Stagiaire IA Générative & Data Science' },
      type: { fr: 'Stage' },
      period: { fr: 'Avr 2025 – Nov 2025' },
      description: {
        fr: 'Conception d’architectures RAG et de cadres d’évaluation pour améliorer la robustesse des modèles.',
        en: 'Designing RAG architectures and evaluation frameworks to improve model robustness.',
      },
      techs: ['Python', 'FastAPI', 'Docker', 'BM25', 'Embeddings', 'CI/CD'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Stage de fin d’études au Square Research Center, consacré à l’IA générative et aux systèmes RAG.',
          en: 'End-of-study internship at the Square Research Center focused on generative AI and RAG systems.',
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
            'Designed a complete RAG architecture for document analysis (OCR, chunking, embeddings, retrieval)',
            'Compared 189+ configurations of retrieval, generation and reranking to improve relevance',
            'Implemented an automated evaluation framework (faithfulness, relevance, traceability)',
            'Optimized retrieval through hybrid search (BM25 + embeddings)',
            'Packaged the solution as a FastAPI API with Docker, CI/CD and documentation',
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
      company: { fr: 'Ville de Paris — Agence de la Mobilité' },
      role: { fr: 'Stagiaire Data Science' },
      type: { fr: 'Stage' },
      period: { fr: 'Juin 2024 – Sep 2024' },
      description: {
        fr: 'Développement de modèles de segmentation et de pipelines data/ML multi-sources pour la mobilité urbaine.',
        en: 'Development of segmentation models and multi-source data/ML pipelines for urban mobility.',
      },
      techs: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'Scikit-learn', 'Monitoring'],
      details: {
        context: { fr: 'Stage de 4 mois au sein de l’Agence de la Mobilité de la Ville de Paris.' },
        tasks: {
          fr: [
            'Développement d’un modèle supervisé pour segmenter les flottes de véhicules les plus polluantes',
            'Conception d’un pipeline SQL + Python multi‑sources sur 30 000+ enregistrements',
            'Mise en place d’un monitoring (latence, robustesse, qualité des données)',
            'Restitution via dashboards de KPI et segmentation pour faciliter l’analyse et la décision',
          ],
          en: [
            'Developed a supervised model to segment the most polluting vehicle fleets',
            'Designed a multi-source SQL + Python pipeline on 30k+ records',
            'Implemented monitoring (latency, robustness, data quality)',
            'Delivered dashboards of KPI and segmentation to facilitate analysis and decision-making',
          ],
        },
        env: {
          fr: 'Python / SQL / PostgreSQL / Scikit‑learn / Pandas / Monitoring',
          en: 'Python / SQL / PostgreSQL / Scikit‑learn / Pandas / Monitoring',
        },
      },
    },
  ],

  // ===== PROJETS =====
  projects: [
    {
      id: 'credit-scoring',
      title: { fr: 'Credit Scoring — Modèle de risque à horizon 12 mois' },
      description: {
        fr: 'Développement d’un modèle de scoring sur 530 000 comptes et 143 variables : imputation et détection de fuite, sélection de variables, régression logistique (AUC=0,78 ; Gini=0,57) comparée à Random Forest et XGBoost, et déploiement sous forme d’API FastAPI dockerisée.',
        en: 'Developed a scoring model on 530k accounts and 143 variables: data imputation and leakage detection, feature selection, logistic regression (AUC=0.78; Gini=0.57) benchmarked against Random Forest and XGBoost, and deployment via a Dockerized FastAPI API.',
      },
      techs: [
        'Python',
        'Pandas',
        'Scikit-learn',
        'FastAPI',
        'Docker',
        'XGBoost',
        'Random Forest',
      ],
    },
    {
      id: 'etl-pipeline',
      title: { fr: 'Pipeline ETL — Analyse du marché de l’emploi' },
      description: {
        fr: 'Mise en place d’un pipeline d’ingestion multi‑sources avec architecture Bronze/Silver/Gold, déduplication et historisation (SCD2), chargement dans PostgreSQL et production de KPI fiables sur la demande par compétence.',
        en: 'Implemented a multi-source ingestion pipeline with a Bronze/Silver/Gold architecture, deduplication and SCD2 historization, loading into PostgreSQL and production of reliable KPIs on skills demand.',
      },
      techs: ['Python', 'SQL', 'ETL', 'PostgreSQL', 'Pandas'],
    },
    {
      id: 'llm-hallucination',
      title: { fr: 'Détection d’hallucinations — Évaluation de résumés LLM' },
      description: {
        fr: 'Pipeline automatisé d’analyse de résumés sur 300+ articles, méthodologie d’évaluation des incohérences entre la source et le résumé, et développement d’une interface d’annotation pour analyser et catégoriser les incohérences.',
        en: 'Automated pipeline for analyzing summaries over 300+ articles, methodology for evaluating inconsistencies between the source and the summary, and development of an annotation interface to analyze and categorize inconsistencies.',
      },
      techs: ['Python', 'LLM', 'Annotation', 'Evaluation'],
    },
    {
      id: 'portfolio-site',
      title: { fr: 'Portfolio & Blog' },
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
      degree: { fr: 'Diplôme d’ingénieur en Data Science et IA', en: 'Engineering degree in Data Science and AI' },
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
    path: { fr: '/cv/fr/GOUA_CV_FR.pdf', en: '/cv/fr/GOUA_CV_EN.pdf' },
  },

  // ===== THÈME =====
  theme: {
    preset: 'slate',
    // Vous pouvez surcharger des couleurs individuelles ici si vous le souhaitez.
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
      mainTasks: { fr: 'Tâches principales :', en: 'Main tasks:' },
      moreTasks: { fr: 'autres tâches...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Environnement technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Toggle dark mode' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}