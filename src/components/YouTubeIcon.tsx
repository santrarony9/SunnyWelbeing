import React from 'react';

interface YouTubeIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Official YouTube Icon — styled in brand gold (#D4A373) to match Facebook and WhatsApp.
 * Completely free of red branding, red fills, or red backgrounds.
 * Uses inline fill and color styles (#D4A373) to ensure 100% color consistency.
 */
export function YouTubeIcon({
  className = 'w-5 h-5',
  style,
  ...props
}: YouTubeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="#D4A373"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        color: '#D4A373',
        fill: '#D4A373',
        ...style
      }}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        fill="#D4A373"
        style={{ fill: '#D4A373' }}
      />
    </svg>
  );
}

export default YouTubeIcon;
