import React from 'react'
import './PageInity.css'
const PageInity = () => {
  return (
    <form action="" className='formulario'>
        <h1>Selecione o tipo de atendimento que está se iniciando...</h1>
        <div className='tipoatendimento'>
            <input type="checkbox" name="sem-acesso" id="sem-acesso" />
            <label htmlFor="sem-acesso">Cliente alega sem acesso</label>
        </div>
        <div className='tipoatendimento'>
            <input type="checkbox" name="acesso-lento" id="acesso-lento" />
            <label htmlFor="sem-acesso">Cliente alega acesso lento</label>
        </div>
        <div className='tipoatendimento'>
            <input type="checkbox" name="cadastro" id="cadastro" />
            <label htmlFor="sem-acesso">Possível cliente</label>
        </div>
        <div className='tipoatendimento'>
            <input type="checkbox" name="fibratv" id="fibratv" />
            <label htmlFor="sem-acesso">Cliente com dificuldade de acessar o Fibra TV</label>
        </div>

    </form>
  )
}

export default PageInity
