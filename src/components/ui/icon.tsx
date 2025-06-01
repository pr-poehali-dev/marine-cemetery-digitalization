import { LucideIcon, icons } from "lucide-react";

interface IconProps {
  name: keyof typeof icons;
  fallback?: keyof typeof icons;
  size?: number;
  className?: string;
}

const Icon = ({
  name,
  fallback = "CircleAlert",
  size = 24,
  className = "",
}: IconProps) => {
  const LucideIcon = icons[name] as LucideIcon;
  const FallbackIcon = icons[fallback] as LucideIcon;

  const IconComponent = LucideIcon || FallbackIcon;

  return <IconComponent size={size} className={className} />;
};

export default Icon;
