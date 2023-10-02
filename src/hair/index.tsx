import React from "react";

import Normal from "./normal";
import Thick from "./thick";
import Mohawk from "./mohawk";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";
import Black from "./black";
import Dread from  "./dread";
import Curly from "./curly";

export default function hair(props: { style: string, color: string, colorRandom: boolean }): SVGElement {
  const { style, color, colorRandom } = props;
  switch (style) {
    case "thick": return <Thick color={color} colorRandom={colorRandom} />;
    case "mohawk": return <Mohawk color={color} colorRandom={colorRandom} />;
    case "black": return <Black color={color} colorRandom={colorRandom} />;
    case "dread": return <Dread color={color} colorRandom={colorRandom} />;
    case "curly": return <Curly color={color} colorRandom={colorRandom} />;
    case "womanLong": return <WomanLong color={color} />;
    case "womanShort": return <WomanShort color={color} />;
    case "normal": return <Normal color={color} />;
    case "none": 
    default:
      return null;
  }
}
