// app/page.tsx
'use client';

import { useState, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner'; // For notifications, you'll need to install sonner and add Toaster
import { ModeToggle } from './components/mode-toggle';

export default function Home() {
  const [noteContent, setNoteContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select();
      navigator.clipboard.writeText(textareaRef.current.value);
      toast.success('Text copied to clipboard!'); // Displays a small success message
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4">
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="w-[min(100%,_700px)] max-w-[70%] lg:max-w-[60%] mx-auto p-6 rounded-lg shadow-xl border border-border bg-card">
        <h1 className="text-3xl font-poppins font-bold text-center mb-6">
          Simple Notepad
        </h1>
        <Textarea
          ref={textareaRef}
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          placeholder="Start typing your notes here..."
          className="w-full h-64 resize-none font-poppins text-lg p-4 bg-secondary text-secondary-foreground border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
        />
        <Button
          onClick={handleCopy}
          className="mt-4 w-full font-poppins text-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200"
        >
          Copy Text
        </Button>
      </div>
    </div>
  );
}
