import { 
  Heart, 
  ShieldCheck, 
  Users, 
  Globe, 
  Sparkles, 
  Target, 
  Compass, 
  BookOpen, 
  Smile, 
  HandHeart, 
  Scale, 
  Lock, 
  ShieldAlert, 
  Activity, 
  Award, 
  Palette, 
  Lightbulb, 
  MessageCircle, 
  BrainCircuit, 
  Layers, 
  Network, 
  GraduationCap, 
  Baby, 
  UserCheck, 
  User, 
  Home, 
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  Share2
} from 'lucide-react';
import React from 'react';

// 1. Mission Statement Data
export interface HighlightPhrase {
  term: string;
  desc: string;
  supportingLabel: string;
}

export const MISSION_STATEMENT = {
  title: "Our Mission",
  badge: "✦ Purpose & Commitment",
  lead: "Promoting Mental Health, Psychosocial Well-being, and Inclusive Dignity",
  paragraph1: "Our mission is to promote mental health, psychosocial well-being, resilience, and social inclusion among individuals, families, and communities, especially those experiencing distress, marginalization, and crisis.",
  paragraph2: "We strive to create supportive and inclusive communities where every individual is treated with dignity, has access to appropriate psychosocial support, and feels empowered to overcome life's challenges.",
  highlightPhrases: [
    {
      term: "Mental Health",
      desc: "Promoting emotional equilibrium, psychological literacy, and holistic healthcare for all ages.",
      supportingLabel: "Holistic Emotional Care"
    },
    {
      term: "Psychosocial Well-being",
      desc: "Nurturing the essential harmony between personal psychological health and interpersonal social environments.",
      supportingLabel: "Body-Mind Harmony"
    },
    {
      term: "Resilience",
      desc: "Fostering adaptive coping mechanisms, emotional strength, and endurance during times of crisis and distress.",
      supportingLabel: "Adaptive Coping Strengths"
    },
    {
      term: "Social Inclusion",
      desc: "Ensuring vulnerable, marginalized, and distressed individuals feel welcomed, supported, and valued.",
      supportingLabel: "Equitable Support For All"
    },
    {
      term: "Dignity and Empowerment",
      desc: "Upholding human rights, respecting lived experiences, and equipping people to navigate challenges with autonomy.",
      supportingLabel: "Autonomy & Respect"
    }
  ]
};

// 2. Our Aims Data
export interface AimItem {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  supportingLabel: string;
}

export const OUR_AIMS: AimItem[] = [
  {
    id: "awareness-wellbeing",
    title: "Awareness & Emotional Well-being",
    desc: "Promote mental health awareness and emotional well-being across all age groups in our communities.",
    iconName: "BrainCircuit",
    supportingLabel: "Mental Health Literacy"
  },
  {
    id: "reduce-stigma",
    title: "Stigma & Misconception Reduction",
    desc: "Reduce stigma, discrimination, isolation, and harmful beliefs, taboos, and misconceptions related to mental distress and mental health treatment.",
    iconName: "ShieldCheck",
    supportingLabel: "De-Stigmatization & Inclusion"
  },
  {
    id: "coping-resilience",
    title: "Coping Skills & Social Networks",
    desc: "Strengthen individual coping skills, resilience, and supportive social networks to endure life transitions.",
    iconName: "Sparkles",
    supportingLabel: "Resilience & Social Support"
  },
  {
    id: "timely-support",
    title: "Respectful & Culturally Sensitive Care",
    desc: "Ensure timely, respectful, and culturally sensitive psychosocial support tailored to individual and family contexts.",
    iconName: "Heart",
    supportingLabel: "Culturally Informed Support"
  },
  {
    id: "community-participation",
    title: "Community Participation",
    desc: "Enable community participation in identifying psychosocial needs and actively designing sustainable solutions.",
    iconName: "Users",
    supportingLabel: "Participatory Solutions"
  },
  {
    id: "service-access",
    title: "Access via Counselling & Referrals",
    desc: "Improve access to appropriate services through professional counselling, ethical referrals, and trusted partnerships.",
    iconName: "Network",
    supportingLabel: "Coordinated Care Pathways"
  },
  {
    id: "rights-advocacy",
    title: "Rights-Based & Community Care",
    desc: "Advocate for rights-based, inclusive, and community-based mental health care that treats every individual with equity.",
    iconName: "Scale",
    supportingLabel: "Rights-Affirming Advocacy"
  }
];

