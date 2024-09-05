import React, { useEffect } from 'react';

const Ex10 = () => {
   
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakeapi.platzi.com/en/rest/produc');
                if (!response.ok) {
                    throw new Error('Erro ao buscar produtos: link não encontrado');
                }
                // Process the response if needed
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return(
        <>
            <h1>Produtos</h1>
            <p>Cheque o erro no console</p>
        </>
    )
}

export default Ex10