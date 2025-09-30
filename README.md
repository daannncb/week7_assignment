User Stories
🐿️ As a user, I want the app to be fast and responsive so that I can browse without delays.
🐿️ As a user, I want to read and add posts so that I can interact with the community.
🐿️ As a user, I want a simple and intuitive form for creating new posts so that the process feels effortless.
🐿️ As a user, I want to view multiple pages so that I can easily find the content I’m looking for.
🐿️ As a developer, I want to build a database schema and seed the database with realistic data for accurate testing and development.
🐿️ As a user, I want to be able to view all of the posts within the database so that I can explore all available content.
🐿️ As a developer, I want to use .map() to display all posts to efficiently display fetched data.
🐿️ As a developer, I want to poll my database to render any new data stored in there efficiently.
Requirements
🎯 Create a client using React.
🎯 Use Express to create your server, using both GET and POST endpoints.
🎯 Build a React form for users to create posts.
🎯 Create multiple pages using React Router.
🎯 Design a database schema, and seed the database with some realistic data.
🎯 Use SQL to retrieve posts from the database in your Express server.
🎯 Display all posts using .map().
🎯 Use an interval and useEffect() to poll your database.

#### reflections

🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?
Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

I had a lot of plans for this week's assignment, and leapt into getting a pair of SQL tables, and one to merge them together. This, I think, proved to be a huge mistake, resulting in an ungodly volume of refactoring every time I thought a little deeper about how certain things would work. I spent a whole lot of time getting the `/add-user` and `/add-movies` routes functional. Initally, Bertie did try to warn me about how to keep track of the user between page reloads, and I landed on sessionStorage, just for testing simplicity more than anything else. For a proper app, localStorage would be more suited, but being able to close the page to clear sessionStorage saved me a decent chunk of time.

The major headaches with those two routes were:

1. Keeping the user after the reload, so I had to go and keep that in session storage.
2. What if the user already existed in the database? Well, that doesn't work very well, so I had to stop that from errorring out, which I did by querying the database before POSTing the new username.
3. It's no use just adding movie titles to my table, they need to be alongside the user in the user_movies table. I did fix this, which I'm pleased with, but man, it's a huge mess of nonsense. I knew I could use the query result from fixing the add-user route, and used it like this:
   AddMoviesForm.jsx gets the sessionStorage userName string, sends that over to the server along with movieTitle from the form submit. I then query the database for user_id WHERE username = sessionStorage User, declare that by getting the user_id property from the query result - alongside adding the movie to the movie table, RETURNING the value of that one, and as I write this, I realise I could (probably) have done the same for username, rather than getting the property from the query result.

Look, I've had a nightmare and learned a lot along the way. I think some of this gibberish code is okay, and most of it could be refactored (and the database restructured) much more elegantly, which I may try in my free time.

Features that "work": adding a user, and adding movies to that user.

Features that don't work: viewing movies; this is just placeholder value "Dan" for testing. I was losing patience in a big way and decided my options were re-write this nonsense or submit as is.

Despite the nonsense, I do feel like this has worked as a learning exercise. I think I should have spoken to a staff member about my plan before setting off on this journey. I think I shoehorned one table too many, and it would have been easier to duplicate movie titles to assign multiple users (janky, but valid(?)).

I've also managed to upload my .env to github despite that being firmly in my .gitignore. My quest to undo this has resulted in me deleting .env with git rm .env, but it shouldn't effect the deployment, so goodbye .env.

## Further ideas:

link to group project Hot Takes: this used TMDb, would be a cool feature to grab Hot Takes from there

Autofill forms based on "is movie title in TMDb list" - stop users entering whatever data they want into database - ID by # and render title from that, rather than storing strings

## References

Conditional rendering
https://react.dev/learn/conditional-rendering

Generating tables in HTML
https://stackoverflow.com/questions/48015812/react-render-data-in-a-table
https://www.valentinog.com/blog/html-table/

SQL keys
https://www.cockroachlabs.com/blog/what-is-a-foreign-key/

(26.9.25) I chose to make a merged table of my user and movie data for easier querying
(30.9.25) this proved to be a huge mistake

https://chipcullen.com/how-to-post-data-with-fetch-api/

https://www.robinwieruch.de/local-storage-react/

https://dev.to/darkmavis1980/the-returning-clause-in-sql-11k2
https://www.tutorialspoint.com/javascript-get-row-count-of-an-html-table
