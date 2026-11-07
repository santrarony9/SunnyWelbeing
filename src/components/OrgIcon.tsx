import React from 'react';
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

interface OrgIconProps {
  name: string;
  className?: string;
}

export function OrgIcon({ name, className = "w-5 h-5" }: OrgIconProps) {
  switch (name) {
    case 'Heart': return <Heart className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Users': return <Users className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Target': return <Target className={className} />;
    case 'Compass': return <Compass className={className} />;
    case 'BookOpen': return <BookOpen className={className} />;
    case 'Smile': return <Smile className={className} />;
    case 'HandHeart': return <HandHeart className={className} />;
    case 'Scale': return <Scale className={className} />;
    case 'Lock': return <Lock className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'Activity': return <Activity className={className} />;
    case 'Award': return <Award className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Lightbulb': return <Lightbulb className={className} />;
    case 'MessageCircle': return <MessageCircle className={className} />;
    case 'BrainCircuit': return <BrainCircuit className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Network': return <Network className={className} />;
    case 'GraduationCap': return <GraduationCap className={className} />;
    case 'Baby': return <Baby className={className} />;
    case 'UserCheck': return <UserCheck className={className} />;
    case 'User': return <User className={className} />;
    case 'Home': return <Home className={className} />;
    case 'AlertCircle': return <AlertCircle className={className} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} />;
    default: return <Sparkles className={className} />;
  }
}

export default OrgIcon;
