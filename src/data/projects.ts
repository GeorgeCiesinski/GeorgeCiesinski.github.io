/**
 * Portfolio project catalog and helpers for the home grid and detail routes.
 */

export type ProjectSection = "web" | "apps";

/** A single screenshot or GIF shown in the project detail carousel. */
export interface ProjectSlide {
  src: string;
  caption: string;
}

export interface Project {
  /** URL segment for `/projects/:slug`. */
  slug: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  /** Home-grid thumbnail; distinct from detail `slides`. */
  thumbnail: string;
  /** Optional outbound links shown on the detail page. */
  github?: string;
  demo?: string;
  slides: ProjectSlide[];
}

export const projects: Project[] = [
  {
    slug: "poke-guesser",
    title: "Poke-guesser Bot",
    category: "Back-end",
    description:
      "A Discord bot game where players guess Pok\u00e9mon from images. Tracks scores on a leaderboard and supports multilingual reveals via PokeAPI.",
    tech: ["JavaScript", "discord.js", "pokeapi.co", "PostgreSQL", "Docker"],
    thumbnail: "/img/front-page/pokebot-thumb.png",
    github: "https://github.com/GeorgeCiesinski/poke-guesser-bot",
    slides: [
      {
        src: "/img/poke-bot/explore.png",
        caption:
          "The !explore admin command generates a new pockemon for users to catch",
      },
      {
        src: "/img/poke-bot/catch.png",
        caption:
          "The $catch player command allows players to guess a pokemon name.",
      },
      {
        src: "/img/poke-bot/leaderboard.png",
        caption: "The $leaderboard command shows the top 20 players.",
      },
      {
        src: "/img/poke-bot/reveal.png",
        caption:
          "The !reveal admin command reveals the pokemon if players are unable to guess it. The pokemon name is shown in multiple languages.",
      },
    ],
  },
  {
    slug: "todo-web-app",
    title: "Todo Web App",
    category: "Front-end",
    description:
      "A Webpack-powered todo app with multiple lists, optional checklists, theme switching, and a responsive side menu that collapses to a hamburger on small screens.",
    tech: ["HTML", "CSS", "SASS", "JavaScript", "Webpack"],
    thumbnail: "/img/front-page/todo-thumb.png",
    github: "https://github.com/GeorgeCiesinski/todo-list",
    demo: "https://georgeciesinski.github.io/todo-list/",
    slides: [
      {
        src: "/img/todo-app/hamburger.gif",
        caption:
          "Side-menu seamlessly switches to hamburger menu on smaller screens",
      },
      {
        src: "/img/todo-app/checklist.gif",
        caption: "Optional checklist allows for more detailed task management",
      },
      {
        src: "/img/todo-app/checklist-item.gif",
        caption: "Adding and removing checklist items is fast and easy",
      },
      {
        src: "/img/todo-app/delete-and-create.gif",
        caption:
          "You can delete or create multiple todo lists and switch between them",
      },
      {
        src: "/img/todo-app/theme.gif",
        caption:
          "Changing the color theme is easy and font adjusts automatically to maintain contrast",
      },
    ],
  },
  {
    slug: "library-app",
    title: "Library App",
    category: "Front-end",
    description:
      "Track books you are reading or have read. Add titles by ISBN for automatic cover lookup, toggle read status, and switch light/dark mode.",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    thumbnail: "/img/front-page/library-thumb.png",
    github: "https://github.com/GeorgeCiesinski/library-app",
    demo: "https://georgeciesinski.github.io/library-app/",
    slides: [
      {
        src: "/img/library-app/add-book.gif",
        caption:
          "Add books with ISBN so that the title and cover is added automatically",
      },
      {
        src: "/img/library-app/toggle-mode.gif",
        caption:
          "The app also detects your OS settings and adjusts the mode automatically",
      },
      {
        src: "/img/library-app/toggle-read.gif",
        caption:
          "Toggle the read/unread status of the books in the library app",
      },
      {
        src: "/img/library-app/link-to-ol.gif",
        caption:
          "Clicking the ISBN link takes you straight to the book info on Open Library",
      },
      {
        src: "/img/library-app/remove-book.gif",
        caption:
          "Books can be removed if you change your mind about reading them",
      },
    ],
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard",
    category: "Front-end",
    description:
      "An admin UI with side and top navigation, live search filtering, and a responsive layout built with CSS grid and flexbox.",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    thumbnail: "/img/front-page/admin-dashboard-thumb.png",
    github: "https://github.com/GeorgeCiesinski/admin-dashboard",
    demo: "https://georgeciesinski.github.io/admin-dashboard/",
    slides: [
      {
        src: "/img/admin-dashboard/Dashboard.png",
        caption:
          "Side-menu navbar and top menu with easily accessible admin utilities",
      },
      {
        src: "/img/admin-dashboard/search-bar.gif",
        caption:
          "Searchbar hides pages that do not match the search terms with every key stroke",
      },
      {
        src: "/img/admin-dashboard/responsive.gif",
        caption:
          "With a combination of grid and flexbox, page elements readjust to fit every screen size",
      },
    ],
  },
  {
    slug: "pixel-sketchpad",
    title: "Pixel Sketchpad",
    category: "Front-end",
    description:
      "A pixel drawing tool with color selection, grid size controls, and a background eraser that preserves drawings when the canvas color changes.",
    tech: ["HTML", "CSS", "SASS", "JavaScript"],
    thumbnail: "/img/front-page/pixel-thumb.png",
    github: "https://github.com/GeorgeCiesinski/pixel-sketchpad",
    demo: "https://georgeciesinski.github.io/pixel-sketchpad/",
    slides: [
      {
        src: "/img/pixel-sketchpad/pixel-sketchpad.png",
        caption:
          "Tool layout contains color selection, tools, and grid size controls",
      },
      {
        src: "/img/pixel-sketchpad/background.gif",
        caption:
          "Background color can be changed without affecting drawing. Eraser turns cells into background cells.",
      },
    ],
  },
  {
    slug: "flask-api",
    title: "Flask RESTful API",
    category: "Back-end",
    description:
      "A Flask-RESTful API for registering users, authenticating, and creating/retrieving/deleting stores and items, backed by SQLite and deployable on Heroku.",
    tech: ["Python", "Flask", "Flask-RESTful", "SQLite", "Heroku"],
    thumbnail: "/img/front-page/flask-api-thumb.png",
    github: "https://github.com/GeorgeCiesinski/FlaskRESTful-for-Heroku",
    slides: [
      {
        src: "/img/flask-api/user-auth-bad.png",
        caption: "Auth fails if bad user credentials are posted.",
      },
      {
        src: "/img/flask-api/user-register.png",
        caption: "Register new users using post.",
      },
      {
        src: "/img/flask-api/user-auth-good.png",
        caption: "Auth succeeds if good user credentials are posted.",
      },
      {
        src: "/img/flask-api/store-post.png",
        caption: "New stores can easily be posted.",
      },
      {
        src: "/img/flask-api/item-post.png",
        caption: "New items can be posted to existing stores.",
      },
      {
        src: "/img/flask-api/stores-get.png",
        caption: "All existing stores and items can be retrieved with get.",
      },
      {
        src: "/img/flask-api/item-delete.png",
        caption: "Items can be deleted from database.",
      },
      {
        src: "/img/flask-api/flask-logs.png",
        caption: "Snapshot of console output as requests are made.",
      },
    ],
  },
  {
    slug: "social-media",
    title: "Social Media Analysis",
    category: "Data Analysis",
    description:
      "Scrapes Reddit posts, stores data in PostgreSQL, and plots sentiment analysis charts including timelines, pie charts, and upvote distributions.",
    tech: [
      "Python",
      "PRAW",
      "TextBlob",
      "PostgreSQL",
      "SQLAlchemy",
      "matplotlib",
    ],
    thumbnail: "/img/front-page/sentiment-thumb.png",
    github: "https://github.com/GeorgeCiesinski/social-media-analysis",
    slides: [
      {
        src: "/img/social-media/reply-timeline.png",
        caption:
          "Line graph showing the timeline of comments and upvotes the post received.",
      },
      {
        src: "/img/social-media/sentiment-pie.png",
        caption: "Pie chart showing the sentiment distribution for the post.",
      },
      {
        src: "/img/social-media/sentiment-timeline.png",
        caption: "Scatter plot showing sentiment distribution over time.",
      },
      {
        src: "/img/social-media/total-comments-and-replies.png",
        caption:
          "Bar graph showing how many comments fall into different sentiment levels and how many replies they have.",
      },
      {
        src: "/img/social-media/total-comments-and-upvotes.png",
        caption:
          "Bar graph showing which sentiment levels the upvoted comments fell into.",
      },
      {
        src: "/img/social-media/logs.png",
        caption:
          "Snapshot of the logs created from scraping and plotting a Reddit post.",
      },
    ],
  },
  {
    slug: "text-script",
    title: "Text-Script",
    category: "App",
    description:
      "A desktop expansion tool that pastes textblock templates from keyboard shortcuts into any text field \u2014 built to speed up customer email responses.",
    tech: ["Python", "Pynput", "Pyperclip"],
    thumbnail: "/img/front-page/text-script-thumb.png",
    github: "https://github.com/GeorgeCiesinski/text-script",
    slides: [
      {
        src: "/img/text-script/email.gif",
        caption:
          "Typing in a shortcut will automatically paste the textblock into the text input.",
      },
      {
        src: "/img/text-script/console-window.png",
        caption:
          "App stats and shortcuts can be viewed in the console which can be minimized and kept in the background.",
      },
    ],
  },
  {
    slug: "image-filters",
    title: "Image Filters",
    category: "App",
    description:
      "A desktop image filter app using OpenCV and Tkinter, with sliders for adjustments, resizable preview, save, and logging.",
    tech: ["Python", "OpenCV", "TKinter"],
    thumbnail: "/img/front-page/image-filters-thumb.png",
    github: "https://github.com/GeorgeCiesinski/image-filters",
    slides: [
      {
        src: "/img/image-filters/opened-image.PNG",
        caption:
          "This is the GUI layout for the application once an image is opened.",
      },
      {
        src: "/img/image-filters/open-image.gif",
        caption: "The image can be opened using the File Menu.",
      },
      {
        src: "/img/image-filters/modify-image.gif",
        caption: "Various sliders can be used to modify the image.",
      },
      {
        src: "/img/image-filters/resize-window.gif",
        caption:
          "The window can be resized by dragging the edges and the image will adjust accordingly.",
      },
      {
        src: "/img/image-filters/save-image.gif",
        caption: "The altered image can be saved using the File Menu.",
      },
      {
        src: "/img/image-filters/logs-directory.PNG",
        caption:
          "This app stores logs in the log folder and can be accessed using the File Menu.",
      },
    ],
  },
];

/**
 * Looks up a project by its route slug.
 *
 * @param slug - URL slug from `/projects/:slug`.
 * @returns Matching project, or `undefined` if unknown.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
