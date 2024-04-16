const Home = () => {

    const  handleClick= () => {
        console.log('Hello');
    }
    
    const handleClickAgain= (name) => {
        console.log(`Hello ${name}`);
    }

    return ( 
        <div className="Home">
        <h2>Home page</h2>
        <button onClick={handleClick}>Click me</button>
        <button onClick={() => {handleClickAgain('mario')}}>Click me again</button>
        </div>
    );
}

export default Home;