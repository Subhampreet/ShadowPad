<h1 align="center">ShadowPad 🌘</h1>

**ShadowPad** is a sleek, minimalist, and highly functional notepad web application designed for distraction-free note-taking. Built with **Next.js**, **Tailwind CSS**, and **shadcn/ui**, it offers a seamless user experience with a focus on dark mode aesthetics and essential features.

## ✨ Features

  * **Dark Mode by Default (with Toggle)**: A beautiful dark theme that's easy on the eyes, with a quick toggle to switch to a clean light mode.
  * **Distraction-Free Interface**: No headers or unnecessary borders. Just your notes.
  * **Centralized & Responsive Layout**: Your notes are always front and center, occupying 60-70% of the page width, adapting perfectly to different screen sizes.
  * **Elegant Typography**: Uses the modern and readable **Poppins** font for all text.
  * **Intuitive Text Area**:
      * **Gray Placeholder Text**: Guides you to "Start typing your notes here..." in a subtle gray.
      * **Crisp White Typed Text**: Your actual notes appear in clear white for excellent readability in dark mode, and a contrasting dark color in light mode.
      * **No Borders or Shadows**: The text area itself is completely free of visual clutter.
  * **Instant Copy Functionality**: A prominent "Copy All" button in the navigation bar allows you to quickly copy your entire note content to the clipboard.
  * **Sleek Navbar**: A minimalist top navigation bar featuring:
      * Your project **Logo** (placeholder is "Inkwell" - you can change this to "ShadowPad" or an actual logo\!).
      * A **"Copy All"** button using a subtle icon.
      * A **single-click dark/light mode toggle**.

## 🚀 Technologies Used

  * **Next.js 14 (App Router)**: A React framework for production-grade applications, providing server-side rendering and client-side navigation.
  * **React**: The core library for building user interfaces.
  * **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
  * **shadcn/ui**: A collection of beautiful, reusable components built with Radix UI and Tailwind CSS.
  * **next-themes**: For simple and efficient dark mode management.
  * **lucide-react**: A lightweight and customizable icon library.
  * **sonner**: A delightful toast library for notifications.

## 📦 Getting Started

Follow these steps to get ShadowPad up and running on your local machine.

### Prerequisites

Make sure you have Node.js (version 18 or higher) and npm/yarn installed.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/shadowpad.git # Assuming your repo is named 'shadowpad'
    cd shadowpad
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Initialize shadcn/ui components:**
    Ensure you've run the shadcn/ui CLI commands to add the necessary components:

    ```bash
    npx shadcn-ui@latest add button textarea dropdown-menu # dropdown-menu is still needed for ModeToggle's dropdown logic
    npx shadcn-ui@latest add sonner # For the toast notifications
    ```

### Running the Development Server

1.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

2.  Open your browser and visit: `http://localhost:3000`

## 🛠️ Customization

  * **Logo**: Replace the `[Logo]` placeholder text (currently "Inkwell") in `components/navbar.tsx` with "ShadowPad" or your actual logo component/image.
  * **Colors**: Customize the `tailwind.config.ts` file to change the color palette according to your preferences.
  * **Fonts**: Modify `app/layout.tsx` and `tailwind.config.ts` to change the font if Poppins isn't your preference.
  * **Notepad Width**: Adjust the `max-w-[70%] lg:max-w-[60%]` classes in `app/page.tsx` to change the notepad's width.

## 🙏 Contributing

Feel free to open issues or submit pull requests if you have ideas for improvements or find any bugs\!

## 📄 License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
