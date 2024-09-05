import { useState, useEffect } from "react";

const Ex15 = () => {
    const [categories, setCategories] = useState([]);

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
  
    return (
      <>
        <label htmlFor="categories">Escolha uma categoria:</label><br></br>
        <select id="categories" name="categories">
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </>
    );
}

export default Ex15