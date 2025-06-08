// app/page.tsx
'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Navbar } from './components/navbar';

export default function Home() {
  const [noteContent, setNoteContent] = useState<string>('');
  const [lastEdited, setLastEdited] = useState<string>('');
  const [isClient, setIsClient] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Effect to run once after the component mounts on the client
  useEffect(() => {
    setIsClient(true);

    // Load from localStorage only on the client
    const savedNote = localStorage.getItem('shadowpad_note');
    if (savedNote) {
      setNoteContent(savedNote);
      const savedTimestamp = localStorage.getItem('shadowpad_last_edited');
      if (savedTimestamp) {
        setLastEdited(savedTimestamp);
      } else {
        setLastEdited(new Date().toLocaleString());
      }
    }
  }, []); // Run only once on mount

  // Debouncing Local Storage Saves
  const saveNoteToLocalStorage = useCallback((content: string) => {
    localStorage.setItem('shadowpad_note', content);
    const now = new Date().toLocaleString();
    localStorage.setItem('shadowpad_last_edited', now);
    setLastEdited(now);
  }, []);

  useEffect(() => {
    if (isClient) {
      const handler = setTimeout(() => {
        saveNoteToLocalStorage(noteContent);
      }, 500);

      return () => {
        clearTimeout(handler);
      };
    }
  }, [noteContent, saveNoteToLocalStorage, isClient]);

  // Word/Character Count
  const wordCount = noteContent.split(/\s+/).filter(word => word !== '').length;
  const charCount = noteContent.length;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center p-4">
      {/* Navbar with Logo, Copy Button, and Dark Mode Toggle */}
      <Navbar noteContent={noteContent} />

      {/* Main content area, adjusted to account for fixed Navbar */}
      <main className="flex-grow w-full flex justify-center items-start pt-28 pb-4">
        {/* Notepad Container */}
        <div className="w-[min(100%,_700px)] max-w-[70%] lg:max-w-[60%] mx-auto p-6 rounded-lg bg-card relative">
          {/* Textarea */}
          <Textarea
            ref={textareaRef}
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
            placeholder="Start typing your notes here..."
            className="w-full h-64 resize-none font-poppins text-xl p-4
                       bg-secondary
                       text-foreground dark:text-white
                       placeholder:text-muted-foreground
                       focus:outline-none focus:ring-0 focus:border-none
                       border-none"
            style={{ background: 'transparent' }}
          />
        </div>
      </main>

      {/* --- Footer Section --- */}
      {isClient && ( // Only render footer content on the client side after hydration
        <footer className="w-full py-3 mt-auto flex justify-center items-center">
          <div className="flex justify-between items-center w-[min(100%,_1600px)] max-w-[95%] lg:max-w-[95%] text-xs text-gray-500 font-poppins">
            <span>Words: {wordCount} | Characters: {charCount}</span>
            {lastEdited && <span>Last edited: {lastEdited}</span>}
          </div>
        </footer>
      )}
    </div>
  );
}