import { useState } from "react";

const useClipboard = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); 
  };
  return { copied, copyToClipboard };
};

export default useClipboard;
