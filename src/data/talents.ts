import { Video as LucideIcon, Users, Phone, Headset, Clipboard, Clock, TrendingUp, Briefcase } from 'lucide-react';

export interface Talent {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

export const talents: Talent[] = [
  {
    id: 'real-estate-va',
    title: 'Real Estate VA',
    icon: Briefcase,
    description: 'Virtual assistants who manage administrative tasks, scheduling, and client coordination for real estate professionals.',
    skills: ['Client communication', 'Scheduling', 'Email management', 'CRM software'],
  },
  {
    id: 'cold-caller',
    title: 'Cold Caller',
    icon: Phone,
    description: 'Skilled professionals who make outbound calls to generate leads and build relationships with potential clients.',
    skills: ['Phone communication', 'Lead generation', 'Objection handling', 'Sales pitch'],
  },
  {
    id: 'customer-service',
    title: 'Customer Service',
    icon: Headset,
    description: 'Dedicated support specialists who handle customer inquiries, resolve issues, and ensure satisfaction.',
    skills: ['Problem solving', 'Communication', 'Patience', 'Conflict resolution'],
  },
  {
    id: 'admin-support',
    title: 'Admin Support',
    icon: Clipboard,
    description: 'Administrative professionals who manage data entry, documentation, and organizational tasks.',
    skills: ['Data entry', 'Organization', 'Attention to detail', 'Document management'],
  },
  {
    id: 'appointment-setting',
    title: 'Appointment Setting',
    icon: Clock,
    description: 'Specialists who schedule meetings and appointments between businesses and their prospects or clients.',
    skills: ['Calendar management', 'Communication', 'Follow-up', 'Time management'],
  },
  {
    id: 'closer',
    title: 'Closer',
    icon: TrendingUp,
    description: 'Sales professionals who close deals and convert leads into paying customers.',
    skills: ['Negotiation', 'Closing techniques', 'Sales strategy', 'Relationship building'],
  },
  {
    id: 'sales-rep',
    title: 'Sales Representative',
    icon: Users,
    description: 'Enthusiastic sales professionals who identify customer needs and promote products or services.',
    skills: ['Sales expertise', 'Customer engagement', 'Product knowledge', 'Persuasion'],
  },
];
