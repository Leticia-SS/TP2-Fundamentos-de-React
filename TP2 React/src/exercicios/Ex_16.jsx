import { useState, useEffect } from "react";

const Ex16 = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products/categories');
          const data = await response.json();
          setCategories(data);
        } catch (error) {
          console.error('Erro ao buscar categorias:', error);
        }
      };
  
      fetchCategories();
    }, []);
    
    useEffect(() => {
      if (selectedCategory) {
        const fetchProducts = async () => {
          try {
            const response = await fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`);
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error('Erro ao buscar produtos:', error);
          }
        };
  
        fetchProducts();
      }
    }, [selectedCategory]);

    const listStyle = {
        listStyleType: 'none',
        padding: 0
    };
  
    return (
      <>
        <label htmlFor="categories">Escolha uma categoria:</label><br></br>
        <select id="categories" name="categories" onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
          <option value="">Selecione uma categoria</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
  
        {products.length > 0 && (
          <div>
            <h1>Produtos:</h1>
            <ul style={listStyle}>
              {products.map((product) => (
                <li key={product.id}>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>Preço: ${product.price}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </>
    );
}

export default Ex16