import MockLMS from "../assets/MockLMS.mp4";
import MovieCenter from "../assets/MovieCenter.mp4";
import DnDGenerator from "../assets/DnDGenerator.mp4";
import BookTracker from "../assets/BookTracker.mp4";

const VideoData = [
  {
    name: "Mock Learning Management System",
    description:
      "Mock Online Learning System and Course management system that displays courses with rosters (with add and edit features using a RESTful         api), schedule, and home page content using ReactJS with React Router and React-Bootstrap components.",
    source: MockLMS,
    github: "https://github.com/btoporek/Mock-Online-Course-Management-Website",
  },
  {
    name: "Movie Center Reviews and Ratings",
    description:
      "A ReactJS single page application that displays movie title and information that users can interact with by rating and leaving reviews, read other reviews, and access movie trivia through IMDB.",
    source: MovieCenter,
    github: "https://github.com/btoporek/Movie-Review-App",
  },
  {
    name: "Book Tracking App",
    description:
      "ReactJS CRUD app for keeping track of reading list using a RESTful api with add, edit and delete features.",
    source: BookTracker,
    github: "https://github.com/btoporek/Book-Tracker-React-CRUD-App",
  },
  {
    name: "DnD Party Generator",
    description:
      "A single page application using JQuery and a RESTUful api for creating, editing, and deleting members of a DnD party. Options include adding teams, team members, and functionalities to add, edit, or delete.",
    source: DnDGenerator,
    github: "https://github.com/btoporek/JQuery-DnD-Party-Maker",
  },
];

export default VideoData;
