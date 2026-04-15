export interface Combination {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
}

export const combinations: Combination[] = [
  {
    id: 'walk-point',
    name: 'Walk → Point → Idle',
    description: 'Smooth transition from walking, to pointing, then idle',
    videoUrl: '/demos/walk-point.mp4',
  },
  {
    id: 'pickup',
    name: 'Pick up & Carry',
    description: 'Character bends, grabs object, lifts and walks with it',
    videoUrl: '/demos/pickup.mp4',
  },
  {
    id: 'two-characters',
    name: 'Dual Character Interaction',
    description: 'Two side‑view characters walk, stop, and gesture to each other',
    videoUrl: '/demos/two-characters.mp4',
  },
];