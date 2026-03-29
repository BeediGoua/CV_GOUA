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
    { type: 'website', label: { fr: 'beedigoua.github.io/CV_GOUA', en: 'beedigoua.github.io/CV_GOUA' }, href: 'https://beedigoua.github.io/CV_GOUA/' },
    { type: 'github', label: { fr: 'beedigoua', en: 'beedigoua' }, href: 'https://github.com/beedigoua' },
    { type: 'linkedin', label: { fr: 'Goua Beedi', en: 'Goua Beedi' }, href: 'https://linkedin.com/in/gouabeedi' },
    { type: 'email', label: { fr: 'gouabeedi@gmail.com', en: 'gouabeedi@gmail.com' } },
    { type: 'location', label: { fr: 'Paris, France', en: 'Paris, France' } },
  ],

  // ===== COMPÉTENCES =====
  skills: [
    {
      title: { fr: 'Langages & Outils Core', en: 'Core Languages & Tools' },
      type: 'badges',
      items: [
        { name: { fr: 'Python', en: 'Python' } },
        { name: { fr: 'SQL', en: 'SQL' } },
        { name: { fr: 'R', en: 'R' } },
        { name: { fr: 'Git', en: 'Git' } },
      ],
    },
    {
      title: { fr: 'Statistiques, Machine & Deep Learning', en: 'Statistics, Machine & Deep Learning' },
      type: 'text',
      items: [
        {
          name: { fr: 'Statistiques inférentielles & modélisation', en: 'Inferential Statistics & Modeling' },
          details: {
            fr: 'Tests d’hypothèses & intervalles de confiance, régression linéaire & logistique, sélection de variables & validation croisée',
            en: 'Hypothesis testing & confidence intervals, linear & logistic regression, variable selection & cross-validation'
          },
        },
        {
          name: { fr: 'Machine Learning & séries temporelles', en: 'Machine Learning & Time Series' },
          details: {
            fr: 'Arbres, Random Forest, Gradient Boosting (XGBoost), Feature engineering, ARIMA & prévision multi-séries, métriques : AUC, Gini, RMSE',
            en: 'Trees, Random Forest, Gradient Boosting (XGBoost), Feature engineering, ARIMA & multi-series forecasting, metrics: AUC, Gini, RMSE'
          },
        },
        {
          name: { fr: 'Deep Learning & NLP', en: 'Deep Learning & NLP' },
          details: {
            fr: 'Réseaux neuronaux (MLP, LSTM), classification de texte, embeddings & similarité, fine-tuning basique',
            en: 'Neural Networks (MLP, LSTM), text classification, embeddings & similarity, basic fine-tuning'
          },
        },
      ],
    },
    {
      title: { fr: 'Data Engineering & Qualité', en: 'Data Engineering & Quality' },
      type: 'badges',
      items: [
        { name: { fr: 'ETL/ELT', en: 'ETL/ELT' } },
        { name: { fr: 'PostgreSQL', en: 'PostgreSQL' } },
        { name: { fr: 'Qualité des données', en: 'Data Quality' } },
        { name: { fr: 'Ingestion multi-sources', en: 'Multi-source Ingestion' } },
      ],
    },
    {
      title: { fr: 'IA Générative & Systèmes LLM', en: 'Generative AI & LLM Systems' },
      type: 'text',
      items: [
        {
          name: { fr: 'Chatbots & systèmes conversationnels', en: 'Chatbots & Conversational Systems' },
          details: {
            fr: 'Conception de flux, intégration API (FastAPI), gestion du contexte & mémoire, monitoring des réponses',
            en: 'Flow design, API integration (FastAPI), context & memory management, response monitoring'
          },
        },
        {
          name: { fr: 'RAG & Retrieval', en: 'RAG & Retrieval' },
          details: {
            fr: 'Embeddings & vector search, chunking & reranking',
            en: 'Embeddings & vector search, chunking & reranking'
          },
        },
        {
          name: { fr: 'Évaluation & Robustesse LLM', en: 'LLM Evaluation & Robustness' },
          details: {
            fr: 'LLM-as-judge, détection d’hallucinations, évaluation factuelle',
            en: 'LLM-as-judge, hallucination detection, factual evaluation'
          },
        },
      ],
    },
    {
      title: { fr: 'MLOps & Opérationnalisation', en: 'MLOps & Operationalization' },
      type: 'badges',
      items: [
        { name: { fr: 'FastAPI', en: 'FastAPI' } },
        { name: { fr: 'Docker', en: 'Docker' } },
        { name: { fr: 'CI/CD', en: 'CI/CD' } },
        { name: { fr: 'AWS/GCP', en: 'AWS/GCP' } },
        { name: { fr: 'Monitoring', en: 'Monitoring' } },
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
      details: {
        context: {
          fr: 'Stage de fin d’études au Square Research Center, consacré à l’IA générative et aux systèmes RAG.',
          en: 'Final internship at the Square Research Center, focused on Generative AI and RAG systems.',
        },
        tasks: {
          fr: [
            'Conception d’une architecture RAG complète (OCR, chunking, embeddings, retrieval)',
            'Comparaison de 189+ configurations de retrieval et reranking',
            'Mise en place d’un cadre d’évaluation automatique',
            'Optimisation du retrieval via recherche hybride (BM25 + embeddings)',
            'Packaging technique : API FastAPI, Docker, CI/CD',
          ],
          en: [
            'Designing a complete RAG architecture (OCR, chunking, embeddings, retrieval)',
            'Comparing 189+ configurations of retrieval and reranking',
            'Setting up an automatic evaluation framework',
            'Optimizing retrieval through hybrid search (BM25 + embeddings)',
            'Technical packaging: FastAPI, Docker, CI/CD',
          ],
        },
        architecture: {
          fr: '• Chunking strategy (Recursive/Semantic)\n• Embedding + Reranking (Cross-Encoders)\n• Retrieval orchestration via LangChain/LlamaIndex',
          en: '• Chunking strategy (Recursive/Semantic)\n• Embedding + Reranking (Cross-Encoders)\n• Retrieval orchestration via LangChain/LlamaIndex',
        },
        impact: {
          fr: '• Amélioration de la cohérence factuelle\n• Réduction du taux d’hallucinations\n• Système prêt pour la production (Haut débit)',
          en: '• Improved factual consistency\n• Reduced hallucination rate\n• Production-ready system (High throughput)',
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
            'Développement d’un modèle supervisé (XGBoost) pour segmenter les flottes polluantes',
            'Conception d’un pipeline SQL + Python sur 30 000+ enregistrements',
            'Mise en place d’un monitoring (latence, robustesse, qualité)',
            'Restitution via dashboards de KPI et segmentation',
          ],
          en: [
            'Developing a supervised model (XGBoost) to segment polluting fleets',
            'Designing a SQL + Python pipeline on 30,000+ records',
            'Setting up monitoring (latency, robustness, quality)',
            'Presenting via KPI dashboards and segmentation',
          ],
        },
        impact: {
          fr: '• Automatisation du process d’identification des véhicules\n• Aide à la décision pour les politiques de zone à faible émission',
          en: '• Automation of vehicle identification process\n• Decision support for low-emission zone policies',
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
        fr: 'Modèle de scoring sur 530 000 comptes. AUC=0,78 ; Gini=0,57.',
        en: 'Scoring model on 530,000 accounts. AUC=0.78; Gini=0.57.',
      },
      techs: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI', 'XGBoost'],
      details: {
        problem: {
          fr: 'Prédire la probabilité de défaut de paiement à 12 mois.',
          en: 'Predict the probability of default over a 12-month horizon.',
        },
        methodology: {
          fr: '• Split temporel\n• Feature engineering (WOE, binning)\n•modèles : Logistique, RF, XGBoost',
          en: '• Temporal split\n• Feature engineering (WOE, binning)\n• Model benchmarking: Logistic, RF, XGBoost',
        },
        validation: {
          fr: '• AUC : 0.78\n• Gini : 0.57\n• Tests de stabilité temporelle',
          en: '• AUC: 0.78\n• Gini: 0.57\n• Temporal stability tests',
        },
        tools: ['Python', 'Scikit-learn', 'XGBoost', 'SHAP'],
      },
    },
    {
      id: 'brokerflow-ai',
      title: { fr: 'BrokerFlow AI — Système de décision de crédit', en: 'BrokerFlow AI — Credit Underwriting Decision System' },
      description: {
        fr: 'Pipeline d’ingestion multi‑sources avec architecture Bronze/Silver/Gold.',
        en: 'Multi-source ingestion pipeline with Bronze/Silver/Gold architecture.',
      },
      techs: ['PostgreSQL', 'Python', 'Docker', 'ETL'],
      details: {
        problem: {
          fr: 'Besoin d’agréger des offres d’emploi hétérogènes pour analyser les compétences.',
          en: 'Aggregating heterogeneous job offers to analyze skill trends.',
        },
        methodology: {
          fr: '• Architecture Bronze / Silver / Gold\n• Déduplication inter-sources\n• Historisation SCD2',
          en: '• Bronze / Silver / Gold architecture\n• Cross-source deduplication\n• SCD2 historization',
        },
        validation: {
          fr: '• Checks de qualité des données\n• Chargements incrémentaux robustes',
          en: '• Data quality checks\n• Robust incremental loads',
        },
        tools: ['PostgreSQL', 'Python', 'Docker'],
      },
    },
    {
      id: 'insurance-recommender-zimnat',
      title: {
        fr: 'Système de Recommandation d’Assurance (Zimnat)',
        en: 'Insurance Recommendation System (Zimnat)'
      },
      description: {
        fr: 'Approche hybride (Machine Learning + Règles Statistiques) pour optimiser le cross-sell dans l’assurance.',
        en: 'Hybrid approach (Machine Learning + Statistical Rules) to optimize cross-sell in insurance.'
      },
      techs: ['Python', 'CatBoost', 'Streamlit'],
      details: {
        problem: {
          fr: `Le client Zimnat (Zimbabwe) souhaitait améliorer la recommandation de produits d’assurance pour éviter les sollicitations inutiles et augmenter la fidélité. Objectif : passer du mass marketing au precision marketing, augmenter le cross-sell, et réduire le churn.`,
          en: `Zimnat (Zimbabwe) wanted to improve insurance product recommendations to avoid redundant offers and increase customer loyalty. Goal: shift from mass marketing to precision marketing, boost cross-sell, and reduce churn.`
        },
        methodology: {
          fr: `• Architecture hybride :\n   - Moteur 1 : Baseline statistique (probabilités conditionnelles, mémoire collective)\n   - Moteur 2 : CatBoost (gradient boosting, personnalisation fine)\n• Sécurité anti-cheat : jamais recommander un produit déjà détenu\n• Application Streamlit avec 5 modules :\n   1. Tableau de bord exécutif\n   2. Business Insights (stratégie)\n   3. Client Inspector (terrain)\n   4. Market Simulator (laboratoire)\n   5. Methodology (transparence, validation Leave-One-Out)`,
          en: `• Hybrid architecture:\n   - Engine 1: Statistical baseline (conditional probabilities, collective memory)\n   - Engine 2: CatBoost (gradient boosting, fine personalization)\n• Anti-cheat rule: never recommend an already owned product\n• Streamlit app with 5 modules:\n   1. Executive dashboard\n   2. Business Insights (strategy)\n   3. Client Inspector (field)\n   4. Market Simulator (lab)\n   5. Methodology (transparency, Leave-One-Out validation)`
        },
        validation: {
          fr: `• Déploiement en production chez Zimnat\n• Hausse du taux de cross-sell\n• KPI Hit@1, Top-3, analyse des segments\n• Application utilisée par les agents et le management` ,
          en: `• Deployed in production at Zimnat\n• Increased cross-sell rate\n• KPI Hit@1, Top-3, segment analysis\n• App used by agents and management`
        },
        tools: ['Python', 'CatBoost', 'Streamlit']
      },
      url: '',
      github: '',
    },
    {
      id: 'document-ai-pipeline',
      title: { fr: 'Document AI Pipeline — Classification et extraction de documents d\'identité', en: 'Document AI Pipeline — Identity Document Classification & Extraction' },
      description: {
        fr: 'Pipeline modulaire pour classifier et extraire les informations structurées de documents d\'identité (PDF/images).',
        en: 'Modular pipeline to identify and extract structured information from identity documents (ID card, passport, driver license).',
      },
      techs: ['Python', 'OCR', 'Computer Vision', 'PyTorch', 'FastAPI'],
      details: {
        problem: {
          fr: 'Extraire automatiquement les informations d\'identité à partir de documents variés et de qualités différentes.',
          en: 'Automatically extract identity information from diverse document types and variable image quality.',
        },
        methodology: {
          fr: '• Classification de type de document (Carte d\'identité, Passeport, Permis, etc.)\n• OCR avec normalisation\n• Parsing de zones de lecture machine (MRZ)\n• Architecture modulaire et réutilisable',
          en: '• Document type classification (ID card, passport, driver license, etc.)\n• Optical Character Recognition (OCR) with normalization\n• Machine Readable Zone (MRZ) parsing\n• Modular and reusable architecture',
        },
        validation: {
          fr: '• Taux de reconnaissance élevé multilingue\n• Extraction structurée fiable\n• Robustesse aux variations de numérisation',
          en: '• High multilingual recognition accuracy\n• Reliable structured data extraction\n• Robustness to scanning variations',
        },
        tools: ['Python', 'PyTorch', 'OpenCV', 'Tesseract OCR', 'FastAPI'],
      },
    },
    {
      id: 'etl-pipeline',
      title: { fr: 'Pipeline ETL — Job Market Intelligence', en: 'ETL Pipeline — Job Market Intelligence' },
      description: {
        fr: "Pipeline d'ingestion multi‑sources avec architecture Bronze/Silver/Gold.",
        en: 'Multi-source ingestion pipeline with Bronze/Silver/Gold architecture.',
      },
      techs: ['PostgreSQL', 'Python', 'Docker', 'ETL'],
      details: {
        problem: {
          fr: "Besoin d'agréger des offres d'emploi hétérogènes pour analyser les compétences.",
          en: 'Aggregating heterogeneous job offers to analyze skill trends.',
        },
        methodology: {
          fr: '• Architecture Bronze / Silver / Gold\n• Déduplication inter-sources\n• Historisation SCD2',
          en: '• Bronze / Silver / Gold architecture\n• Cross-source deduplication\n• SCD2 historization',
        },
        validation: {
          fr: '• Checks de qualité des données\n• Chargements incrémentaux robustes',
          en: '• Data quality checks\n• Robust incremental loads',
        },
        tools: ['PostgreSQL', 'Python', 'Docker'],
      },
    },
    {
      id: 'portfolio-site',
      title: { fr: 'Portfolio', en: 'Portfolio' },
      description: { fr: 'Site personnel présentant mes projets.', en: 'Personal site showcasing my projects.' },
      techs: ['React', 'TypeScript', 'Vite'],
      url: 'https://beedigoua.github.io/CV_GOUA/',
      github: 'https://github.com/beedigoua/beedigoua.github.io',
    },
  ],

  // ===== FORMATION =====
  education: [
    {
      school: { fr: 'ENSAI', en: 'ENSAI' },
      degree: { fr: 'Diplôme d’ingénieur en Data Science et IA', en: 'Engineering Degree in Data Science and AI' },
      specialty: { fr: 'Machine Learning, NLP et Big Data', en: 'Machine Learning, NLP and Big Data' },
    },
    {
      school: { fr: 'Classes Préparatoires', en: 'Preparatory Classes' },
      degree: { fr: 'Mathématiques, Physique & Sciences de l’Ingénieur', en: 'Mathematics, Physics & Engineering Sciences' },
    },
  ],

  // ===== PDF =====
  pdf: {
    label: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    path: {
      fr: '/cv/fr/GOUA_CV_FR.pdf',
      en: '/cv/en/GOUA_CV_EN.pdf'
    },
  },

  // ===== THÈME =====
  theme: {
    preset: 'slate',
    colors: {
      bg: '#f8f9fa', // Un blanc légèrement grisé pour un look premium
    }
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
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
      viewDetails: { fr: 'Détails', en: 'Details' },
    },
  },
};