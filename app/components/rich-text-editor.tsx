'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Heading } from '@tiptap/extension-heading';
import { ListItem } from '@tiptap/extension-list-item';
import { BulletList } from '@tiptap/extension-bullet-list';
import { OrderedList } from '@tiptap/extension-ordered-list';
import { Blockquote } from '@tiptap/extension-blockquote';
import { CodeBlock } from '@tiptap/extension-code-block';
import { Link } from '@tiptap/extension-link';
import { Image } from '@tiptap/extension-image';
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Link as LinkIcon,
  Image as ImageIcon,
  Undo,
  Redo,
  Eraser,
  HardDrive,
  SquareCode,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import React from 'react';

interface RichTextEditorProps {
  content: string;
  onUpdate: (htmlContent: string) => void;
  editable?: boolean;
}

// Define the structure for a toolbar item
interface ToolbarItem {
  icon: React.ElementType;
  tooltip: string;
  action: (editor: any) => void; // Action now explicitly takes editor
  isActive?: (editor: any) => boolean;
  canExecute?: (editor: any) => boolean;
  separatorAfter?: boolean;
}

// Toolbar button component
const ToolbarButton = ({
  icon: Icon,
  tooltip,
  action,
  isActive,
  canExecute,
  editor,
}: ToolbarItem & { editor: any }) => {
  // `editor` is now explicitly passed as a prop
  const isButtonActive = isActive ? isActive(editor) : false;
  const isDisabled = canExecute ? !canExecute(editor) : false;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onClick={() => action(editor)} // Pass editor to the action
          disabled={isDisabled}
          variant={isButtonActive ? 'secondary' : 'ghost'}
          size="icon"
        >
          <Icon className="h-4 w-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
};

// Menu Bar Component (Refactored)
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) {
      return; // cancelled
    }
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run(); // unset link
      return;
    }
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run(); // update link
  };

  const addImage = () => {
    const url = window.prompt('Image URL:');
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  // Define toolbar items
  const toolbarItems: ToolbarItem[] = [
    {
      icon: Bold,
      tooltip: 'Bold',
      action: (editor) => editor.chain().focus().toggleBold().run(),
      isActive: (editor) => editor.isActive('bold'),
      canExecute: (editor) => editor.can().chain().focus().toggleBold().run(),
    },
    {
      icon: Italic,
      tooltip: 'Italic',
      action: (editor) => editor.chain().focus().toggleItalic().run(),
      isActive: (editor) => editor.isActive('italic'),
      canExecute: (editor) => editor.can().chain().focus().toggleItalic().run(),
    },
    {
      icon: Strikethrough,
      tooltip: 'Strikethrough',
      action: (editor) => editor.chain().focus().toggleStrike().run(),
      isActive: (editor) => editor.isActive('strike'),
      canExecute: (editor) => editor.can().chain().focus().toggleStrike().run(),
    },
    {
      icon: Code,
      tooltip: 'Inline Code',
      action: (editor) => editor.chain().focus().toggleCode().run(),
      isActive: (editor) => editor.isActive('code'),
      canExecute: (editor) => editor.can().chain().focus().toggleCode().run(),
    },
    {
      icon: Eraser,
      tooltip: 'Clear Formatting',
      action: (editor) => editor.chain().focus().unsetAllMarks().run(),
      separatorAfter: true,
    },
    {
      icon: Heading1,
      tooltip: 'Heading 1',
      action: (editor) =>
        editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: (editor) => editor.isActive('heading', { level: 1 }),
    },
    {
      icon: Heading2,
      tooltip: 'Heading 2',
      action: (editor) =>
        editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: (editor) => editor.isActive('heading', { level: 2 }),
    },
    {
      icon: Heading3,
      tooltip: 'Heading 3',
      action: (editor) =>
        editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: (editor) => editor.isActive('heading', { level: 3 }),
    },
    {
      icon: List,
      tooltip: 'Bullet List',
      action: (editor) => editor.chain().focus().toggleBulletList().run(),
      isActive: (editor) => editor.isActive('bulletList'),
    },
    {
      icon: ListOrdered,
      tooltip: 'Ordered List',
      action: (editor) => editor.chain().focus().toggleOrderedList().run(),
      isActive: (editor) => editor.isActive('orderedList'),
    },
    {
      icon: Quote,
      tooltip: 'Blockquote',
      action: (editor) => editor.chain().focus().toggleBlockquote().run(),
      isActive: (editor) => editor.isActive('blockquote'),
    },
    {
      icon: SquareCode,
      tooltip: 'Code Block',
      action: (editor) => editor.chain().focus().toggleCodeBlock().run(),
      isActive: (editor) => editor.isActive('codeBlock'),
    },
    {
      icon: HardDrive,
      tooltip: 'Horizontal Rule',
      action: (editor) => editor.chain().focus().setHorizontalRule().run(),
      separatorAfter: true,
    },
    {
      icon: LinkIcon,
      tooltip: 'Add Link',
      action: () => addLink(), // Still calls the addLink function
      isActive: (editor) => editor.isActive('link'),
    },
    {
      icon: ImageIcon,
      tooltip: 'Add Image',
      action: () => addImage(), // Still calls the addImage function
      separatorAfter: true,
    },
    {
      icon: Undo,
      tooltip: 'Undo',
      action: (editor) => editor.chain().focus().undo().run(),
      canExecute: (editor) => editor.can().chain().focus().undo().run(),
    },
    {
      icon: Redo,
      tooltip: 'Redo',
      action: (editor) => editor.chain().focus().redo().run(),
      canExecute: (editor) => editor.can().chain().focus().redo().run(),
    },
  ];

  return (
    <TooltipProvider>
      <div className="flex flex-wrap gap-1 p-2 border-b border-input bg-card rounded-t-md">
        {toolbarItems.map((item, index) => (
          <React.Fragment key={index}>
            <ToolbarButton
              editor={editor} // This is the crucial fix: explicitly pass editor as a prop
              icon={item.icon}
              tooltip={item.tooltip}
              action={item.action}
              isActive={item.isActive}
              canExecute={item.canExecute}
            />
            {item.separatorAfter && (
              <Separator orientation="vertical" className="h-auto mx-1" />
            )}
          </React.Fragment>
        ))}
      </div>
    </TooltipProvider>
  );
};

const RichTextEditor = ({
  content,
  onUpdate,
  editable = true,
}: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: false,
        orderedList: false,
        blockquote: false,
        codeBlock: false,
        code: {
          HTMLAttributes: {
            class:
              'font-mono text-sm px-1 py-0.5 rounded-md bg-muted text-muted-foreground',
          },
        },
      }),
      Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
      ListItem,
      BulletList,
      OrderedList,
      Blockquote,
      CodeBlock.configure({
        HTMLAttributes: {
          class: 'bg-zinc-800 text-white rounded-md p-4 my-4 font-mono text-sm',
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class:
            'text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline underline-offset-2',
        },
      }),
      Image.configure({
        inline: true,
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-md shadow-sm my-2',
        },
      }),
    ],
    content: content,
    editable: editable,
    onUpdate: ({ editor }) => {
      onUpdate(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-xl focus:outline-none p-4 min-h-[400px] max-w-full text-foreground',
      },
    },
  });

  return (
    <div className="border border-input rounded-md shadow-lg bg-background">
      {editable && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default RichTextEditor;