// 3. What We Do Data
export interface WhatWeDoService {
  id: string;
  title: string;
  desc: string;
  iconName: string;
  tag: string;
}

export const WHAT_WE_DO_INFO = {
  title: "What We Do",
  badge: "✦ Comprehensive Psychosocial Services",
  description: "We provide psychosocial support through counselling, awareness programmes, peer groups, community outreach, training, and referral services. Our work helps people cope with distress, rebuild social connections, and access the care they need with dignity.",
  services: [
    {
      id: "counselling-support",
      title: "Counselling and Emotional Support",
      desc: "Confidential, one-on-one and family sessions to decompress stress, process emotional pain, and regain clarity in a safe, judgment-free environment.",
      iconName: "HeartHandshake",
      tag: "Direct Support"
    },
    {
      id: "awareness-programmes",
      title: "Mental Health Awareness Programmes",
      desc: "Interactive educational campaigns across schools, colleges, workplaces, and neighborhoods to demystify mental wellness and reduce stigma.",
      iconName: "Sparkles",
      tag: "Community Education"
    },
    {
      id: "peer-groups",
      title: "Peer Support Groups",
      desc: "Facilitated spaces where individuals with shared lived experiences connect, share coping strategies, and combat isolation through mutual empathy.",
      iconName: "Users",
      tag: "Group Connection"
    },
    {
      id: "community-outreach",
      title: "Community Outreach",
      desc: "Grassroots field initiatives that bring psychosocial first aid and supportive mental health literacy directly to underserved and marginalized communities.",
      iconName: "Globe",
      tag: "Grassroots Access"
    },
    {
      id: "training-capacity",
      title: "Training and Capacity Building",
      desc: "Equipping teachers, community volunteers, youth leaders, and caregivers with foundational psychological first aid and supportive listening skills.",
      iconName: "GraduationCap",
      tag: "Skill Building"
    },
    {
      id: "referral-services",
      title: "Psychosocial Support & Referral Services",
      desc: "Helping individuals and families navigate specialized medical, psychiatric, developmental, or social protection services with clarity and dignity.",
      iconName: "Network",
      tag: "Care Navigation"
    },
    {
      id: "psychoeducation",
      title: "Psychoeducation",
      desc: "Structured, accessible guidance helping people understand symptoms, body-mind connections, and proactive self-care practices.",
      iconName: "BookOpen",
      tag: "Knowledge & Literacy"
    },
    {
      id: "life-skills",
      title: "Life Skills Development",
      desc: "Workshops built on the WHO framework to cultivate critical thinking, emotional regulation, interpersonal communication, and problem-solving.",
      iconName: "BrainCircuit",
      tag: "Personal Growth"
    },
    {
      id: "art-activities",
      title: "Art-Based Activities for Psychosocial Well-being",
      desc: "Creative, non-verbal therapeutic modalities—visual art, storytelling, and expressive activities—fostering healing, emotional release, and social connection.",
      iconName: "Palette",
      tag: "Creative Healing"
    }
  ]
};

// 4. Who We Serve Data
export interface BeneficiaryGroup {
  id: string;
  title: string;
  desc: string;
  iconName: string;
}

