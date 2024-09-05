import { useState, useEffect } from "react";

const Ex12 = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/')
                if (response.ok) {
                    const products = await response.json();
                    setData(products);
                } else {
                    console.error('Erro ao buscar produtos: link não encontrado');
                }
            } catch(error) {
                console.error('Erro no fetch: ', error)
            } finally {
                setLoading(false);
            }
        }

        fetchData();

    }, []);

    if(loading){
        return <h1>Carregando...</h1>
      }

    const listStyle = {
        listStyleType: 'none',
        padding: 0
    };
   
    return(
        <>
            <ul style={listStyle}>
            {data.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Ex12

