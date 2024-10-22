## Steps

#### SetUp

- npm install
- npm run dev

#### Initial Structure and Global Context

Create 3 components- name any, and render all of them in App.jsx and set up a global context.

#### Dark Theme - Initial Setup

In the context of creating a state value called 'isDarkTheme' to the opposite value when 'toggleDarkTheme' is invoked. Pass 'isDarkTheme' and toggleDarkTheme down to 'ThemeToggle'. In 'ThemeToggle', import two icons from the React Icons library(moon and sun) and create a button. When the button is clicked, invoke 'toggleDarkTheme', and display the appropriate icon based on the value of 'isDarkTheme' inside of the button.

#### Dark Theme Class

In the toggleDarkThem add logic to add and remove .dark-theme class to body element based on isDarkTheme value.

#### Dark Theme Class

Create CSS variable for the background color and text color for both dark mode and normal mode, as well as CSS variable for the dark mode transition.

```css
:root {
  /* dark mode setup */
  --dark-mode-bg-color: #333;
  --dark-mode-text-color: #f0f0f0;
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);

  --darkModeTransition: color 0.3s ease-in-out, background-color 0.3s
      ease-in-out;
}

.dark-theme {
  --textColor: var(--dark-mode-text-color);
  --backgroundColor: var(--dark-mode-bg-color);
}

body {
  transition: var(--darkModeTransition);
  background: var(--backgroundColor);
  color: var(--textColor);
}
```

#### User Prefers Dark Mode

```css
@media (prefers-color-scheme: dark) {
  :root {
    --textColor: var(--dark-mode-text-color);
    --backgroundColor: var(--dark-mode-bg-color);
  }
}
```

#### SearchForm Structure

Create a form with an input and a submit button. The input should have the following attributes: type= 'text', name ='search', placeholder='cat', and className= 'form-input search-input'. When the user submits the form, access (for now log the input value).

####Unsplash Info
Unsplash is a website that provides a large collection of high quality stock photos that are free to use. The Unsplash API is a service that allows developers to access and use UnSplash's collection of photos and related data in their own applications. The API allows developers to search, download and use the photos in a variety of ways, such as creating photo galleries for integrating them into social media applications. The UnSplash API is widely used by developers to enhance the visual content of their applications or websites.

[Unsplash Website](https://unsplash.com/)

#### Sign Up for an Unsplash Account

[Unsplash API](https://unsplash.com/developers)

In order to use the Unsplash API to fetch images for your application, we will need to sign up for an account with Unsplash. This will allow us to obtain API key that we can use to authenticate our requests.

#### Find the API key and correct URL for searching Images

- register an app
- authorization (hint : public authentication)
- search functionality (hint : search photos)

After signing up for an Unsplash account, we will need to locate our API key and the correct URL to use when searching for images using the Unsplash API. This information can be found in the API documentation provided by Unsplash.

#### Test the URL Using Thunder Client Vs Code Extension

Before implementing the API in our application, it is good practice to test the URL using a tool like Thunder Client vs VS Code Extension. This will allow us to verify that the URL is correct and that we are able to successfully retrieve images using API.

#### Install and Setup React Query in Gallery Component.

React Query is a library that can be used to handle API requests in react applications. To fetch images from the Unsplash API, we will need to install and set up React Query in our gallery component.

#### Install and Set up React Query Dev Tools

React Query Dev Tools provide a way to inspect and debug React Query data and caching behavior. To use this tool, we will need to install and set up React Query dev tools in our application.

#### Create a searchValue State value in Context.jsx

In order to implement search functionality in our application, we will need to create a state value to store the user's search input. This can be done in a context file such as context.jsx.

#### Fix the useQuery

After setting up React Query and creating the searchValue state value, we will need to modify the useQuery function to fetch images based on the user's search input.

#### Check whether User prefers Dark Mode with JavaScript

To provide a better user experience, we can check whether the user prefers dark mode using JavaScript. This can be done by accessing the user's system preferences and setting the theme of your application accordingly.

#### Setup Local Storage to store isDarkTheme state value

To persist the user's preferred theme across sessions, we can store the isDarkTheme state value in local storage. This will allow the theme to be preserved even if the user closes and reopens the application.

#### Setup Local Storage to Store isDarkTheme State value.

To persist the user's preferred theme across sessions, we can store the isDarkTheme state value in local storage. This will allow the theme to be preserved even if the user closes and reopens the application.

#### Setup ENV variables in vite

Environment variables can be used to store sensitive information, such as our UnSplash API key. In order to use environment variables in your application, we will need to set them up in VITE, a build tool for modern web development.

### Deploy the Application to Netlify and Setup ENV variables.

Once our application is complete, we can deploy it to a hosting platform such as Netlify. When deploying to Netlify, we will need to set up our environment variables to ensure that our application can access our UnSplash API key.

#### Add CSS

Finally, you can add CSS to your application to style the components and provide a polished user interface.

## Additional Info

#### Dark Theme Class - Code

```js
const body = document.querySelector('body');
body.classList.toggle('dark-theme', newDarkTheme);

// alternative setup
document.body.classList.toggle('dark-theme', newDarkTheme);
```

const body = document.querySelector('body'); - This line selects the body element of the current document using the document.querySelector() method, which returns the first element that matches the specified selector. In this case, it is selecting the body element.

body.classList.toggle('dark-theme', isDarkTheme); - This line toggles the dark-theme class of the body element. The classList property is a read-only list that contains the classes of an element. The toggle() method adds a class to the element if it does not have it, or removes it if it does. In this case, it adds the dark-theme class if isDarkTheme is true, and removes it if isDarkTheme is false.

#### Elements Property

The elements property of the event.target object in the handleSubmit function refers to an HTMLCollection containing all the form controls (i.e., input, select, textarea, button etc.) inside the <form> element.

This is useful because we can use the elements collection to get the values of the form controls when the form is submitted.For example, e.target.elements.search.value would give you of the search input field when the form is submitted.
