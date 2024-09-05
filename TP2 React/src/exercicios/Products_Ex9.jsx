const Products = () => {

    fetch('https://fakestoreapi.com/products')
            .then(response=>response.json())
            .then((data) => {
                console.log('Produtos: ', data)
            })
            .catch((error) => {
                console.error('Erro ao buscar produtos: ', error)
            })
    return(
        <>
            <h1>Produtos</h1>
            <p>Cheque o console para ver os produtos</p>
        </>
    )
}

export default Products