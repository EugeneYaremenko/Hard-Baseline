import * as React from 'react';

export default function SvgIconLoadingDots() {
  return (
    <svg viewBox="0 0 48 16">
      <circle stroke="none" cx="8" cy="8" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"
        />
      </circle>
      <circle stroke="none" cx="24" cy="8" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.2"
        />
      </circle>
      <circle stroke="none" cx="40" cy="8" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.3"
        />
      </circle>
    </svg>
  );
}
