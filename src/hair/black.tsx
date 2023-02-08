import React from 'react';

export default function hairBlack(props: { color: string; colorRandom: boolean }): SVGElement {
  const { color, colorRandom } = props;
  return (
    <svg
      style={{
        position: 'absolute',
        bottom: '0%',
        width: '131%',
        height: '131%',
        left: '-15%'
      }}
      width="356"
      height="432"
      viewBox="0 0 356 432"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={(colorRandom && color) || 'black'}
        stroke="#000000"
        stroke-width="3.82"
        d="M34.1,247.2c17.5,35.9,52.1,58.2,85.2,70.3l-17.6-69.1
	c0,0,17.9-11.9,14.6-42.1c-4.1-37.8,104.2-84.3,126-17.7l19.1,81.8C275,224.8,285,193.2,278,159.4C248.4,25.6,116.7,48.8,67.8,90
	C18.8,131.3,5,187.7,34.1,247.2z"
      />
    </svg>
  );
}
