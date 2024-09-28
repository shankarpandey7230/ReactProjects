#### Custom Axios instance

Create utils.js and setup custom axios instance with following base url :'http://localhost:8000/api/tasks'

#### HTTP Methods

HTTP(HyperText Transfer Protocol) method defines the types of actions that can be performed on a web server to retrieve, modify or delete information. The most commonly used HTTP methods are GET, POST, PATCH and DELETE.

- GET - retrieves data.
- POST - sends data to be processed.
- PATCH- update or replace existing data.
- DELETE - removes data.

  -GET : This HTTP method is used to retrieve data from a server. When a user sends a GET request to a server, the server will return a response that includes the requested data. This method is typically used to retrieve information from a database, to read a web page, or to download a file. The HTTP GET method is the default method used by web browsers to retrieve data from a server, as it is a safe and efficient way to request resources.

```js
// HTTP GET example
try {
  const response = await axios.get('api/data');
  console.log(response.data);
} catch (error) {
  console.log(error);
}
```

POST : The POST method is used to send data to a server to create or update a resource. When a client sends a POST request to a server, the server will process the request and create a new resource or update an existing one. This method is commonly used in web forms, where users enter information that is then sent to a server for processing.

```js
// HTTP POST example
try {
  const response = await axios.post('api/data', { name: 'John', age: 30 });
  console.log(response.data);
} catch (error) {
  console.log(error);
}
```

PATCH: This method is similar to POST method but it is used to update only a part of a resource. When the user sends a PATCH request to a server, the server will update the resources with the new data provided in the request. This method is commonly used in REST APIs to update specific properties of a resource.

```js
// HTTP PATCH example
try {
  const response = await axios.patch('/api/data/1', { age: 31 });
  console.log(response.data);
} catch (error) {
  console.log(error);
}
```

DELETE: This DELETE method is used to remove a resource from a server. When a client sends a DELETE request to a server, the server will delete the resources if exists. This method is commonly used in REST APIs to remove a resource that is no longer needed or to undo a previous action.

```js
HTTP DELETE example
try{
    const response = await axios.delete('api/data/1');
    console.log(response.data)
}
catch(error){
    console.log(error)
}
```

CRUD stands for Create, Read, Update, and Delete, which are the basic operations that can be performed on a database or web application. These operations allow users to create new data, read existing data, update data, and delete data when necessary.

#### Docs

[Task API Docs](https://documenter.getpostman.com/view/18152321/2s93RTSDLn)

#### UseEffect Approach

```js
const fetchTasks = async () => {
  try {
    const response = await customFetch.get('/');
    console.log(response.data);
  } catch (error) {
    +console.error(error);
  }
};

useEffect(() => {
  fetchTasks();
}, []);
```
