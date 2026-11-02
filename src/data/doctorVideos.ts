// Doctor Videos Data - Verified from Sunny Wellbeing Centre Google Drive folder
export interface DoctorVideo {
  id: string;
  slug: string;
  doctorName: string;
  specialty: string;
  designation: string;
  hospital: string;
  subtitle: string;
  videoTitle: string;
  description: string;
  duration: string;
  durationSeconds: number;
  thumbnail: string;
  videoSrc: string;
  gdriveId: string;
  gdriveUrl: string;
  badgeText?: string;
}

export const DOCTOR_VIDEOS: DoctorVideo[] = [
  {
    id: "dr-d-p-sinha",
    slug: "dr-d-p-sinha",
    doctorName: "Prof. Dr. D. P. Sinha",
    specialty: "Cardiology & Heart Care",
    designation: "Former Head of Department",
    hospital: "IPGMER & SSKM Hospital, Kolkata",
    subtitle: "Former Head of Department, IPGMER & SSKM Hospital, Kolkata",
    videoTitle: "Clinical Perspectives & Healthcare Guidance with Prof. Dr. D. P. Sinha",
    description: "Consultation insights on clinical cardiology, recognizing early warning signs, and understanding structured cardiology care in Kolkata.",
    duration: "3:58",
    durationSeconds: 239,
    thumbnail: "/images/doctors/dr-d-p-sinha.jpg",
    videoSrc: "/videos/dr-d-p-sinha.mp4",
    gdriveId: "1-PzAoAMWpxEltWTu6TZYsvAzJQkWsx_N",
    gdriveUrl: "https://drive.google.com/file/d/1-PzAoAMWpxEltWTu6TZYsvAzJQkWsx_N/view",
    badgeText: "Doctor Insight"
  },
  {
    id: "dr-manoj-kumar-bhattacharjee",
    slug: "dr-manoj-kumar-bhattacharjee",
    doctorName: "Prof. Dr. Manoj Kumar Bhattacharjee",
    specialty: "Neurosurgery & Spine Care",
    designation: "Former Head of Department",
    hospital: "IPGMER & Bangur Institute of Neurosciences",
    subtitle: "Former Head of Department, IPGMER & Bangur Institute of Neurosciences",
    videoTitle: "Clinical Perspectives & Healthcare Guidance with Prof. Dr. Manoj Kumar Bhattacharjee",
    description: "Specialist insights into neurological health, brain and spine care, and when to consult a neurosurgeon for persistent symptoms.",
    duration: "0:40",
    durationSeconds: 41,
    thumbnail: "/images/doctors/dr-manoj-kumar-bhattacharjee.jpg",
    videoSrc: "/videos/dr-manoj-kumar-bhattacharjee.mp4",
    gdriveId: "1kQK-Hu2u2kkNi44jEWWFz58MB-cxmgJG",
    gdriveUrl: "https://drive.google.com/file/d/1kQK-Hu2u2kkNi44jEWWFz58MB-cxmgJG/view",
    badgeText: "Doctor Insight"
  },
  {
    id: "dr-rupnarayan-bhattacharjee",
    slug: "dr-rupnarayan-bhattacharjee",
    doctorName: "Prof. Dr. Rupnarayan Bhattacharya",
    specialty: "Plastic & Reconstructive Surgery",
    designation: "Head of Department, Plastic Surgery",
    hospital: "RG Kar Medical College & Hospital, Kolkata",
    subtitle: "Head of Department, Plastic Surgery, RG Kar Medical College & Hospital",
    videoTitle: "Clinical Perspectives & Healthcare Guidance with Prof. Dr. Rupnarayan Bhattacharya",
    description: "Expert guidance on reconstructive procedures, cosmetic surgery considerations, and structured postoperative recovery care.",
    duration: "2:11",
    durationSeconds: 131,
    thumbnail: "/images/doctors/dr-rupnarayan-bhattacharjee.jpg",
    videoSrc: "/videos/dr-rupnarayan-bhattacharjee.mp4",
    gdriveId: "1Jm5yKMG3EPGYUKY7Yg0i2cDDCa0DUQbH",
    gdriveUrl: "https://drive.google.com/file/d/1Jm5yKMG3EPGYUKY7Yg0i2cDDCa0DUQbH/view",
    badgeText: "Doctor Insight"
  },
  {
    id: "dr-sujit-choudhury",
    slug: "dr-sujit-choudhury",
    doctorName: "Dr. Sujit Choudhury",
    specialty: "Gastroenterology & Hepatology",
    designation: "Senior Consultant Gastroenterologist",
    hospital: "Manipal Hospitals Broadway, Kolkata",
    subtitle: "Senior Consultant Gastroenterologist, Manipal Hospitals Broadway, Kolkata",
    videoTitle: "Clinical Perspectives & Healthcare Guidance with Dr. Sujit Choudhury",
    description: "Clinical advice on digestive health, liver function, and navigating timely diagnostic investigations with clarity.",
    duration: "3:34",
    durationSeconds: 214,
    thumbnail: "/images/doctors/dr-sujit-choudhury.jpg",
    videoSrc: "/videos/dr-sujit-choudhury.mp4",
    gdriveId: "1i3kAPH0n3az7tSqPlM7oappATA2bAJxO",
    gdriveUrl: "https://drive.google.com/file/d/1i3kAPH0n3az7tSqPlM7oappATA2bAJxO/view",
    badgeText: "Doctor Insight"
  },
  {
    id: "mohit-ranadip-01",
    slug: "mohit-ranadip-01",
    doctorName: "Mr. Mohit Ranadip",
    specialty: "Psychological Counselling & Wellbeing",
    designation: "Senior Psychological & Psychiatric Counsellor",
    hospital: "Mental Health Advisory • Sunny Welbeing Center",
    subtitle: "Senior Psychological Counsellor (25+ Years Experience)",
    videoTitle: "Mental Wellbeing & Psychological Guidance with Mr. Mohit Ranadip",
    description: "Expert counselling perspectives on managing emotional distress, mental stress, family relationship dynamics, and seeking timely psychological guidance in Kolkata.",
    duration: "5:35",
    durationSeconds: 335,
    thumbnail: "/images/doctors/mohit-ranadip-01.jpg",
    videoSrc: "",
    gdriveId: "1CMsC7710if9zTsIWOF75Joet51oURZPN",
    gdriveUrl: "https://drive.google.com/file/d/1CMsC7710if9zTsIWOF75Joet51oURZPN/view",
    badgeText: "Counselling Insight"
  },
  {
    id: "mohit-ranadip-02",
    slug: "mohit-ranadip-02",
    doctorName: "Mr. Mohit Ranadip",
    specialty: "Stress Management & Emotional Health",
    designation: "Senior Psychological & Psychiatric Counsellor",
    hospital: "25+ Years Experience • Jadavpur University Alum",
    subtitle: "Senior Psychological Counsellor (25+ Years Experience)",
    videoTitle: "Clinical Consultation & Stress Management with Mr. Mohit Ranadip",
    description: "Specialist guidance on navigating acute life stress, work pressures, emotional strain, and how structured counselling sessions foster long-term mental resilience.",
    duration: "4:50",
    durationSeconds: 290,
    thumbnail: "/images/doctors/mohit-ranadip-02.jpg",
    videoSrc: "",
    gdriveId: "1sAwKEepVa6B1CE51TXHLpftMrgnXPUbu",
    gdriveUrl: "https://drive.google.com/file/d/1sAwKEepVa6B1CE51TXHLpftMrgnXPUbu/view",
    badgeText: "Counselling Insight"
  }
];
