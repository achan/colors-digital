import React, { useState } from 'react';

function App() {
  const [colors, setColors] = useState(["#110000", "#220000", "#330000"])

  const handleChange = ({ target: { value } }) => {
    const colorsRegex = /(#([a-f0-9]{3}){1,2}\b|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|goldenrod|gold|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavenderblush|lavender|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen)/ig
    const colors = value.match(colorsRegex)
    setColors(colors ?? [])
  }

  return (
    <div>
      <div className="bg-gray-200">
        <div className="container mx-auto p-2">
          <h1 className="font-mono text-lg md:text-4xl mb-2 tracking-wider">
            <span className="text-orange-400">c</span>
            <span className="text-orange-500">o</span>
            <span className="text-orange-600">l</span>
            <span className="text-orange-700">o</span>
            <span className="text-orange-800">r</span>
            <span className="text-orange-900">s</span>.digital
          </h1>

          <textarea
            className="w-full p-2 h-20 sm:h-32 mb-2 border rounded text-lg bg-gray-100"
            placeholder="Paste your text here and we'll extract the colors we can."
            onChange={handleChange}>
          </textarea>
        </div>
      </div>

      <ul className="container p-2 mt-2 mx-auto">
        {colors.map(c => (
          <li className="w-full mb-2 p-2 text-white text-sm" style={{ backgroundColor: c }}>
            <span className="bg-white text-gray-800 px-2 py-1 opacity-50">{c}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
