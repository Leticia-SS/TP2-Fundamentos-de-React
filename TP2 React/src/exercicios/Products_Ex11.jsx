import { useState, useEffect } from "react";

const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
            
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products/')
                if (response.ok) {
                    const products = await response.json();
                    setData(products);
                } else {
                    console.error('Erro ao buscar produtos: link não encontrado');
                }
            } catch(error) {
                console.error('Erro no fetch: ', error)
            }
        }

        fetchData();

    }, []);

    const listStyle = {
        listStyleType: 'none',
        padding: 0
    };
   
    return(
        <>
            <h1>Produtos Lista</h1>
            <ul style={listStyle}>
            {data.map((product) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
        </>
    )
}

export default Products