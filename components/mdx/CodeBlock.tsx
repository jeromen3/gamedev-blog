"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

type CodeBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const match = /language-(\w+)/.exec(className ?? "");
  const language = match?.[1] ?? "text";

  const code =
    typeof children === "string"
      ? children
      : React.Children.toArray(children).join("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <div className="code-block">
      <div className="code-header">
        <span className="code-language">{language.toUpperCase()}</span>
        <button
          type="button"
          className="code-copy-btn"
          onClick={handleCopy}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <Highlight
        theme={themes.nightOwl}
        code={code.trimEnd()}
        language={language as any}
      >
        {({ className: _cn, style, tokens, getLineProps, getTokenProps }) => (
          <pre className="code-body" style={style}>
            <code className="code-lines">
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({ line, key: i, className: "code-line" })}
                >
                  <span className="code-line-number">{i + 1}</span>
                  <span className="code-line-content">
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
