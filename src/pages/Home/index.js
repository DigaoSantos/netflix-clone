import React, { useState, useEffect } from 'react';

import Filme from '../../components/Filmes'

const Home = () => {
    
    const [filmes, setFilmes] = useState([]);
    const [filme, setFilme] = useState({
        name: '',
        year: '',
        category: '',
    });

    useEffect(() => {
        alert('lista atualizada')
        console.log('componente carregou')
    }, [filmes])
    
    const cadastrar = () => {
        console.log(filme)
        setFilmes([filme, ...filmes])
    }
    return(
   <div className="container">
       <h1>Lista de Filmes</h1>
        <div className="jumbotron">
        <div className="row">
            <div className="col-4">
                <label>Nome</label>
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Nome do Filme"
                    onChange={(e) => {
                        setFilme({
                            ... filme,
                            name: e.target.value
                        });
                    }}
                />
            </div>
            <div className="col-4">
                <label>Categorias</label>
                <select className="form-control"
                    onChange={(e) => {
                        setFilme({
                            ... filme,
                            category: e.target.value
                        });
                    }}
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div>
            <div className="col-4">
                <label>Ano</label>
                <input 
                    type="number"
                    className="form-control"
                    onChange={(e) => {
                        setFilme({
                            ... filme,
                            year: e.target.value
                        });
                    }}
                />
            </div>
        </div>
        < br/>
            <button onClick={cadastrar} className="btn btn-success btn-lg btn-block">Cadastrar</button>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Nome</th>
            <th scope="col">Categoria</th>
            <th scope="col">Ano</th>
            <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            {filmes.map(filme => (<Filme filme={filme}/>))}
        </tbody>
    </table>
    </div>
    )
}

export default Home;