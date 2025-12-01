// components/mdx/index.tsx
import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "@/components/mdx/CodeBlock";

export const mdxComponents: MDXComponents = {
  code: (props: any) => <CodeBlock {...props} />,
  // ...other overrides
};
