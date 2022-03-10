import React from 'react'
import HeaderBack from './HeaderBack'

const DescribeSinister = () => {
  return (
    <div>
      < HeaderBack/>
    
      <div className="container mt-3">
  <h2>Describe el suceso</h2>
  <p> Escribe un breve relato de los hechos, empleando un máximo de 154 caracteres. </p>
  <form action="/action_page.php">
    <div className="mb-3 mt-3">
      <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Siguiente</button>
  </form>
</div>
    
    </div>
  )
}

export default DescribeSinister