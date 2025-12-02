// components/mdx.tsx
import type { MDXComponents } from "mdx/types";
import PlantDiagram from "./mdx/PlantDiagram";

export const mdxComponents: MDXComponents = {
  // custom components you can use directly in .mdx:
  PlantDiagram,

  // (optional) override/extend built-in tags:
  // h2: (props) => <h2 className="mt-8 text-xl font-semibold" {...props} />,
};

export default mdxComponents;
