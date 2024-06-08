import React, { useState, useRef } from "react";
import { Highlight, themes } from "prism-react-renderer";

function CodeEditor() {
  const [code, setCode] = useState(
    `const Labs = ({ item }) => {
      return (
        <div>
          <h2>{item.product}</h2>
          <p>Price: {item.price}</p>
          <p>Capacity: {item.capacity}</p>
        </div>
      );
    }`
  );

  const textareaRef = useRef(null);
  const codeContainerRef = useRef(null);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleScroll = () => {
    if (textareaRef.current && codeContainerRef.current) {
      codeContainerRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <h1 className=" absolute text-white text-2xl underline underline-offset-8  top-5 ">
        React Code Editor
      </h1>
      <div className="relative h-[500px] bg-[#2D2A55] w-4/5">
        <div
          ref={codeContainerRef}
          className="absolute p-5 z-0 top-0 left-0 w-full mb-4 rounded overflow-auto font-mono text-sm  caret-white h-full"
        >
          <Highlight
            theme={themes.shadesOfPurple}
            code={code}
            language="javascript"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleCodeChange}
          onScroll={handleScroll}
          className="w-full h-full p-5 text-sm border font-mono border-gray-300 caret-white rounded bg-transparent text-transparent  relative z-10 overflow-auto"
        ></textarea>
      </div>
    </div>
  );
}

export default CodeEditor;
