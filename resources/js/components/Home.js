import React from 'react';



const Home = () => {

 // Declaración de una variable de estado que llamaremos "count"
 const [count, setCount] = useState(0);

 useEffect(() => {
  // Actualiza el título del documento usando la API del navegador
  document.title = `You clicked ${count} times`;
});

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <button onClick={() => setCount(0)}>
               Reset
            </button>
        
        </div>
        
        );
}



export default Home;