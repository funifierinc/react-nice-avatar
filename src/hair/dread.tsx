import React from 'react';

export default function hairDread(props: { color: string; colorRandom: boolean }): SVGElement {
  const { color, colorRandom } = props;
  return (
    <svg
      style={{
        position: 'absolute',
        bottom: '0%',
        width: '131%',
        height: '131%',
        left: '-15%',
      }}
      width="356"
      height="432"
      viewBox="0 0 356 432"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill={(colorRandom && color) || 'black'}
          stroke="#000000"
          stroke-width="3.82"
          d="M170.6,165.3L170.6,165.3c-7.8,2-15.8-2.8-17.8-10.6l-6.1-24.1
			c-2-7.8,2.8-15.8,10.6-17.8l0,0c7.8-2,15.8,2.8,17.8,10.6l6.1,24.1C183.2,155.4,178.5,163.3,170.6,165.3z"
        />
      </g>
      <g>
        <path
          fill={(colorRandom && color) || 'black'}
          stroke="#000000"
          stroke-width="3.82"
          d="M206.2,162.5L206.2,162.5c-5.2-0.7-8.9-5.5-8.2-10.7l2.3-17.5
			c0.7-5.2,5.5-8.9,10.7-8.2l0,0c5.2,0.7,8.9,5.5,8.2,10.7l-2.3,17.5C216.2,159.5,211.4,163.2,206.2,162.5z"
        />
      </g>
      <g>
        <path
          fill={(colorRandom && color) || 'black'}
          stroke="#000000"
          stroke-width="3.82"
          d="M229.4,175.4L229.4,175.4c-4.7-2.3-6.7-8-4.5-12.7l4.3-8.8
			c2.3-4.7,8-6.7,12.7-4.5l0,0c4.7,2.3,6.7,8,4.5,12.7l-4.3,8.8C239.8,175.7,234.1,177.7,229.4,175.4z"
        />
      </g>
      <g>
        <path
          fill={(colorRandom && color) || 'black'}
          stroke="#000000"
          stroke-width="3.82"
          d="M138.2,176L138.2,176c-5.6,3.3-12.9,1.3-16.1-4.3l-9.8-17
			c-3.3-5.6-1.3-12.9,4.3-16.1l0,0c5.6-3.3,12.9-1.3,16.1,4.3l9.8,17C145.8,165.5,143.8,172.8,138.2,176z"
        />
      </g>
      <g>
        <path
          fill={(colorRandom && color) || 'black'}
          stroke="#000000"
          stroke-width="3.82"
          d="M114.4,197.3L114.4,197.3c-4.6,4.6-12.1,4.6-16.7,0l-9.5-9.5
			c-4.6-4.6-4.6-12.1,0-16.7l0,0c4.6-4.6,12.1-4.6,16.7,0l9.5,9.5C119,185.2,119,192.7,114.4,197.3z"
        />
      </g>
      <g>
        <path
          fill={(colorRandom && color) || 'black'}
          stroke="#000000"
          stroke-width="3.82"
          d="M112.9,215.3L112.9,215.3c0,3-2.5,5.5-5.5,5.5H89
			c-3,0-5.5-2.5-5.5-5.5l0,0c0-3,2.5-5.5,5.5-5.5h18.4C110.4,209.8,112.9,212.2,112.9,215.3z"
        />
      </g>
      <g>
        <path
          fill={(colorRandom && color) || 'black'}
          stroke="#000000"
          stroke-width="3.82"
          d="M115,235.2L115,235.2c0,3-2.5,5.5-5.5,5.5H91.1
			c-3,0-5.5-2.5-5.5-5.5v0c0-3,2.5-5.5,5.5-5.5h18.4C112.6,229.8,115,232.2,115,235.2z"
        />
      </g>
      <g>
        <path
          fill={(colorRandom && color) || 'black'}
          stroke="#000000"
          stroke-width="3.82"
          d="M242.9,209.4L242.9,209.4c-0.7-2.9,1-5.9,4-6.7l7.4-1.9
			c2.9-0.7,5.9,1,6.7,4v0c0.7,2.9-1,5.9-4,6.7l-7.4,1.9C246.7,214.2,243.7,212.4,242.9,209.4z"
        />
      </g>
      <g>
        <path
          fill={(colorRandom && color) || 'black'}
          stroke="#000000"
          stroke-width="3.82"
          d="M236.8,190.4L236.8,190.4c-0.7-2.9,1-5.9,4-6.7l7.4-1.9
			c2.9-0.7,5.9,1,6.7,4l0,0c0.7,2.9-1,5.9-4,6.7l-7.4,1.9C240.5,195.1,237.5,193.3,236.8,190.4z"
        />
      </g>
    </svg>
  );
}