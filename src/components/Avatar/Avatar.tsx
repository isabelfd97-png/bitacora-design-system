import './Avatar.css';

export interface AvatarProps {
  /** Single-letter initial shown in the circle. */
  initial: string;
  /** Background color — usually a lighter tint of the parent card's own color. */
  color: string;
}

/** Small circular avatar with an initial. Meant to be shown in overlapping stacks. */
export function Avatar({ initial, color }: AvatarProps) {
  return (
    <div className="avatar" style={{ backgroundColor: color }}>
      {initial}
    </div>
  );
}