export const WHO_WE_SERVE_INFO = {
  title: "Who We Serve",
  badge: "✦ Diverse & Inclusive Outreach",
  description: "We work with individuals, families, and communities from diverse backgrounds, providing inclusive and compassionate psychosocial support.",
  highlightStatement: "We respect local culture and lived experiences, maintain confidentiality, prioritize safety, and work in partnership with families, communities, and professional services.",
  groups: [
    {
      id: "children",
      title: "Children",
      desc: "Gentle guidance for emotional difficulties, developmental transitions, behavioral challenges, and early school adjustment.",
      iconName: "Baby"
    },
    {
      id: "adolescents",
      title: "Adolescents",
      desc: "Navigating academic stress, identity questions, peer pressure, digital dependencies, and emotional turbulence with empathy.",
      iconName: "Smile"
    },
    {
      id: "adults",
      title: "Adults",
      desc: "Support for workplace burnout, chronic stress, relationship strain, anxiety, and balancing personal life responsibilities.",
      iconName: "User"
    },
    {
      id: "families-caregivers",
      title: "Families and Caregivers",
      desc: "Supportive spaces for caregivers of individuals with illness or special needs to decompress and strengthen family harmony.",
      iconName: "Home"
    },
    {
      id: "students-teachers",
      title: "Students and Teachers",
      desc: "Fostering mentally healthy educational environments through exam-anxiety workshops and educator stress-management sessions.",
      iconName: "GraduationCap"
    },
    {
      id: "community-members",
      title: "Community Members",
      desc: "Promoting grassroots solidarity, community dialogues, and collective psychosocial resilience in local neighborhoods.",
      iconName: "Users"
    },
    {
      id: "mental-health-difficulties",
      title: "People Experiencing Mental Health Difficulties",
      desc: "Compassionate, non-stigmatizing counselling, emotional first aid, and structured navigation to specialized psychiatric care.",
      iconName: "BrainCircuit"
    },
    {
      id: "vulnerable-marginalized",
      title: "Individuals in Distress & Crisis",
      desc: "Dedicated support for individuals affected by violence, displacement, loss, poverty, disability, or social exclusion.",
      iconName: "ShieldAlert"
    }
  ]
};

// 5. Our Objectives Data
export interface ObjectiveSection {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  points: string[];
}

export const OUR_OBJECTIVES: ObjectiveSection[] = [
  {
    id: "individual-wellbeing",
    title: "A. Individual Well-being",
    subtitle: "Nurturing Personal Resilience and Emotional Health",
    iconName: "Heart",
    points: [
      "Provide confidential emotional support, counselling, and psychological first aid to people experiencing psychosocial distress.",
      "Help individuals develop skills to manage stress, regulate emotions, and build resilience.",
      "Identify individuals at risk and connect them with specialized mental health, medical, protection, or crisis services."
    ]
  },
  {
    id: "family-community",
    title: "B. Family and Community Support",
    subtitle: "Strengthening Shared Care, Inclusion, and Solidarity",
    iconName: "Users",
    points: [
      "Create safe spaces for families and caregivers to share experiences and receive guidance.",
      "Train community members, teachers, youth leaders, and volunteers in basic psychosocial support and referral skills.",
      "Establish peer-support and self-help groups to reduce loneliness and encourage mutual care.",
      "Promote inclusive participation of women, children, older persons, persons with special needs, and other marginalized groups."
    ]
  },
  {
    id: "awareness-prevention",
    title: "C. Awareness and Prevention",
    subtitle: "Proactive Education and Stigma Reduction",
    iconName: "Sparkles",
    points: [
      "Conduct sensitization programmes and awareness campaigns covering: Stress management, Grief and loss, Anxiety and depression, Suicide prevention, Substance use, Digital dependence and addiction, Dementia and psychosocial issues related to old age, Domestic violence, and Mental health help-seeking.",
      "Use schools, colleges, workplaces, health centres, and community spaces for psychoeducation.",
      "Challenge stigma through community dialogue, media, art, storytelling, and public events.",
      "Promote early identification of psychological distress before it develops into more severe problems."
    ]
  },
  {
    id: "advocacy-partnerships",
    title: "D. Advocacy and Partnerships",
    subtitle: "Systemic Integration and Rights-Based Collaboration",
    iconName: "Scale",
    points: [
      "Build networks with mental health professionals, hospitals, NGOs, schools, and local government bodies.",
      "Advocate for accessible, affordable, inclusive, and rights-based mental health services.",
      "Document community needs and programme outcomes to inform policy and practice.",
      "Partner with government agencies, academic institutions, and civil-society initiatives."
    ]
  }
];

