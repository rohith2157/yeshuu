import React from 'react';
import { DynamicHelixShowcase } from './DynamicHelixShowcase';
import { type Project } from '../data/projects';

interface FeaturedWorksProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedWorks: React.FC<FeaturedWorksProps> = ({ onSelectProject }) => {
  return <DynamicHelixShowcase onSelectProject={onSelectProject} />;
};

