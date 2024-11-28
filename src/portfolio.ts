interface SocialMediaLinks {
  github: string;
  linkedin: string;
  gmail: string;
  phone: string;
}

interface Greeting {
  title: string;
  subTitle: string;
  resumeLink: string;
}

interface Experience {
  role: string;
  company: string;
  date: string;
  description: string[];
  technologies?: string[];
}

interface Education {
  school: string;
  degree: string;
  minor?: string;
  date: string;
  location: string;
  gpa: string;
  coursework: string[];
}

interface EducationSection {
  schools: Education[];
}

interface Project {
  title: string;
  organization: string;
  date: string;
  description: string[];
}

const greeting: Greeting = {
  title: "Hi, I'm Rohan Panda",
  subTitle: "Machine Learning Engineer specializing in GenAI and ML Systems",
  resumeLink: "https://drive.google.com/file/d/1H4f18I1D_asSnkz4WoozdX9u1lWc15LT/view?usp=sharing"
};

const socialMediaLinks: SocialMediaLinks = {
  github: "https://github.com/pandaboi",
  linkedin: "https://www.linkedin.com/in/rohanpanda99/",
  gmail: "rohanpanda.99@gmail.com",
  phone: "913-388-8642"
};

const experienceSection: {
  title: string;
  experiences: Array<{
    role: string;
    company: string;
    date: string;
    description: string[];
  }>;
} = {
  title: "Experience",
  experiences: [
    {
      role: "Machine Learning Engineer",
      company: "Inworld.ai",
      date: "Feb 2023 - Present",
      description: [
        "Designed and implemented GenAI algorithms, improving model performance by 10% through fine-tuning Mixtral and Llama models",
        "Developed and optimized 5+ evaluators for customer pain points, leading A/B testing initiatives",
        "Built a data management pipeline from scratch, accelerating model prototyping by 5x",
        "Enhanced multilingual performance by 20% using OpenAI and Llama comparisons",
        "Reduced inference time by 30% with custom Triton and Docker-based solutions"
      ]
    },
    {
      role: "Machine Learning Engineering Intern",
      company: "Moveworks",
      date: "May 2022 - August 2022",
      description: [
        "Established the first conversational query rewriter system for multi-turn user-bot conversations",
        "Experimented with SpanBERT-based coreference models, achieving 40% F1 score increase",
        "Developed conversational topic switching models achieving ~90% F1 score"
      ]
    }
  ]
};

const educationSection: EducationSection = {
  schools: [
    {
      school: "Carnegie Mellon University",
      degree: "Master of Science in Computer Engineering | AI/ML Systems",
      date: "December 2022",
      location: "Pittsburgh, PA",
      gpa: "4.0/4.0",
      coursework: [
        "Deep Learning",
        "Advanced Natural Language Processing",
        "Visual Learning and Recognition",
        "Machine Learning for Signal Processing",
        "Speech Recognition and Understanding"
      ]
    },
    {
      school: "Birla Institute of Technology and Science, Pilani",
      degree: "Bachelor of Engineering in Electrical and Electronics Engineering",
      minor: "Minor in Data Science",
      date: "May 2021",
      location: "Hyderabad, India",
      gpa: "9.4/10.0",
      coursework: [
        "Machine Learning",
        "Neural Networks and Fuzzy Logic",
        "Data Science",
        "Data Mining",
        "Applied Statistical Methods"
      ]
    }
  ]
};

const skillsSection = {
  categories: {
    Programming: [
      "Python",
      "C++",
      "SQL",
      "Git"
    ],
    MLOps: [
      "Docker",
      "Kubernetes",
      "MLFlow",
      "Streamlit",
      "Google Cloud",
      "JupyterLab",
      "Grafana",
      "Jira"
        ],
    AITools: [
      "PyTorch",
      "TensorFlow",
      "numpy",
      "pandas",
      "scikit-learn",
      "OpenAI",
      "Hugging Face"
    ],
    AITechniques: [
      "GenAI",
      "LLMs",
      "Natural Language Processing",
      "Fine tuning",
      "Prompt Tuning",
      "Dataset creations",
      "Distillation",
      "Quantization"
    ]
  }
};

const projectsSection: {
  projects: Array<{
    title: string;
    organization: string;
    date: string;
    description: string[];
  }>;
} = {
  projects: [
    {
      title: "Learnable Frontends for Robust Automatic Speech Recognition",
      organization: "Carnegie Mellon University",
      date: "August 2021 - December 2021",
      description: [
        "Developed a noise-resistant ASR system, reducing WER by ~3% on CHIME4 and WSJ datasets",
        "Published in SIGGRAPH"
      ]
    },
    {
      title: "fMRI-based Classifications Using Multi-Source Domain Adaptations",
      organization: "University of Alberta, Canada (Remote)",
      date: "May 2020 - March 2021",
      description: [
        "Created an MSDA pipeline achieving ~88% accuracy in classifying illness, age, and gender",
        "First author of journal paper on Multi-source Domain Adaptation Techniques"
      ]
    },
    {
      title: "Cardiac Arrhythmias Detection using ECG Signals",
      organization: "BITS Pilani",
      date: "January 2019 - May 2019",
      description: [
        "Led team to improve detection accuracy of ventricular arrhythmia from 93% to ~98%",
        "Published in Computers in Biology and Medicine"
      ]
    }
  ]
};

export {
    educationSection, experienceSection, greeting, projectsSection, skillsSection, socialMediaLinks
};
export type { Education, EducationSection };

