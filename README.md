Anime Showcase Website

Description

This is a React-based website showcasing the three best animes: EightySix, Re:Zero, and Monogatari. The homepage displays an image for each anime, and clicking an image navigates to a detail page that includes the anime's synopsis and three of its best characters. Character statuses are initially hidden as spoilers and can be revealed by clicking.

Features

Homepage: Displays anime images and names.

Anime Detail Page: Shows a synopsis and three characters for each anime.

Character Status Spoiler System: Initially hidden, revealed upon click.

Responsive Design: Optimized for different screen sizes.

Smooth Hover Effects: Animations on character and anime images.

Technologies Used

React (with React Router for navigation)

Vanilla CSS (for styling)

Project Structure

StartingReact/
│-- public/                 # Stores images for animes and characters
│-- src/
│   │-- components/
│   │   │-- Home.js         # Homepage component
│   │   │-- AnimeDetail.js  # Anime details component
│   │-- App.js              # Main app file with routes
│   │-- index.js            # Entry point
│   │-- styles/
│   │   │-- Home.css        # Styles for Home component
│   │   │-- AnimeDetail.css # Styles for AnimeDetail component
│-- package.json            # Project dependencies
│-- README.md               # Project documentation

How It Works

Homepage: Displays the top three animes with their images.

Navigation: Clicking an anime image leads to its detail page.

Detail Page: Shows a synopsis and character list with images.

Spoiler Feature: Initially, character statuses are hidden and labeled "SPOILER! Click to reveal." Clicking reveals the character's life status.

