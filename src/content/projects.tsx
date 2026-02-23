import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import inflation from './inflation.ts';
export const PROJECTS = [
  {
    id: 'karaoke-create',
    title: 'Karaoke Create',
    shortDesc: 'AI-powered Karaoke Creation App',
    date: '2026',
    techStack: ['AI', 'React', 'Typescript', 'Python', 'Flask'],
    aiModels: ['Qwen3-ASR', 'Qwen3-ForcedAligner', 'ACE-Step'],
    github: [
      'https://github.com/rsegrest/karaoke-create'],
    // live: 'https://karaoke-create.vercel.app/',
    live: '',
    longDesc: `
      Make a karaoke version of any song!

      Upload a song (with vocals) and lyrics, and the app will create a karaoke version of the song.

      This app uses three open source AI models:
      * ACE-Step v1.5 to remove the vocals from the song
      * Qwen3-ASR (Automatic Speech Recognition) to transcribe the lyrics
      * Qwen3-ForcedAligner to add timestamps to each word in the set of lyrics, allowing the Karaoke display to highlight which word the singer should sing next.
    `
  },
  {
    id: 'inflation-calculator',
    title: 'Inflation Calculator API & GUI',
    shortDesc: 'Flask API backend and React frontend for calcuating the impacts of inflation.',
    date: '2023 - Present',
    techStack: ['React', 'Typescript', 'Bootstrap', 'Python', 'Flask'],
    github: [
      'https://github.com/rsegrest/inflation-calculator-gui',
      'https://github.com/rsegrest/inflation-calculator-api'],
    live: 'https://inflation-calc-gui.vercel.app/',
    longDesc: 'inflation'
    // (<Markdown remarkPlugins={[remarkGfm]}>{inflation}</Markdown>)
  },
  {
    id: 'asteroids',
    title: 'Asteroids',
    shortDesc: 'A classic Asteroids game built with HTML5 Canvas and vanilla JavaScript.',
    date: '2023, updated 2026',
    techStack: ['TypeScript', 'p5.js'],
    github: 'https://github.com/rsegrest/asteroids-p5-ts',
    live: 'https://asteroids-p5-ts.vercel.app/',
    longDesc: `
      This is an implementation of the ground-breaking arcade game, ***Asteroids***, simulating the signature look of the vector-based game.
If you are too young to remember, the original arcade version of Asteroids came out in 1979, and was a huge hit, helping to create the huge market for arcade games (and home console games) that followed in the early 1980s.

The arcade version used a vector display to create the graphics (instead of the pixelated raster / bitmap graphics that nearly all games used afterward). It expanded on the concept of the 1962 game ***Spacewar!***, one of the very first (non-commercial) videogames, where two Asteroids-style space ships fought each other.

> _Spacewar!_ was a novelty for nerds that worked on computers in laboratories and universities, before most people had ever seen a computer or videogame.

Everything in ***Asteroids*** was rendered as white outlines on a black screen. The graphics were generated using an electron beam gun that took a list of points and drew all of the lines from one point to the next to create the Asteroid shape. It would then move to the next shape, and draw that one, along with the player ship, bullets, and flying saucers.

The beam could only draw one line at a time, but it did it incredibly fast, and each line glowed for **almost** long enough for the beam gun to come back around to draw the next frame-- as a result, there was a bit of flicker in between the drawing cycles.

I simulated this flicker by only drawing each shape for 2 out of every 3 frames. To be super-accurate, I could separate all of the lines into three sets and rotate which set is drawn per frame, but it would look pretty much the same (since it happens too quickly to look at the whole field in a fraction of a second).

### Potential Improvements

Add an "attract screen" or sequence, like what you see in the arcades, showing the title of the game, a high score board, and a short demo of the gameplay.

I could also create some sort of database to save and display high-scores.

Of course, from there you could add modern graphics, various enhancements, multiplayer modes, or you could even have an expanded, scrolling playfield, making it a massively-multiplayer game, and could add new enemies, loot, obstacles, and player progression.

### Bonus Feature: SVG Parser

As an experiment, I added support function for parsing and displaying SVG primitives, so I can draw shapes in ***Adobe Illustrator*** (or the open source application ***Inkscape***) save them as .svg files, and then load them into p5.js.

The code could easily be used to create old-school vector graphics artwork, or implement other early-1980s games that used vector graphics displays (see ***Star Wars: The Arcade Game***, ***Omega Race***, and the 1982 ***Vectrex*** console).
    `
  },
  {
    id: 'motion-and-tween',
    title: 'Motion and Tween Library',
    shortDesc: 'A motion library implementing tweening algorithms for animation of objects.',
    date: '2025 - Present',
    techStack: ['Typescript', 'NPM'],
    github: 'https://github.com/rsegrest/motion-and-tween',
    live: 'https://www.npmjs.com/package/motion-and-tween',
    longDesc: `
      
This library and the ***es-vector-math*** library were the first NPM libraries I published.

My first foray into web application programming was as a graphic designer, working in the wake of the Y2K bug and Dot-com boom and bust.

In those days, if you wanted a website that didn't just sit there boring everyone, you had to use the (somewhat dodgy) **Macromedia Flash** (later Adobe). I loved creating animated cartoons and games, and learned "ActionScript" to manipulate the graphics and animations on the Flash timeline, as was the style at the time.

Robert Penner's book ***Programming Macromedia Flash MX*** came out in 2002, and showed me the math behind linear interpolation along different types of mathematic curves to add character to the movements of sprites on the screen.

Around this time, I decided to go back to school and get a Computer Science degree, and a Modeling & Simulation master's degree-- this book may have been a big factor in my decision.

I still have a copy of this book, and the concepts still hold up, even though the code is hopelessly obsolete (ActionScript 1.0).

So I wrote a library gives all of the same functionality outlined in that book in **TypeScript**, exported in **common JS** with **types**, that supports motion and tweening of any sort of JavaScript object.

Tested with **p5.js** animation.

The library includes the following tweening algorithms:

* Linear
* Quadratic
* Cubic
* Quartic
* Quintic
* Exponential
* Circular
* Sinusoidal

All (except linear) have the option to "EaseIn", "EaseOut", or "EaseInOut".
    `
  },
  {
    id: 'es-vector-math',
    title: 'ES (ECMAScript) Vector Math Library',
    shortDesc: 'A library for performing 2D and 3D vector math operations, available on NPM.',
    date: '2025 - Present',
    techStack: ['Typescript', 'NPM'],
    github: 'https://github.com/rsegrest/es-vector-math',
    live: 'https://www.npmjs.com/package/es-vector-math',
    longDesc: `
      ## Overview
      The first library I published on NPM, built to support the ***Motion and Tween Library***. It provides 2D and 3D vector math operations.
    `
  },
];
export default PROJECTS;