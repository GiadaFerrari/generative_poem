# Generative Poem
## Concept
The idea behind my final project is to create an interactive program that will calculate, modify and show a generated poem based on the data that each user isgoing to input.
The idea merges the use of APIs (which I use to fetch different poems to use as templates for the personalised poem generation), with a Javascript library called Rita.js, which allows the programmer to easily manipulate text while respecting grammar rules, grammatically correct particles, etc.
By personalizing each piece based on the different user I want the user to feel involved inthecreation of a pieceof art, and not just any art,but poetry, one that the newer generations struggle to see beauty or interest in,for it can be easily perceived as an abstract and "archaic" art representation.
The use of rita.js anad the computers logic and randomness creates an imperfect piece of poetry which can make the user smile for its randomness and for the slight sense of nonsense that it can convey.
This is meant to make the user reflect on the fallibility of computers, AI etc, and how the human touch (represented in my project by the templates)are the only thing that is keeping the poem from being utter nonsense.
## Challenges
Working on this project my method changed drastically over the course of my iterations.
My first approach relied on the <template> html tag, which allowed me to create templates that were reaadable by js but not rendered by the browser.
Using APIs such as Corpora and Wordnik I could then manually label the particles I wanted to dynamically change such adjectives, Name, nouns etc and set my script to dynamically fill out the template, each time with a different combination of words.
While this proved to work, manually creating an elevated number of templates proved time consuming and not an efficient way of working.
This is where I started contemplating using Rita.js as a different approach for the same purpose. 
This allowed me to create an API basedon already existing poems, which are then put to form an array of words, and an array of parts od speech that are recongnised by the computer.
At first I tried changing every single word with a different one that only shared the same part of speech role. This resulted in barely leggible creations that hardly resembled my goal of a personalised computer generated poem.
I then decided to only select a couple of different parts of speech and change those, while leaving the rest of template unchanged.
This highly improved the result, but I felt likeI could take it one step further. 
I then decided to only use (whenever possible) nouns that have a similar sound to the name (or last name depending on the cases) of each user. This helped create a better sense of cohesion and even a better musicality to the text.
