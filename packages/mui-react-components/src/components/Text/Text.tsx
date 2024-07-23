import React from "react";

export interface TextProps {
  children: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => <p>{children}</p>;
export { Text };
