<h1 align="center">ShadowPad 🌘</h1>

**ShadowPad** is a sleek, minimalist, and highly functional notepad web application designed for **distraction-free note-taking**. Built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**, it offers a seamless user experience with a focus on dark mode aesthetics and essential features.

## ✨ Features

  * **Dark Mode by Default (with Single-Click Toggle)**: Enjoy a beautiful dark theme that's easy on the eyes. A single click lets you switch to a clean light mode instantly.
  * **Distraction-Free Interface**: No headers or unnecessary borders. The main focus is always on your notes.
  * **Centralized & Responsive Layout**: Your notes are always front and center, occupying 60-70% of the page width, adapting perfectly to different screen sizes.
  * **Elegant Typography**: Uses the modern and readable **Poppins** font for all text, with an increased font size for better readability.
  * **Intuitive Text Area**:
      * **Gray Placeholder Text**: Guides you to "Start typing your notes here..." in a subtle gray.
      * **Crisp Typed Text**: Your notes appear in clear white in dark mode and a contrasting dark color in light mode for excellent readability.
      * **No Borders or Shadows**: The text area itself is completely free of visual clutter.
  * **Automatic Local Storage Persistence**: Your notes are automatically saved to your browser's local storage as you type, ensuring your work is never lost on refresh or accidental closing.
  * **Debounced Saving**: Optimized saving to local storage to prevent performance issues during rapid typing.
  * **Real-time Word/Character Count**: Keep track of your writing with unobtrusive word and character counts displayed in the footer.
  * **Last Edited Indicator**: See precisely when your note was last modified, conveniently located in the footer.
  * **Sleek Navbar**: A minimalist top navigation bar featuring:
      * Your project **Logo** (currently "Inkwell" - feel free to change this to "ShadowPad" or an actual logo\!).
      * An **"Copy All"** button using a subtle icon for instant content copying.

## 🚀 Technologies Used

  * **Next.js 14 (App Router)**: A powerful React framework for building production-grade web applications.
  * **React**: The core library for building dynamic user interfaces.
  * **Tailwind CSS**: A highly customizable, utility-first CSS framework for rapid UI development.
  * **shadcn/ui**: A collection of beautifully designed, reusable components built with Radix UI and Tailwind CSS.
  * **next-themes**: For seamless theme switching between light and dark modes.
  * **lucide-react**: A comprehensive and customizable icon library.
  * **sonner**: A delightful toast library for elegant notifications.

## 📦 Getting Started

Follow these steps to get ShadowPad up and running on your local machine.

### Prerequisites

Ensure you have **Node.js (version 18 or higher)** and `npm` or `yarn` installed on your system.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/shadowpad.git # Replace with your actual repo URL
    cd shadowpad
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Initialize shadcn/ui components:**
    Make sure you've added the necessary shadcn/ui components using their CLI:

    ```bash
    npx shadcn-ui@latest add button textarea dropdown-menu # dropdown-menu is still needed for ModeToggle's internal logic, even if not directly visible
    npx shadcn-ui@latest add sonner # For the toast notifications
    ```

### Running the Development Server

1.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and navigate to: `http://localhost:3000`

## 🛠️ Customization

  * **Logo**: Update the `[Logo]` placeholder text (currently "Inkwell") in `components/navbar.tsx` to "ShadowPad" or integrate your preferred logo component/image.
  * **Colors**: Personalize the application's color scheme by modifying your `tailwind.config.ts` file.
  * **Fonts**: Change the application's typography by adjusting font imports in `app/layout.tsx` and configurations in `tailwind.config.ts`.
  * **Notepad Width**: Fine-tune the notepad's width by adjusting the `max-w-[70%] lg:max-w-[60%]` classes in `app/page.tsx`.

## 🙏 Contributing

Your contributions are welcome\! Feel free to open issues to report bugs or suggest new features, or submit pull requests with your improvements.

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
