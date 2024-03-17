import styled from 'styled-components';

const NavMenu = styled.nav`
  background-color: #333;
  padding: 0.1rem;
`;

const MainCategoryList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MainCategoryItem = styled.li`
  color: #fff;
  cursor: pointer;
  position: relative;
  transition: color 0.3s;
  margin: 0.5rem;
  padding: 0.25rem;

  &:hover {
    color: #ffcc00;
    > ul {
      display: block;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SubCategoryList = styled.ul`
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #444;
  padding: 1rem;
  display: none;
  border: 1px solid #666;
  width: 100%;
  z-index: 1; 
`;

const SubCategoryItem = styled.li`
  color: #fff;
  cursor: pointer;
  margin-top: 0.25rem;
  border-bottom: 1px solid #666;
  padding: 0.25rem;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

const Menu = () => {
  return (
    <>
      <NavMenu>
        <MainCategoryList>
          <MainCategoryItem>
            Instrumentos Musicais
            <SubCategoryList>
              <SubCategoryItem>Guitarras</SubCategoryItem>
              <SubCategoryItem>Baixos</SubCategoryItem>
              <SubCategoryItem>Baterias</SubCategoryItem>
              <SubCategoryItem>Teclados</SubCategoryItem>
            </SubCategoryList>
          </MainCategoryItem>
          <MainCategoryItem>
            Acessórios
            <SubCategoryList>
              <SubCategoryItem>Cordas</SubCategoryItem>
              <SubCategoryItem>Palhetas</SubCategoryItem>
              <SubCategoryItem>Capas</SubCategoryItem>
            </SubCategoryList>
          </MainCategoryItem>
          <MainCategoryItem>
            Equipamentos de Áudio
            <SubCategoryList>
              <SubCategoryItem>Mesas de Som</SubCategoryItem>
              <SubCategoryItem>Microfones</SubCategoryItem>
              <SubCategoryItem>Fones de Ouvido</SubCategoryItem>
              <SubCategoryItem>Pedais</SubCategoryItem>
              <SubCategoryItem>Amplificadores</SubCategoryItem>
              <SubCategoryItem>Cabos</SubCategoryItem>
            </SubCategoryList>
          </MainCategoryItem>
        </MainCategoryList>
      </NavMenu>
    </>
  );
};

export default Menu;
