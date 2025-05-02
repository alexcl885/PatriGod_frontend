import { useParams } from "react-router-dom";
import Monumento from "../componentes/Monumento/Monumento";
import { useEffect, useState } from "react";

const MonumentoPage = () => {
    const { id, idMonumento } = useParams();
    const [monumento, setMonumento] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMonumento = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/ciudad/${id}/monumentos/${idMonumento}`);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }
                const data = await response.json();
                setMonumento(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMonumento();
    }, [id, idMonumento]);

    if (loading) return <p>Cargando monumento...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!monumento) return <p>No se encontró el monumento.</p>;

    return <Monumento monumento={monumento} />;
};

export default MonumentoPage;