// 6. Special Programmes and Activities Data
export interface SpecialProgramme {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export const SPECIAL_PROGRAMMES: SpecialProgramme[] = [
  {
    id: "life-skills-training",
    title: "Life Skills Training",
    category: "WHO Framework Education",
    description: "Develop life skills according to the World Health Organization's life skills education framework, helping individuals improve decision-making, communication, interpersonal relationships, emotional regulation, and problem-solving.",
    iconName: "BrainCircuit",
    highlights: [
      "Decision-making and critical thinking",
      "Interpersonal communication & relationship building",
      "Emotional self-regulation and stress management",
      "Constructive conflict resolution and problem-solving"
    ]
  },
  {
    id: "art-based-activities",
    title: "Art-Based Psychosocial Activities",
    category: "Creative Self-Expression",
    description: "Use creative and art-based activities to encourage self-expression, emotional well-being, social interaction, and community participation.",
    iconName: "Palette",
    highlights: [
      "Visual arts, therapeutic drawing, and tactile crafts",
      "Guided narrative storytelling and emotional journaling",
      "Collaborative community murals and expressive projects",
      "Relaxing non-verbal emotional decompression spaces"
    ]
  },
  {
    id: "issue-specific-psychoeducation",
    title: "Issue-Specific Psychoeducation",
    category: "Focused Guidance",
    description: "Conduct focused educational programmes to help individuals and communities understand specific mental health and psychosocial issues.",
    iconName: "BookOpen",
    highlights: [
      "Understanding anxiety, depression, and somatic stress",
      "Navigating grief, trauma, and major life transitions",
      "Healthy digital boundaries and screen addiction awareness",
      "Dementia care navigation and senior emotional wellness"
    ]
  },
  {
    id: "community-awareness-sensitization",
    title: "Community Awareness and Sensitization",
    category: "Stigma Reduction",
    description: "Organize awareness campaigns, interactive sessions, workshops, and community dialogues to promote mental health literacy and reduce stigma.",
    iconName: "Globe",
    highlights: [
      "Public sensitization sessions in neighborhood centres",
      "School and college mental health literacy forums",
      "Workplace mental health dialogues and stress audits",
      "Facilitated question-and-answer panels with experts"
    ]
  }
];

// 7. Our Values and Approach Data
export interface CoreValue {
  id: string;
  name: string;
  shortDesc: string;
  iconName: string;
}

export const CORE_VALUES: CoreValue[] = [
  {
    id: "dignity-respect",
    name: "Dignity and Respect",
    shortDesc: "Honoring every individual's worth, personal autonomy, and human dignity without condescension or judgment.",
    iconName: "Heart"
  },
  {
    id: "confidentiality",
    name: "Confidentiality",
    shortDesc: "Upholding absolute ethical privacy and discretion across all counselling, consultations, and records.",
    iconName: "Lock"
  },
  {
    id: "inclusivity-non-discrimination",
    name: "Inclusivity & Non-Discrimination",
    shortDesc: "Welcoming all people regardless of socioeconomic status, gender, age, religion, background, or ability.",
    iconName: "Users"
  },
  {
    id: "cultural-sensitivity",
    name: "Cultural Sensitivity",
    shortDesc: "Recognizing and respecting diverse traditions, family dynamics, local idioms of distress, and lived experiences.",
    iconName: "Globe"
  },
  {
    id: "community-participation",
    name: "Community Participation",
    shortDesc: "Empowering communities to actively participate in defining their needs and co-creating lasting solutions.",
    iconName: "HandHeart"
  },
  {
    id: "safety-protection",
    name: "Safety and Protection",
    shortDesc: "Prioritizing physical and emotional safety, do-no-harm principles, and proactive safeguarding for vulnerable groups.",
    iconName: "ShieldCheck"
  },
  {
    id: "empathy-compassion",
    name: "Empathy and Compassion",
    shortDesc: "Offering patient, deep listening, genuine warmth, and humane care throughout moments of vulnerability.",
    iconName: "Smile"
  },
  {
    id: "collaboration-partnership",
    name: "Collaboration and Partnership",
    shortDesc: "Working collaboratively alongside families, schools, medical specialists, NGOs, and civil-society initiatives.",
    iconName: "Network"
  },
  {
    id: "rights-based-care",
    name: "Rights-Based Mental Health Care",
    shortDesc: "Advocating for accessible, equitable, and rights-affirming mental health as a fundamental human entitlement.",
    iconName: "Scale"
  }
];
