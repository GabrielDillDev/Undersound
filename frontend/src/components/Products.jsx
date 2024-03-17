import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const ProductListContainer = styled.div`
  background-color: #ccc;
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  flex-wrap: wrap;
  position: relative; 
`;

const ProductCard = styled.div`
  color: white;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 1rem; 
  padding: 0.5rem 1.5rem; 
  text-align: center;
  width: 14rem; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: 20rem;
  margin-bottom: 1rem; 
  border-radius: 5px;
`;

const AdquirirButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const LoadMoreButton = styled.button`
  background-color: #333; 
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute; 
  left: 50%; 
  transform: translateX(-50%); 
  bottom: 0.5rem;  

  &:hover {
    background-color: #555;
  }
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(5); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/produtos');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
      }
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 10);
  };

  return (
    <>
      <ProductListContainer>
        {products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={`http://localhost:3000/imagens/${product.imagem}`} alt={product.nome} />
            <p>{product.nome}</p>
            <p>{`R$ ${product.preco.toFixed(2)}`}</p>
            <AdquirirButton>Adquirir Produto</AdquirirButton>
          </ProductCard>
        ))}
        {visibleProducts < products.length && (
          <LoadMoreButton onClick={handleLoadMore}>Exibir Mais</LoadMoreButton>
        )}
      </ProductListContainer>
    </>
  );
};

export default ProductList;
