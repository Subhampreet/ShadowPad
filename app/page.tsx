// app/page.tsx
'use client';

import { useState, useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Navbar } from './components/navbar';

export default function Home() {
  const [noteContent, setNoteContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4">
      {/* Navbar with Logo, Copy Button, and Dark Mode Toggle */}
      <Navbar noteContent={noteContent} />

      {/* Main content area, adjusted to account for fixed Navbar */}
      <main className="flex-grow w-full flex justify-center items-start pt-28 pb-4"> {/* Increased top padding, adjusted alignment */}
        {/* Notepad Container */}
        <div className="w-[min(100%,_700px)] max-w-[70%] lg:max-w-[60%] mx-auto p-6 rounded-lg bg-card relative">
          {/* Removed shadow-xl from here */}

          {/* Textarea */}
          <Textarea
            ref={textareaRef}
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Start typing your notes here..."
            className="w-full h-64 resize-none font-poppins text-xl p-4 // Increased text-size to xl
                       bg-secondary
                       text-foreground dark:text-white // Ensure text is visible in both modes
                       placeholder:text-muted-foreground // Use a more appropriate grey for placeholder
                       focus:outline-none focus:ring-0 focus:border-none
                       border-none"
            style={{ background: 'transparent' }}
          />
        </div>
      </main>
    </div>
  );
}