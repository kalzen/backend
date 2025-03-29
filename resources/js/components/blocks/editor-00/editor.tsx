import React from 'react';
import { SerializedEditorState } from 'lexical';

interface EditorProps {
  content?: string;
  onChange?: (content: string) => void;
  initialState?: SerializedEditorState;
}

// Use the correct export name "Editor" to match the import in editor-00.tsx
export const Editor: React.FC<EditorProps> = ({ content = '', onChange, initialState }) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="editor-container">
      <textarea
        className="w-full h-64 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        value={content}
        onChange={handleChange}
        placeholder="Start typing your content here..."
      />
    </div>
  );
};

// Also export it as default for backward compatibility
export default Editor;
