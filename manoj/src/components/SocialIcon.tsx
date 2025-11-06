import { Github, Linkedin, Instagram, Facebook, Twitter, Globe, Mail, Youtube, FileText, Code2 } from 'lucide-react';

export type Platform = 'github' | 'linkedin' | 'instagram' | 'facebook' | 'twitter' | 'website' | 'email' | 'youtube' | 'devto' | 'medium';

const map: Record<Platform, any> = {
  github: Github,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  twitter: Twitter,
  website: Globe,
  email: Mail,
  youtube: Youtube,
  devto: Code2,
  medium: FileText,
};

export default function SocialIcon({ platform, size = 18 }: { platform: Platform; size?: number }) {
  const Icon = map[platform] ?? Globe;
  return <Icon size={size} />;
}
