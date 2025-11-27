import { Code, Layout, Smartphone, Database, Globe, Cpu } from 'lucide-react';
import type { Project, Skill } from './types';

// ----------------------------------------------------------------------
// روابط Google Sheet
// ----------------------------------------------------------------------
// رابط المشاريع (موجود مسبقاً)
export const GOOGLE_SHEET_URL: string = "https://docs.google.com/spreadsheets/d/12Pp2YLECivcKqoFzTZdqaejMo6n0xJu7oqF8cvkbXxU/gviz/tq?tqx=out:csv";

// رابط المهارات (تم تحديثه بالشيت الجديد)
export const GOOGLE_SHEET_SKILLS_URL: string = "https://docs.google.com/spreadsheets/d/143aZ0pQA-d39Nctpg-s5gIJYdX97N-J5UYVlPpNeeT4/gviz/tq?tqx=out:csv"; 

// رابط سكريبت التواصل (Apps Script)
export const CONTACT_FORM_SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbwfLde4bBhAwFacN7oNCiaJPe9CYNzzlQYLjXFT9V6ExZY1jwA8ARcoFSeptaepYS8K/exec";

export const NAV_LINKS = [
  { name: 'الرئيسية', href: '#hero' },
  { name: 'المهارات', href: '#skills' },
  { name: 'المشاريع', href: '#projects' },
  { name: 'تواصل معي', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React & Next.js', icon: Code, level: 95 },
  { name: 'UI/UX Design', icon: Layout, level: 90 },
  { name: 'Responsive Web', icon: Smartphone, level: 100 },
  { name: 'Backend Integration', icon: Database, level: 85 },
  { name: 'Three.js & 3D', icon: Globe, level: 80 },
  { name: 'Performance Optimization', icon: Cpu, level: 88 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'منصة التجارة الإلكترونية المستقبلية',
    description: 'متجر إلكتروني متكامل ثلاثي الأبعاد يعرض المنتجات بتفاعل 360 درجة مع لوحة تحكم متقدمة.',
    tags: ['React', 'Three.js', 'Node.js', 'Tailwind'],
    image: 'https://picsum.photos/800/600?random=1',
    link: '#',
  },
  {
    id: 2,
    title: 'تطبيق إدارة المهام الذكي',
    description: 'تطبيق إنتاجية يستخدم الذكاء الاصطناعي لتنظيم المهام اليومية وتحليل الأداء.',
    tags: ['TypeScript', 'AI Integration', 'Framer Motion'],
    image: 'https://picsum.photos/800/600?random=2',
    link: '#',
  },
  {
    id: 3,
    title: 'لوحة تحكم البيانات المالية',
    description: 'نظام تصور بيانات (Data Visualization) للشركات الكبرى لعرض الإحصائيات المالية بشكل فوري.',
    tags: ['D3.js', 'Next.js', 'GraphQL'],
    image: 'https://picsum.photos/800/600?random=3',
    link: '#',
  },
];
