import React from 'react';

const Filme = ({filme}) => {
    const showMovie = () => {
        alert(filme.name)
    }

    return(
        <tr>
            <th scope="row">{filme.name}</th>
            <td>{filme.category}</td>
            <td>{filme.year}</td>
            <td>
                <button className="btn btn-info" onClick={showMovie}>Informações</button>
                <button className="btn btn-danger">Excluir</button>
            </td>
        </tr>
    )
}

export default Filme;