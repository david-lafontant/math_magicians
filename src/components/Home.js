import './Home.css';

function Home() {
  const par = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et est tortor. Pellentesque justo eros, fermentum tempus nisi sed, malesuada scelerisque ligula. Nulla et vulputate nulla. Integer viverra ligula sapien. Donec non eros at justo interdum tempus. Cras fringilla molestie metus, id tincidunt risus condimentum vitae. Nam non placerat orci. Cras a massa et orci ornare molestie vitae at ligula. Quisque maximus blandit urna suscipit cursus. Nulla laoreet lobortis laoreet. ';

  return (
    <section className="Home">
      <h1>Welcome to our Page!</h1>
      <p>{par}</p>
      <p>{par}</p>
    </section>
  );
}

export default Home;