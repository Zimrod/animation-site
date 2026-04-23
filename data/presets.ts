// data/presets.ts
export interface Preset {
  id: string;
  name: string;
  description: string;
  icon: string;
  videoUrls: string[];   // path to demo video (place in public/demos/)
}

export const presets: Preset[] = [
  { 
    id: 'idle', 
    name: 'Lateral Pass', 
    description: 'A clean, edge-to-edge movement that tracks a subject as it enters from one side of the screen and exits the other.', 
    icon: '🚜', 
    // videoUrl: '/demos/tractor1.mp4', // Fallback
    videoUrls: ['/preset-styles/lateral-pass/tractor-no-shake.mp4', '/preset-styles/lateral-pass/tractor-shake.mp4'] // The series
  },
  { 
    id: 'pop', 
    name: 'Pop In & Out', 
    description: 'A dynamic transition that makes a subject appear to pop in and out of the frame.', 
    icon: '🚜', 
    // videoUrl: '/demos/tractor1.mp4', // Fallback
    videoUrls: ['/preset-styles/pop-in-out/clock.mp4', '/preset-styles/pop-in-out/clock-2.mp4'] // The series
  },
  { 
    id: 'lift', 
    name: 'Lift & Carry', 
    description: 'A movement style that simulates the effect of a subject being lifted and carried across the screen.', 
    icon: '🚜', 
    // videoUrl: '/demos/tractor1.mp4', // Fallback
    videoUrls: ['/preset-styles/lift-carry/forklift.mp4', '/preset-styles/lift-carry/forklift-2.mp4'] // The series
  },
  { 
    id: 'reciprocating', 
    name: 'Reciprocating Motion', 
    description: 'A back-and-forth movement that simulates the effect of moving in a repetitive, oscillating pattern.', 
    icon: '🚜', 
    // videoUrl: '/demos/tractor1.mp4', // Fallback
    videoUrls: ['/preset-styles/reciprocating/pumpjack.mp4', '/preset-styles/reciprocating/pumpjack-2.mp4'] // The series
  },
  { 
    id: 'cityscape', 
    name: 'Cityscape Environment', 
    description: 'A bustling city environment that can be used as a background for fitting animations.', 
    icon: '🚜', 
    // videoUrl: '/demos/tractor1.mp4', // Fallback
    videoUrls: ['/preset-styles/cityscape-env/cityscape-fill.mp4', '/preset-styles/cityscape-env/cityscape-bw.mp4', '/preset-styles/cityscape-env/cityscape-stroke.mp4'] // The series
  },
];