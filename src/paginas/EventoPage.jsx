import { useParams } from "react-router-dom";
import Evento from "../componentes/Evento/Evento";
import { useEffect, useState } from "react";

const EventoPage = () => {
    const { id, idEvento } = useParams();
    const [evento, setEvento] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEvento = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/ciudad/${id}/eventos/${idEvento}`);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setEvento(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchEvento();
    }, [id, idEvento]);

    if (loading) return <p>Cargando evento...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!evento) return <p>No se encontró el evento.</p>;

    return <Evento evento={evento}/>;
};

export default EventoPage;
