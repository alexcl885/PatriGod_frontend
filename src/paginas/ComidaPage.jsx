import { useParams } from "react-router-dom";
import Comida from "../componentes/Comida/Comida";
import { useEffect, useState } from "react";

const ComidaPage = () => {
    const { id, idComida } = useParams();
    const [comida, setComida] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComida = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/ciudad/${id}/comidas/${idComida}`);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setComida(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComida();
    }, [id, idComida]);

    if (loading) return <p>Cargando comida...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!comida) return <p>No se encontró la comida.</p>;

    return <Comida comida={comida} />;
};

export default ComidaPage;
