import React, {useState} from 'react'
import './PageInity.css'

const PageInity = () => {
    
const [selecionado, setSelecionado] = useState("");

const valorCapturado = (e) => {
    setSelecionado(e.target.value);
}

const irParaTipoDeAtendimento = (e) => {
    e.preventDefault();
    console.log('Op:', selecionado);
}


  return (
        <form onSubmit={irParaTipoDeAtendimento} className='formulario'>
            
            <h1>Selecione o tipo de atendimento que está se iniciando...</h1>
            
            <div className='tipoatendimento'>
                <input type="radio" 
                name="tipo-atendimento" 
                id="sem-acesso" 
                value='semacesso'
                onChange={valorCapturado}
                checked={selecionado === 'semacesso'}/>

                <label htmlFor="sem-acesso">Cliente alega sem acesso</label>
            </div>
            
            <div className='tipoatendimento'>
                <input type="radio" 
                name="tipo-atendimento" 
                id="acesso-lento" 
                value='acessolento'
                onChange={valorCapturado}
                checked={selecionado === 'acessolento'}/>
                <label htmlFor="acesso-lento">Cliente alega acesso lento</label>
            </div>
            
            <div className='tipoatendimento'>
                <input type="radio" 
                name="tipo-atendimento" 
                id="cadastro" 
                value='cadastro'
                onChange={valorCapturado}
                checked={selecionado === 'cadastro'}/>
                <label htmlFor="cadastro">Possível cliente</label>
            </div>
            
            <div className='tipoatendimento'>
                <input type="radio" 
                name="tipo-atendimento" 
                id="fibratv" 
                value='fibratv'
                onChange={valorCapturado}
                checked={selecionado === 'fibratv'}/>
                <label htmlFor="fibratv">Cliente com dificuldade de acessar o Fibra TV</label>
            </div>
            
            <div className='button'>
                <button disabled={!selecionado} type='submit'>Confirmar</button>
            </div>
        </form>
   
  )
}

export default PageInity
