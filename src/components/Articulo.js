import Button from './Button'
import './styles/Button.css'

function Articulo() {
  return (
    <div className="Articulo">
      <h2>Articulo</h2>
      <p>
        2.1. Crea un componente llamado Article con un contenido de un título
        y contenido lorem ipsum en una etiqueta párrafo, que será utilizado
        únicamente desde el Componente Main varias veces.2 .2. Crea un
        componente llamado botón con un contenido de un botón y será llamado
        desde el componente Article.
      </p>
      <Button/>
    </div>
  );
}
export default Articulo;

