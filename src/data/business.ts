export interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  image: string;
  heroHeadline: string;
  introduction: string;
  whatItInvolves: string[];
  whoItIsFor: string[];
  whatToExpect: string[];
  keyBenefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface SupportGroup {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  link: string;
  keyConcerns: string[];
  disclaimer?: string;
}

export const BUSINESS_INFO = {
  name: "Sunny Welbeing Center",
  shortName: "SWC",
  category: "Body and Mind Health Support Center",
  tagline: "Scientific health support with a humane touch.",
  primaryMessage: "Scientific health support with a humane touch.",
  heroSubtitle: "Scientific health support with a humane touch.",
  heroIntro: "Body and mind are closely connected. Sunny Welbeing Center provides a compassionate, respectful and scientifically informed approach to physical and mental wellbeing. We listen to your concerns and help you understand possible next steps.",
  aboutParagraph: "Every day, people face questions about their body, mind and health. They may experience doubt, fear and uncertainty, especially when they or their loved ones are unwell. Busy medical specialists may not always have enough time to answer every question, leaving patients and families feeling helpless.\n\nSunny Welbeing Center provides a calm, supportive space to discuss concerns about physical and mental wellbeing. Our approach focuses on listening carefully, offering compassionate guidance and helping people prepare informed questions for qualified healthcare professionals.",
  address: {
    street: "74B Acharya Jagadish Bose Road",
    city: "Kolkata",
    state: "West Bengal",
    postalCode: "700016",
    country: "India",
    full: "74B Acharya Jagadish Bose Road, Kolkata, West Bengal 700016, India",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=74B+Acharya+Jagadish+Bose+Road+Kolkata+West+Bengal+700016",
    mapsEmbedUrl: "https://maps.google.com/maps?q=74B+Acharya+Jagadish+Bose+Road+Kolkata+West+Bengal+700016&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  phone: "98746 13267",
  phoneFormatted: "+91 98746 13267",
  phoneRaw: "+919874613267",
  whatsappNumber: "98746 13267",
  whatsappUrl: "https://wa.me/919874613267",
  whatsappCustomUrl: (message: string) => `https://wa.me/919874613267?text=${encodeURIComponent(message)}`,
  facebookUrl: "https://www.facebook.com/p/Sunny-Wellbeing-Centre-61583318943519/",
  referenceSite: "https://mind-inside.com/",
  logoPath: "/swc-logo-transparent.png",
  logoSolidPath: "/swc-logo.png",
  emergencyNote: "Sunny Welbeing Center does not provide emergency medical services, independent medical diagnosis, or prescription of medicines. In case of acute medical emergencies, call 112 / 102 immediately or visit the nearest hospital emergency department.",
  medicalBoundaryNote: "Sunny Welbeing Center does not replace doctors, independently diagnose diseases, or prescribe medicines. All medical diagnosis and treatment decisions belong with qualified healthcare professionals."
};

export const WHO_WE_SUPPORT: SupportGroup[] = [
  {
    id: "children-and-adolescents",
    title: "Children and Adolescents",
    subtitle: "Behavioural & Academic Support",
    desc: "Support for school stress, focus difficulties, emotional challenges, and screen habits.",
    image: "/images/support-child.jpg",
    link: "/services/mental-wellbeing-counselling",
    keyConcerns: [
      "Concentration & study routine support",
      "Managing exam anxiety & screen fatigue"
    ]
  },
  {
    id: "adults-emotional-wellbeing",
    title: "Adults & Emotional Wellbeing",
    subtitle: "Stress & Inner Balance",
    desc: "Guidance for workplace stress, persistent worry, sleep disruption, and emotional balance.",
    image: "/images/support-adult.jpg",
    link: "/services/mental-wellbeing-counselling",
    keyConcerns: [
      "Workplace strain & chronic burnout",
      "Sleep concerns & emotional restlessness"
    ]
  },
  {
    id: "older-adults-families",
    title: "Support for Older Adults & Families",
    subtitle: "Age-Related Health Guidance",
    desc: "Care guidance for age-related mobility shifts, balance concerns, forgetfulness, and family support.",
    image: "/images/support-senior.jpg",
    link: "/services/support-older-adults-families",
    keyConcerns: [
      "Mobility changes & fall prevention",
      "Memory shifts & medical evaluation pathways"
    ]
  },
  {
    id: "health-questions-navigation",
    title: "Health Guidance & Test Results",
    subtitle: "Healthcare Direction",
    desc: "Clear assistance in understanding symptoms, test reports, and preparing doctor questions.",
    image: "/images/support-navigation.jpg",
    link: "/services/health-guidance-test-results",
    keyConcerns: [
      "Making sense of test reports & results",
      "Preparing structured questions for your doctor"
    ]
  }
];

export const SERVICES: ServiceDetail[] = [
  {
    slug: "mental-wellbeing-counselling",
    title: "Mental Wellbeing and Counselling",
    category: "Emotional & Psychological Support",
    shortDesc: "Support for stress, work pressure, emotional difficulties, sleep concerns and problematic mobile phone use.",
    image: "/images/service-personal.jpg",
    heroHeadline: "Compassionate, Confidential Support for Stress, Sleep, and Everyday Balance",
    introduction: "Mental Wellbeing and Counselling at Sunny Welbeing Center provides a calm, confidential, and respectful space to explore emotional challenges. Prolonged workplace pressure, anxiety, sleep disruptions, and difficulty controlling digital screen habits can strain everyday life and physical health. Our approach focuses on patient, attentive listening, helping you understand the connections between thoughts, bodily tension, and behaviour, and discover practical ways to regain emotional calm.",
    whatItInvolves: [
      "Confidential conversations in an unhurried, non-judgmental environment",
      "Exploring work-related stress, emotional strain, and personal challenges",
      "Guidance for managing sleep difficulties, mental restlessness, and digital screen habits",
      "Supportive strategies to build emotional resilience and sustainable daily routines"
    ],
    whoItIsFor: [
      "Individuals experiencing workplace burnout, high stress, or persistent worry",
      "People dealing with disturbed sleep, fatigue, or low mood",
      "Students and adults finding mobile phone or screen use difficult to manage",
      "Anyone seeking a private, reflective space to discuss emotional wellbeing"
    ],
    whatToExpect: [
      "An unhurried conversation where you set the pace without pressure",
      "Strict confidentiality aligned with ethical counselling standards",
      "Clear guidance that counselling complements—and does not replace—medical evaluation when physical symptoms are present",
      "Convenient appointment scheduling through our WhatsApp enquiry channel"
    ],
    keyBenefits: [
      "Greater clarity and emotional decompression",
      "Healthier boundaries with work, technology, and daily stressors",
      "Better understanding of the connection between mental strain and physical wellbeing",
      "Practical coping approaches tailored to your personal situation"
    ],
    faqs: [
      {
        question: "Does counselling replace medical treatment for emotional or sleep disorders?",
        answer: "No. Counselling offers emotional and psychological guidance. If symptoms indicate clinical depression, severe anxiety disorders, or medical causes of sleep disturbance, we actively help you identify and prepare questions for qualified medical specialists or psychiatrists."
      },
      {
        question: "Can counselling help with excessive mobile phone use?",
        answer: "Yes. We help explore underlying triggers such as boredom, stress avoidance, or bedtime habits, providing practical behavioural strategies to regain healthy digital balance."
      }
    ]
  },
  {
    slug: "health-guidance-test-results",
    title: "Health Guidance and Understanding Test Results",
    category: "Symptoms & Test Navigation",
    shortDesc: "Help organising questions about symptoms, test results, medical advice and possible next steps.",
    image: "/images/service-medical-guidance.jpg",
    heroHeadline: "Clarity on Health Reports, Symptoms, and Doctor Consultations",
    introduction: "Receiving medical test results or coping with unexplained physical symptoms often leaves patients and families with doubts, unanswered questions, and anxiety. Sunny Welbeing Center provides an objective, supportive environment where you can review your concerns at an unhurried pace. We help you organise your health timeline, translate complex medical terminology into clear language, and prepare focused questions for your treating physicians.",
    whatItInvolves: [
      "Organising your timeline of physical symptoms, reports, and previous consultations",
      "Explaining general medical terms in clear, accessible language",
      "Preparing structured question lists to make doctor visits more productive",
      "Clarifying possible next steps and appropriate clinical specialties to consult"
    ],
    whoItIsFor: [
      "Individuals feeling confused or anxious after receiving unexpected lab test results",
      "Patients whose symptoms persist despite initial medical visits, needing clarity on what to ask next",
      "Families seeking a calm sounding board before scheduling specialized medical appointments",
      "Anyone who wants to be an informed, prepared participant in their healthcare"
    ],
    whatToExpect: [
      "Attentive listening to your full health story without clinical rushing",
      "Clear, objective explanations of general medical concepts",
      "Explicit clarity that SWC does not diagnose illnesses, order lab tests, or prescribe medicines",
      "Empowerment to communicate confidently with your medical doctors"
    ],
    keyBenefits: [
      "Reduced anxiety surrounding unfamiliar medical terms or unexpected findings",
      "More productive, focused consultations with treating doctors",
      "Elimination of confusion and aimless doctor-shopping",
      "Clear, structured roadmap of questions for your healthcare team"
    ],
    faqs: [
      {
        question: "Does Sunny Welbeing Center interpret or diagnose test results independently?",
        answer: "No. SWC does not provide medical diagnoses or replace physician interpretation. We help you understand what the terms mean generally so you can discuss specific findings effectively with your doctor."
      }
    ]
  },
  {
    slug: "support-older-adults-families",
    title: "Support for Older Adults and Families",
    category: "Age-Related Health Guidance",
    shortDesc: "Guidance for families concerned about falls, tremors, memory difficulties or changes in everyday functioning.",
    image: "/images/service-senior-care.jpg",
    heroHeadline: "Thoughtful Guidance for Age-Related Changes, Falls, and Memory Shifts",
    introduction: "Noticing physical or cognitive changes in an aging parent or family member—such as frequent stumbling, unsteadiness, hand tremors, slow movements, or increasing forgetfulness—can be deeply worrying. Families often struggle to know whether these changes represent normal aging or early signs requiring medical investigation. SWC offers compassionate guidance to help families recognise important warning signs, structure home safety, and seek timely geriatric or neurological medical care.",
    whatItInvolves: [
      "Reviewing family observations regarding balance, mobility, tremors, and memory changes",
      "Identifying red-flag indicators that require formal medical and neurological evaluation",
      "Guidance on home fall prevention, daily routines, and senior dignity",
      "Emotional support and reassurance for family caregivers"
    ],
    whoItIsFor: [
      "Families concerned about repeated falls, unsteadiness, or balance difficulties in senior members",
      "Loved ones noticing tremors, physical stiffness, or slowing down in daily activities",
      "Caregivers managing memory concerns, forgetfulness, or behavioural changes in elderly relatives",
      "Older adults seeking an unhurried, dignified space to discuss their health questions"
    ],
    whatToExpect: [
      "A compassionate, patient discussion honouring the dignity of senior family members",
      "Clear explanation of why timely medical assessment by doctors or neurologists is important",
      "Practical recommendations for caregiver support and home environment safety",
      "Support in preparing clear questions for medical consultations"
    ],
    keyBenefits: [
      "Timely identification of concerns requiring medical assessment",
      "Reduced anxiety and confusion for family caregivers",
      "Actionable awareness regarding fall prevention and everyday safety",
      "A calm, coordinated approach to eldercare in Kolkata"
    ],
    faqs: [
      {
        question: "When should family members seek emergency medical care instead of health guidance?",
        answer: "Sudden onset weakness in the face or limbs, slurred speech, sudden confusion, high fever, or severe trauma from a fall require immediate hospital emergency room evaluation."
      }
    ]
  },
  {
    slug: "ongoing-health-concerns",
    title: "Ongoing Health Concerns",
    category: "Chronic Health & Lifestyle Questions",
    shortDesc: "Help preparing questions about blood pressure, blood sugar, medicines, diet and other long-term health concerns.",
    image: "/images/service-chronic-care.jpg",
    heroHeadline: "Preparing Questions for Blood Pressure, Blood Sugar, and Long-Term Health",
    introduction: "Living with ongoing health conditions such as fluctuating blood pressure, elevated blood sugar, complex medicine schedules, or recommended dietary restrictions can feel overwhelming. Many patients leave doctor appointments unsure of how to follow long-term advice or what questions to ask when targets are not met. Sunny Welbeing Center provides supportive health guidance—helping you organise your questions about medications, lifestyle adjustments, and self-monitoring routines for your treating doctor.",
    whatItInvolves: [
      "Organising daily tracking questions regarding blood pressure and blood sugar readings",
      "Preparing questions about medicine timing, side-effect doubts, and doctor instructions",
      "Discussing practical lifestyle questions regarding balanced nutrition, sleep, and physical activity",
      "Helping patients understand the importance of ongoing partnership with their physician"
    ],
    whoItIsFor: [
      "Individuals whose blood pressure or blood sugar levels are difficult to control",
      "Patients taking multiple long-term medicines who have questions to clarify with their doctor",
      "People wanting to prepare informed questions about diet, physical activity, and daily habits",
      "Caregivers helping family members manage chronic health routines"
    ],
    whatToExpect: [
      "A calm space to review what your treating doctor has advised",
      "Help structuring your doubts into an orderly list before your next medical visit",
      "Strict adherence to the principle that medicine changes must only be made by prescribing doctors",
      "Reassurance and encouragement to maintain open communication with healthcare professionals"
    ],
    keyBenefits: [
      "Better preparedness and confidence during physician checkups",
      "Clearer understanding of why doctors recommend specific lifestyle and monitoring habits",
      "Reduced uncertainty regarding long-term health management",
      "Active, informed involvement in your ongoing wellbeing"
    ],
    faqs: [
      {
        question: "Does Sunny Welbeing Center adjust blood pressure or diabetes medicines?",
        answer: "No. SWC never prescribes, adjusts, or discontinues medicines. Medication decisions belong strictly with your treating medical doctor. We assist you in preparing the right questions to discuss with your doctor."
      }
    ]
  },
  {
    slug: "understanding-medical-options",
    title: "Understanding Medical Options",
    category: "Treatment Perspectives & Decisions",
    shortDesc: "Help preparing questions when medical opinions or recommended treatment options differ.",
    image: "/images/service-medical-options.jpg",
    heroHeadline: "Calm Support When Medical Opinions Differ or Treatment Choices Arise",
    introduction: "When faced with significant health decisions—such as differing opinions between doctors, choices between medical procedures and conservative management, or unexpected treatment recommendations—patients and families often experience deep uncertainty. Sunny Welbeing Center provides an objective, supportive environment to unpack options, understand the terminology involved, and prepare thoughtful, informed questions for qualified healthcare professionals.",
    whatItInvolves: [
      "Reviewing differing recommendations calmly and objectively",
      "Clarifying general medical terminology used by different specialists",
      "Formulating structured questions regarding risks, benefits, and recovery timelines",
      "Assisting families in thinking through questions before committing to surgical or complex interventions"
    ],
    whoItIsFor: [
      "Patients and families navigating differing advice from medical specialists",
      "Individuals facing choices about surgical procedures, interventions, or alternative medical pathways",
      "Anyone feeling rushed or pressured into health decisions without adequate clarity",
      "Families seeking an unbiased sounding board to formulate informed questions"
    ],
    whatToExpect: [
      "A respectful, unhurried dialogue that values your personal concerns and values",
      "Clear explanation that SWC does not decide treatments or offer formal clinical second opinions",
      "Objective help in framing questions for accredited medical specialists",
      "Encouragement to consult qualified doctors to make final medical decisions"
    ],
    keyBenefits: [
      "Clarity during emotionally demanding health decisions",
      "Informed, thoughtful question lists for doctor discussions",
      "Peace of mind knowing you have explored all questions thoroughly",
      "Empowered decision-making in partnership with qualified clinicians"
    ],
    faqs: [
      {
        question: "Does Sunny Welbeing Center provide formal second medical opinions?",
        answer: "No. Sunny Welbeing Center is not a clinical medical clinic and does not provide formal medical second opinions. We provide guidance to help you understand differing options generally and prepare targeted questions for specialized medical clinicians."
      }
    ]
  }
];

export const FAQS = [
  {
    category: "General Health Concerns",
    question: "I feel sleepy all day and my mind feels heavy. Whom should I consult?",
    answer: "Feeling sleepy all day accompanied by a heavy sensation in the mind can arise from various interconnected causes—including poor sleep quality, chronic stress, emotional exhaustion, or physical conditions such as vitamin deficiencies, thyroid imbalances, or anaemia. At Sunny Welbeing Center, we listen to your symptom timeline and daily routine, help you distinguish between lifestyle or emotional factors and medical indicators, and help you prepare clear questions for a general physician or specialist consultation."
  },
  {
    category: "Persistent Symptoms",
    question: "My headache continues despite medical consultations. What should I ask next?",
    answer: "Persistent headaches can stem from multiple factors—including tension, screen fatigue, chronic neck strain, sinus issues, migraines, or underlying neurological factors. If medical checkups have not brought resolution, we help you record a headache diary (noting triggers, timing, and characteristics) and formulate specific questions for your doctor regarding further diagnostic tests, specialist referrals (such as a neurologist), or complementary stress-management approaches."
  },
  {
    category: "Work & Stress",
    question: "I feel overwhelmed by work pressure. Where can I seek counselling?",
    answer: "Prolonged work strain, demanding deadlines, and chronic burnout frequently cause mental fatigue, irritability, and physical tension. Sunny Welbeing Center provides a confidential, unhurried counselling space in Kolkata where you can unpack the emotional weight of your work environment, establish healthy psychological boundaries, and develop grounded coping strategies to prevent burnout."
  },
  {
    category: "Digital Habits",
    question: "My mobile phone use feels difficult to control. Can counselling help?",
    answer: "Yes. Problematic mobile phone and screen use is frequently linked to stress avoidance, boredom, social anxiety, or disrupted daily structure. Our counselling approach explores what drives excessive digital engagement, helps you understand the emotional triggers, and provides practical, achievable strategies to rebuild healthy boundaries around technology, sleep, and family time."
  },
  {
    category: "Test Results",
    question: "My blood test shows an unexpected result. What questions should I ask my doctor?",
    answer: "Seeing an out-of-range or unexpected lab result can cause immediate worry. However, isolated numbers must always be interpreted in the context of your overall health, diet, and symptoms by a medical doctor. Sunny Welbeing Center helps you translate confusing lab terms into clear language and structure organised questions for your doctor—such as what the result means for you, whether repeat testing is needed, or what dietary or medical steps are recommended."
  },
  {
    category: "Elderly Family Care",
    question: "An older family member keeps falling and has memory problems. What should we do?",
    answer: "Frequent falls, balance unsteadiness, and noticeable memory lapses in an older adult are important symptoms that require medical assessment by a physician, geriatrician, or neurologist. At Sunny Welbeing Center, we help families document these occurrences, review home fall-prevention measures, and prepare a focused list of observations and questions for the medical team to ensure a comprehensive evaluation."
  },
  {
    category: "Ongoing Health",
    question: "My blood pressure or blood sugar is not well controlled. What should I discuss with my doctor?",
    answer: "When blood pressure or blood sugar readings remain erratic, discussing your daily routine with your treating doctor is essential. We help you prepare questions regarding medication timing, potential side effects, self-monitoring accuracy, dietary factors, and stress management. Please note that all medication adjustments must be made exclusively by your prescribing physician."
  },
  {
    category: "Medical Decisions",
    question: "Doctors have suggested different treatment options. What questions should I ask?",
    answer: "Receiving differing medical recommendations can be confusing and stressful. Sunny Welbeing Center provides an objective, calm environment to help you unpack the medical terms, understand the underlying rationales, and formulate thoughtful questions regarding benefits, risks, and recovery expectations for your next doctor discussion, enabling informed decision-making."
  },
  {
    category: "About Sunny Welbeing Center",
    question: "What is Sunny Welbeing Center?",
    answer: "Sunny Welbeing Center (SWC) is a body-and-mind health support and welbeing center located at 74B Acharya Jagadish Bose Road, Kolkata. We offer a compassionate, respectful, and scientifically informed approach to physical and mental wellbeing, helping people organise their concerns and understand their next steps in partnership with qualified healthcare professionals."
  },
  {
    category: "Appointments & WhatsApp",
    question: "How do I arrange an appointment?",
    answer: "Arranging an appointment is straightforward and direct via WhatsApp. You can message us at 98746 13267 or click the 'Book an Appointment' button on our website. Our care desk will share available consultation times and assist with scheduling."
  }
];

export const ARTICLES = [
  {
    slug: "the-interconnected-body-and-mind",
    title: "Understanding How Body and Mind Influence Each Other",
    date: "October 2026",
    category: "Health & Wellbeing",
    readTime: "5 min read",
    image: "/images/article-body-mind.jpg",
    excerpt: "Why physical symptoms and emotional strain frequently go hand-in-hand, and how taking a holistic perspective brings greater clarity.",
    content: [
      "When we feel overwhelmed, our bodies speak before our words do. Elevated stress levels release hormones that increase heart rate, alter breathing, and tighten muscles. Over time, persistent stress can disrupt restorative sleep, alter digestive rhythms, and cause recurring headaches.",
      "Conversely, living with chronic physical discomfort or navigating uncertain health questions creates emotional fatigue, worry, and social withdrawal.",
      "At Sunny Welbeing Center, we encourage individuals to look at both physical and emotional signals with curiosity rather than fear. Understanding this bi-directional relationship is the first step toward restoring balance."
    ]
  },
  {
    slug: "navigating-health-questions-with-clarity",
    title: "How to Prepare for Your Next Doctor's Appointment",
    date: "September 2026",
    category: "Care Navigation",
    readTime: "4 min read",
    image: "/images/article-doctor-prep.jpg",
    excerpt: "Practical tips on organising your health timeline, preparing focused questions, and communicating effectively with medical specialists.",
    content: [
      "Medical appointments in busy urban centres can feel rushed. Patients often leave feeling they forgot to mention critical symptoms or did not fully grasp the doctor's recommendations.",
      "Writing down your symptoms in chronological order, listing all current medications and supplements, and noting your top two or three priorities before your consultation makes a world of difference.",
      "Health guidance at Sunny Welbeing Center helps individuals organise these questions beforehand, empowering them to become informed partners in their clinical care."
    ]
  },
  {
    slug: "supporting-older-adults-at-home",
    title: "Recognising Early Age-Related Shifts in Elderly Family Members",
    date: "August 2026",
    category: "Family Support",
    readTime: "5 min read",
    image: "/images/article-senior-home.jpg",
    excerpt: "Guidance on identifying balance changes, tremors, and memory concerns that warrant a timely medical consultation.",
    content: [
      "Caring for aging parents requires patient observation. Subtle changes—such as hesitating before taking steps, mild tremors in the hands, or repeating questions within a short period—should be noted thoughtfully.",
      "While some degree of physical slowing is natural, repeated falls, progressive memory difficulties, or noticeable gait stiffness are signs that deserve thorough medical and neurological assessment.",
      "Providing a supportive, calm home environment and arranging professional medical evaluations early helps safeguard safety and dignity for elderly loved ones."
    ]
  }
];
