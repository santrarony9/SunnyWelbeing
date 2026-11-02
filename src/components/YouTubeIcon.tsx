import React from 'react';

interface YouTubeIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * Official YouTube Icon — sharp, crisp, properly proportioned official branding.
 * Red rounded rectangle (#FF0000) with a centered solid white play triangle (#FFFFFF).
 * Inline CSS styles ensure that Tailwind's global `fill: currentColor` reset can never override the red/white fills.
 */
export function YouTubeIcon({ className = 'w-5 h-5', style, ...props }: YouTubeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
        flexShrink: 0,
        ...style
      }}
      {...props}
    >
      {/* Official YouTube Red Rounded Badge */}
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        fill="#FF0000"
        style={{ fill: '#FF0000' }}
      />
      {/* Official Centered Solid White Play Triangle */}
      <polygon
        points="9.545,8.432 15.818,12 9.545,15.568"
        fill="#FFFFFF"
        style={{ fill: '#FFFFFF' }}
      />
    </svg>
  );
}

export default YouTubeIcon;
