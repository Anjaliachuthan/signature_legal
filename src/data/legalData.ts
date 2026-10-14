export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export interface Advocate {
  id: string;
  name: string;
  role: string;
  experience?: string;
  specialties: string[];
  bio?: string;
  email: string;
  image: string;
  isLead?: boolean;
  socials?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    tiktok?: string;
  };
}

export interface Associate {
  name: string;
  role: string;
  image: string;
}

export const ALL_PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'civil-litigation',
    title: 'Civil Litigation',
    description: 'Strategic advocacy in civil disputes, including property disputes, torts, and contract law.'
  },
  {
    id: 'criminal-law',
    title: 'Criminal Law',
    description: 'Expert representation in criminal prosecution and defense, ensuring rigorous adherence to the law.'
  },
  {
    id: 'commercial-litigation',
    title: 'Commercial Litigation',
    description: 'Resolution of complex commercial disputes, including arbitration and cross-border litigation.'
  },
  {
    id: 'company-law',
    title: 'Company Law',
    description: 'Comprehensive advisory and representation in matters before the National Company Law Tribunal.'
  },
  {
    id: 'debt-recovery',
    title: 'Debt Recovery',
    description: 'Strategic recovery and insolvency management for corporate and personal debtors.'
  },
  {
    id: 'property-law',
    title: 'Property Law',
    description: 'Expert handling of property transactions, title verification, and real estate disputes.'
  },
  {
    id: 'family-law',
    title: 'Family Law',
    description: 'Compassionate and authoritative representation in matrimonial matters and family disputes.'
  },
  {
    id: 'corporate-advisory',
    title: 'Corporate Advisory',
    description: 'Strategic advisory on corporate governance, compliance, and regulatory frameworks.'
  },
  {
    id: 'consumer-disputes',
    title: 'Consumer Disputes',
    description: 'Representation in consumer redressal and protection of individual rights under the law.'
  },
  {
    id: 'tax-advisory',
    title: 'Tax Advisory',
    description: 'Expert advisory on tax compliance, planning, and representation before tax authorities.'
  },
  {
    id: 'employment-law',
    title: 'Employment Law',
    description: 'Comprehensive legal solutions for labor disputes, employment contracts, and workplace rights.'
  }
];

// Preserved for backwards compatibility / home highlights
export const PRACTICE_AREAS = ALL_PRACTICE_AREAS;

export const PRACTICE_METHODOLOGY = [
  {
    number: '01',
    title: 'Research',
    description: 'We conduct exhaustive legal research to ensure every argument is built on a foundation of authoritative precedent and meticulous documentation.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Our approach is defined by a clear, client-centric strategy that aligns with your specific objectives and the nuances of your case.'
  },
  {
    number: '03',
    title: 'Execution',
    description: 'We execute our advocacy with precision and authority, ensuring every step of the process is handled with the highest level of professionalism.'
  }
];

export const VALUES: ValueItem[] = [
  {
    number: '01',
    title: 'Strategic Clarity',
    description: 'We provide authoritative legal advocacy with a clear roadmap for complex matters.'
  },
  {
    number: '02',
    title: 'Client-Centric Approach',
    description: 'Our advocacy is built on a deep understanding of your unique business and personal goals.'
  },
  {
    number: '03',
    title: 'Integrity',
    description: 'We uphold the highest ethical standards, ensuring transparency and trust in every interaction.'
  },
  {
    number: '04',
    title: 'Responsiveness',
    description: 'We maintain a high level of engagement, providing timely support and expert guidance.'
  }
];

export const LEAD_ADVOCATES: Advocate[] = [
  {
    id: 'freud-richardson',
    name: 'Fredrick Richardson',
    role: 'ADVOCATE',
    experience: 'More than 10 years of experience',
    specialties: [
      'Criminal Litigation',
      'Civil Litigation',
      'Commercial Litigation'
    ],
    bio: 'A seasoned advocate with a deep-rooted commitment to justice and strategic clarity. He handles complex civil and criminal matters with precision and integrity.',
    email: 'richardson@signaturelegal.in',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    isLead: true,
    socials: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 'tahura-anzar',
    name: 'Tahura Anzar',
    role: 'ADVOCATE',
    experience: 'More than 10 years of experience',
    specialties: [
      'Company Matters (NCLT, NCLAT)',
      'Debt Recovery',
      'Arbitration',
      'Family Law'
    ],
    bio: 'Specializing in corporate compliance and complex commercial disputes, she brings a refined approach to resolving intricate legal challenges with precision.',
    email: 'tahura@signaturelegal.in',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    isLead: true,
    socials: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 'chandana-gururaj',
    name: 'Chandana Gururaj',
    role: 'ADVOCATE',
    experience: 'Nearly 7 years of experience',
    specialties: [
      'Property Matters',
      'Civil Litigation'
    ],
    bio: 'A dedicated advocate with a strong focus on property law and civil litigation, providing clear and authoritative guidance for complex matters.',
    email: 'chandana@signaturelegal.in',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800',
    isLead: true,
    socials: {
      facebook: '#',
      instagram: '#',
      twitter: '#',
      linkedin: '#'
    }
  }
];

export const ASSOCIATES: Associate[] = [
  {
    name: 'Lekhan Gowda',
    role: 'Associate',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Boopathy Raman',
    role: 'Associate',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600'
  },
  {
    name: 'Samhitha Rao',
    role: 'Associate',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600'
  }
];

export const FOOTER_PRACTICE_AREAS = [
  'Civil Litigation',
  'Criminal Law',
  'Commercial Litigation & Arbitration',
  'Company Law Matters',
  'Debt Recovery, Insolvency & Bankruptcy',
  'Property & Real Estate Law',
  'Family & Matrimonial Law',
  'Corporate Advisory & Compliance',
  'Consumer Disputes',
  'Tax Advisory',
  'Employment & Labour Law'
];

export const CONTACT_INFO = {
  address: '281, 17th F Main, 3rd Cross, KHB Colony, Koramangala 5th Block, Bengaluru – 560038, Karnataka, India',
  phone: '+91 88923 43289',
  email: 'contact@signaturelegal.in',
  hours: '8:00 AM to 9:00 PM'
};
