const rootElement = document.getElementById('root');

// const element = document.createElement('div');
// element.textContent = 'Hello World';
// element.className = 'container';
// rootElement.appendChild(element);

// const element = React.createElement(
//     'div',
//     {
//       children: ['Hello World2', 'Goodbye World']
//     },
//     'Hello World4'
//   );
  
// const element = <div className="container">Hello world</div>;
// const liElement = React.createElement(
//   'ul',
//   null,
//   React.createElement('li', null, 'Home'),
//   React.createElement('li', null, 'About'),
//   React.createElement('li', null, 'Contact')
// );

  // const first = 'Joe';
  // const element = <div className="container">Hello {first}</div>;
  
  // const person = {first: 'Joe', last: 'Doe'};
  // const element = (
  //   <div className="container">
  //     Hello {person.first} {person.last}
  //   </div>
  // );

  // const element = <img src="./react-logo-1.png"/>;
  
  
  // const logo = {
  //   name: 'React Logo',
  //   title: 'React Logo',
  //   path: './react-logo-1.png'
  // }
  // const element = <img src={logo.path} alt={logo.name} title={logo.title} />;

  const okUrl = 'http://localhost:5001/photos?_page=1&_limit=100';
  const notFoundErrorUrl = 'https://httpstat.us/404';
  const forbiddenErrorUrl = 'https://httpstat.us/403';
  const serverErrorUrl = 'https://httpstat.us/500';

  axios
  .get(serverErrorUrl)
  .get(okUrl)
  .then((response) => response.data)
  .then((data) => console.log(data))
  .catch(error => console.log(error));

  const element = (
    <ul>
      <li>
        <a href="">a</a>
      </li>
      <li>
        <a href="">b</a>
      </li>
      <li>
        <a href="">c</a>
      </li>
    </ul>
  );
  ReactDOM.createRoot(rootElement).render(element);