import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import guitarIcon from '../images/guitar-icon.png';
import Modal from 'react-modal';

const DivHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  padding: 1rem;
  text-align: center;
  font-family: monospace;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
  }
`;

const Titulo = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center; 
`;

const GuitarIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputSearch = styled.input`
  flex: 1;
  max-width: 400px;
  height: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  border: 1px solid black;
  padding: 0.5rem;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

const ButtonSearch = styled.button`
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

const LSDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: right;
    margin-top: 1rem;
  }
`;

const LSButton = styled.button`
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-weight: bold;
  margin: 0.5rem;
  cursor: pointer;
  background: white;

  &:hover {
    background: #eee;
  }
`;

const CloseButton = styled.button`
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1rem;
  border: none;
  background: none;
  cursor: pointer;
`;

const LoginModal = styled(Modal)`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px; 
`;

const SignUpModal = styled(Modal)`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px; 
`;

const ModalTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.5rem;
`;

const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ModalLabel = styled.label`
  font-size: 1rem;
`;

const ModalInput = styled.input`
  height: 30px;
  padding: 5px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ModalButton = styled.button`
  height: 40px;
  font-size: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  background: white;
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

const Header = () => {
  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalIsOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalIsOpen(false);
  };

  const openSignUpModal = () => {
    setSignUpModalIsOpen(true);
  };

  const closeSignUpModal = () => {
    setSignUpModalIsOpen(false);
  };

  return (
    <>
      <DivHeader>
        <Titulo>
          <GuitarIcon src={guitarIcon} alt="Guitar Icon" />
          UnderSound
        </Titulo>
        <SearchForm>
          <InputSearch placeholder='Search...'></InputSearch>
          <ButtonSearch type='submit'><FaSearch/></ButtonSearch>
        </SearchForm>
        <LSDiv>
          <LSButton onClick={openLoginModal}>Login</LSButton>
          <LSButton onClick={openSignUpModal}>Sign Up</LSButton>
        </LSDiv>
      </DivHeader>

      <LoginModal
        isOpen={loginModalIsOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
      >
        <CloseButton onClick={closeLoginModal}>X</CloseButton>
        <ModalTitle>Login</ModalTitle>
        <ModalForm>
          <ModalLabel>Email:</ModalLabel>
          <ModalInput type="email" />
          <ModalLabel>Password:</ModalLabel>
          <ModalInput type="password" />
          <ModalButton type="submit">Submit</ModalButton>
        </ModalForm>
      </LoginModal>

      <SignUpModal
        isOpen={signUpModalIsOpen}
        onRequestClose={closeSignUpModal}
        contentLabel="Sign Up Modal"
      >
        <CloseButton onClick={closeSignUpModal}>X</CloseButton>
        <ModalTitle>Sign Up</ModalTitle>
        <ModalForm>
          <ModalLabel>Name:</ModalLabel>
          <ModalInput type="text" />
          <ModalLabel>Email:</ModalLabel>
          <ModalInput type="email" />
          <ModalLabel>Password:</ModalLabel>
          <ModalInput type="password" />
          <ModalButton type="submit">Submit</ModalButton>
        </ModalForm>
      </SignUpModal>
    </>
  );
};

export default Header;
