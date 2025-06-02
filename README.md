# LinguaLink - Learn Moroccan Dialect through Stories

LinguaLink is a web application that helps non-native Arabic speakers learn Moroccan Darija through short, engaging stories with parallel text translations, audio narrations, vocabulary explanations, and interactive exercises.

## Project Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation Steps

1. **Extract the zip file** to your desired location

2. **Open a command prompt or terminal**

3. **Navigate to the project directory**
   ```
   cd path/to/linguaLink
   ```

4. **Install dependencies**
   ```
   npm install
   ```

5. **Start the development server**
   ```
   npm run dev
   ```

6. **Access the website**
   - Open your browser and go to: http://localhost:5173
   - The website will be available at this address while the development server is running

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Project Structure

- `/src` - Source code
  - `/assets` - Images and other static assets
  - `/components` - Reusable UI components
    - `/common` - Shared components (AudioPlayer, Quiz, etc.)
    - `/layout` - Layout components (Header, Footer)
    - `/story` - Story-specific components (VocabularySidebar, etc.)
  - `/pages` - Page components (Home, StoriesLibrary, etc.)
  - `/styles` - CSS files
  - `/utils` - Utility functions
  - `App.tsx` - Main application component
  - `main.tsx` - Application entry point

## Features

- Responsive design for all devices
- Interactive story library with filtering
- Audio player for story narrations
- Tabbed interface for parallel text (Darija, MSA, English)
- Interactive quizzes
- Vocabulary sidebar with word explanations
- User dashboard with progress tracking
- About, Pricing, Blog, and Contact pages

## Notes

This is a frontend implementation with mock data. For a production version, you would need to:
1. Connect to a backend API for real data
2. Implement actual user authentication
3. Set up a database for storing user progress and content

## License

This project is for demonstration purposes only.
