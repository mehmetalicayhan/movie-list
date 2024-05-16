[Movie List App](https://movie-list-beige.vercel.app/)
==============
This is a simple movie list app that allows users to search for movies and show details about them. The app uses the [OMDB API](http://www.omdbapi.com/) to get the movie data.

The app has the following features:
- Search for movies by title
- View movie details

The app is built using the following technologies:
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [React Router Dom](https://reactrouter.com/en/6.23.1)
- [React Query](https://react-query.tanstack.com/)
- [Shadcn UI](https://ui.shadcn.com/)


### Deploy
- This app deployed via [Vercel](https://vercel.com/) 
- You can view this app from [Live demo](https://movie-list-beige.vercel.app/) link


### Running the app locally
1. Before you run the app, you need to get an API key from OMDB API and add it to the .env file in the root directory of the project. 

#### Example:
----------------
```
VITE_API_KEY=your_api_key
VITE_API_URL=http://www.omdbapi.com/
```
2. Install dependencies
```
npm install
```

### For starting application on browser in development mode
```
npm run dev
```
The app will be running on http://localhost:5173


### Compiles and minifies for production and preview the app
```
npm run preview
```
You can preview the app on http://localhost:4173

### Compiles and minifies for production
```
npm run build
```



