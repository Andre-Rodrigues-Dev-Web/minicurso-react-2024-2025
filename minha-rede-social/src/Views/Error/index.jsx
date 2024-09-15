import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h1>Ops!</h1>
            <p>Esse conteúdo não está disponível.</p>
            <Link to="/">Voltar para o início</Link>
        </div>
    )
}

export default Error;