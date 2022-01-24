import React, { FC } from "react";

const Snow: FC<{ color: string }> = ({ color }) => (
  <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M46.19 87.815v-10.57l-6.394 3.32-3.13-1.723v-3.715l9.525-4.977v-6.947l-7.62 4.085v-7.36l-7.619 3.49v9.984l-3.148 2.05-2.566-1.852v-6.687l-10.617 5.204L10 70.452v-4.215l10.829-5.284-7.02-3.036V54.05l4.044-1.878 9.932 5.113 6.88-3.473-.156-.109-6.981-3.538 6.796-3.713-6.813-3.472-9.93 5.087-3.771-1.615v-3.845l6.746-3.297L10 34.222v-4.215l4.421-1.857 10.817 5.328v-6.793l2.829-1.878 3.7 1.966-.106 10.175 6.996 3.537.063-7.185 7.47 3.498v-6.945l-9.523-4.98v-3.69l3.13-1.75 6.394 3.32V12.207L49.989 10l3.82 2.207v10.546l7.44-3.385 3.99 2.032v3.32l-11.43 5.133v6.945l7.62-3.778v7.557l7.619-3.474V26.23l2.771-1.443 2.943 1.441v6.945l11.127-5.133L90 30.07v3.932l-10.467 5.283 6.657 3.257v3.756l-3.485 1.66-10.147-5.263-7.008 3.91 6.76 3.713-6.969 3.537 7.185 3.32 10.264-4.977 3.4 2.027v3.583l-6.323 3.145L90 66.237v4.15l-4.804 1.728-10.434-4.98v6.592l-2.895 1.748-2.82-1.748V63.723l-7.618-3.688v6.947l-7.62-3.78v6.946l9.524 4.977v3.932l-3.137 1.506-6.386-3.316v10.57L49.989 90l-3.798-2.185Zm-2.792-37.662L46.99 55h6.694l3.072-4.847L53.511 45h-6.694l-3.419 5.153Z"
      fill={color}
    />
  </svg>
);

export default Snow;