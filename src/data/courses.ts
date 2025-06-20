import { Course } from '../types/course';

export const courses: Course[] = [
  {
    id: 'remote-customer-support',
    title: 'Remote Customer Support',
    description: 'Master customer service skills for remote support roles, including ticketing systems and communication best practices.',
    image: 'https://images.pexels.com/photos/7709242/pexels-photo-7709242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '4 weeks',
    mode: 'Live virtual classes',
    certification: true,
    curriculum: [
      {
        title: 'Customer Service Fundamentals',
        topics: [
          'Understanding customer needs',
          'Effective communication',
          'Problem-solving techniques',
          'Handling difficult situations'
        ]
      },
      {
        title: 'Remote Support Tools',
        topics: [
          'Ticketing systems',
          'Remote desktop software',
          'Knowledge base management',
          'Communication platforms'
        ]
      },
      {
        title: 'Best Practices',
        topics: [
          'Time management',
          'Documentation',
          'Follow-up procedures',
          'Quality assurance'
        ]
      }
    ],
    outcomes: [
      'Handle customer inquiries professionally',
      'Use popular support tools effectively',
      'Manage multiple tickets efficiently',
      'Resolve complex customer issues'
    ],
    prerequisites: [
      'Basic computer skills',
      'Strong written communication',
      'Reliable internet connection'
    ],
    startDates: ['2025-07-01', '2025-08-01', '2025-09-01']
  },
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant Training',
    description: 'Learn essential VA skills including calendar management, email handling, and basic administrative tasks.',
    image: 'https://images.pexels.com/photos/17791809/pexels-photo-17791809/free-photo-of-man-sits-with-laptop-on-lap-and-talks-on-phone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '3 weeks',
    mode: 'Self-paced + mentorship',
    certification: true,
    curriculum: [
      {
        title: 'Administrative Skills',
        topics: [
          'Calendar management',
          'Email organization',
          'Document handling',
          'Task prioritization'
        ]
      },
      {
        title: 'Digital Tools',
        topics: [
          'Project management software',
          'Communication platforms',
          'Cloud storage solutions',
          'Productivity apps'
        ]
      },
      {
        title: 'Professional Development',
        topics: [
          'Client communication',
          'Time tracking',
          'Invoicing basics',
          'Setting boundaries'
        ]
      }
    ],
    outcomes: [
      'Manage multiple calendars efficiently',
      'Handle email correspondence professionally',
      'Organize digital files and documents',
      'Coordinate meetings and events'
    ],
    prerequisites: [
      'Basic computer skills',
      'Good organizational skills',
      'Reliable internet connection'
    ],
    startDates: ['2025-07-01', '2025-08-01', '2025-09-01']
  },
  {
    id: 'freelance-writing',
    title: 'Freelance Writing & Content',
    description: 'Develop content creation skills for blogs, websites, and social media, plus learn how to pitch and find clients.',
    image: 'https://images.pexels.com/photos/4559592/pexels-photo-4559592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '6 weeks',
    mode: 'Weekly workshops',
    certification: true,
    curriculum: [
      {
        title: 'Writing Fundamentals',
        topics: [
          'Content types and formats',
          'SEO basics',
          'Research techniques',
          'Editing and proofreading'
        ]
      },
      {
        title: 'Content Strategy',
        topics: [
          'Audience analysis',
          'Content planning',
          'Style guides',
          'Content calendars'
        ]
      },
      {
        title: 'Business Skills',
        topics: [
          'Finding clients',
          'Pitching services',
          'Setting rates',
          'Portfolio building'
        ]
      }
    ],
    outcomes: [
      'Create engaging content for various platforms',
      'Optimize content for search engines',
      'Build a strong writing portfolio',
      'Acquire and retain clients'
    ],
    prerequisites: [
      'Strong English language skills',
      'Basic writing experience',
      'Familiarity with word processors'
    ],
    startDates: ['2025-07-01', '2025-08-01', '2025-09-01']
  },
  {
    id: 'tech-sales',
    title: 'Tech Sales/Remote SDR',
    description: 'Master the art of virtual sales development, including prospecting, outreach, and closing techniques.',
    image: 'https://images.pexels.com/photos/8204325/pexels-photo-8204325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    duration: '8 weeks',
    mode: 'Live training + practice',
    certification: true,
    curriculum: [
      {
        title: 'Sales Fundamentals',
        topics: [
          'Sales psychology',
          'Prospecting techniques',
          'Pipeline management',
          'Closing strategies'
        ]
      },
      {
        title: 'Tech Stack',
        topics: [
          'CRM systems',
          'Sales automation tools',
          'Communication platforms',
          'Analytics tools'
        ]
      },
      {
        title: 'Remote Selling',
        topics: [
          'Virtual presentations',
          'Email outreach',
          'Social selling',
          'Video conferencing'
        ]
      }
    ],
    outcomes: [
      'Build and manage sales pipelines',
      'Conduct effective virtual meetings',
      'Use sales technology efficiently',
      'Close deals remotely'
    ],
    prerequisites: [
      'Strong communication skills',
      'Basic tech understanding',
      'Self-motivated attitude'
    ],
    startDates: ['2025-07-01', '2025-08-01', '2025-09-01']
  }
];