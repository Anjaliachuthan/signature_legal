export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  expandedDetails: string;
  image: string;
}

export const OUR_SERVICES: ServiceItem[] = [
  {
    id: 'legal-content-optimization',
    number: '01.',
    title: 'Legal Content Optimization',
    description: "This service enhances your website's legal pages with optimized, SEO-friendly content to increase visibility in search engines and attract more potential clients. It includes keyword integration, clear legal...",
    expandedDetails: "frameworks, authoritative statutory citations, and structured metadata designed to elevate organic reach while adhering strictly to professional ethics and legal advertising standards.",
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'responsive-website-makeover',
    number: '02.',
    title: 'Responsive Website Makeover',
    description: "This service redesigns your law firm's website to feature fully mobile-responsive navigation and modern aesthetics, ensuring a seamless user experience across devices. It incorporates...",
    expandedDetails: "intuitive client intake workflows, streamlined counsel directories, high-speed performance architecture, and bespoke typography conveying trust and prestige.",
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'legal-insights-publishing',
    number: '03.',
    title: 'Legal Insights Publishing',
    description: "This service involves creating and managing a legal insights section on your website that features articles, updates, and commentary on current legal issues, positioning your firm as an authoritative...",
    expandedDetails: "thought leader before clients, judicial chambers, and corporate legal departments. Includes editorial reviews and statutory alignment.",
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800'
  }
];
