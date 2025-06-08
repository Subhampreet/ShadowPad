// components/navbar.tsx
'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRef } from 'react';
import { Clipboard } from 'lucide-react'; // Import Clipboard icon
import { ModeToggle } from './mode-toggle';

interface NavbarProps {
  noteContent: string;
}

export function Navbar({ noteContent }: NavbarProps) {
  const hiddenTextareaRef = useRef<HTMLTextAreaElement>(null);

  const handleCopyFromNavbar = () => {
    if (hiddenTextareaRef.current) {
      hiddenTextareaRef.current.value = noteContent;
      hiddenTextareaRef.current.select();
      navigator.clipboard.writeText(noteContent);
      toast.success('Note copied to clipboard!');
    }
  };

  return (
    <nav className="w-full flex justify-between items-center p-4 bg-background fixed top-0 left-0 z-20">
      {/* Removed: border-b border-border from here for a borderless Navbar */}

      {/* Logo */}
      <div className="flex items-center ml-4">
        <span className="font-poppins text-xl font-bold text-primary">
          /shadowpad
        </span>
      </div>

      {/* Navigation and Controls */}
      <div className="flex items-center space-x-2 mr-4"> {/* Reduced space-x for tighter icons */}
        {/* Hidden textarea for copying */}
        <textarea
          ref={hiddenTextareaRef}
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
          readOnly
        />

        {/* Copy Text Button - Sleek, icon-only */}
        <Button
          onClick={handleCopyFromNavbar}
          variant="ghost" // Use 'ghost' variant for a sleek, transparent button
          size="icon" // Make it a square icon button
          className="text-foreground hover:bg-accent hover:text-accent-foreground" // Optional: custom hover styles
        >
          <Clipboard className="h-5 w-5" /> {/* Clipboard icon */}
          <span className="sr-only">Copy All Notes</span> {/* For accessibility */}
        </Button>

        {/* Dark Mode Toggle - Sleek, icon-only */}
        <ModeToggle />
        {/* ModeToggle component already uses Button with size="icon" and variant="outline" by default from shadcn.
            We will change ModeToggle's internal button variant to 'ghost'.
            See instructions below for updating ModeToggle.tsx
        */}
      </div>
    </nav>
  );
}