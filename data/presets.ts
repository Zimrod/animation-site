// data/presets.ts
export interface Preset {
  id: string;
  name: string;
  description: string;
  icon: string;
  videoUrl: string;   // path to demo video (place in public/demos/)
}

export const presets: Preset[] = [
  { id: 'idle', name: 'Idle', description: 'Subtle breathing, weight shift – natural rest pose', icon: '🧍', videoUrl: '/demos/idle.mp4' },
  { id: 'walk', name: 'Walk', description: 'Asymmetric gait with knee bend, pelvis bob', icon: '🚶', videoUrl: '/demos/walk.mp4' },
  { id: 'run', name: 'Run', description: 'Faster cycle, extended stride, slight lean', icon: '🏃', videoUrl: '/demos/run.mp4' },
  { id: 'point', name: 'Point / Gesture', description: 'Arm raises to target angle, holds pose', icon: '👉', videoUrl: '/demos/point.mp4' },
  { id: 'jump', name: 'Jump', description: 'Arc motion with crouch & landing', icon: '🦘', videoUrl: '/demos/jump.mp4' },
  { id: 'carry', name: 'Carry Object', description: 'Attach props (box, sign, etc.) to hand', icon: '📦', videoUrl: '/demos/carry.mp4' },
];