"use client";

import { Icon as Iconify } from "@iconify/react";

interface IconProps {
  icon: string;
  size?: number;
  color?: string;
  className?: string;
}

export default function IconComponent(props: IconProps) {
  const { icon, color, size = 20, className } = props;
  return (
    <Iconify
      icon={icon}
      style={{ fontSize: size }}
      color={color}
      className={className}
    />
  );
}
