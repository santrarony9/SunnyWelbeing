import React from 'react';

interface FacebookIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: 'brand' | 'monochrome';
}

/**
 * Official Facebook brand icon
 * Default: Official Facebook Blue (#1877F2) circle with white 'f'.
 * Monochrome: single-color vector matching currentColor.
 */
export function FacebookIcon({
  className = "w-5 h-5",
  variant = 'brand',
  ...props
}: FacebookIconProps) {
  if (variant === 'monochrome') {
    return (
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
        focusable="false"
        {...props}
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#1877F2" />
      <path
        d="M15.117 12.002h-2.117v7.998h-3.328v-7.998H7.954V9.266h1.718V7.279c0-2.392 1.428-3.714 3.555-3.714 1.018 0 2.083.182 2.083.182v2.292h-1.174c-1.186 0-1.556.736-1.556 1.492v1.735h2.583l-.413 2.736z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export default FacebookIcon;
