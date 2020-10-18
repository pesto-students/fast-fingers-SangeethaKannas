import styled from 'styled-components'
import { FlexDiv } from '../common/commoncomponents'

export const ModalContainer = styled.section`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`

export const ModalWrapper = styled(FlexDiv)`
  padding: 1rem 2rem;
  margin: 2rem 2rem;
  flex-direction: column;
  background-color: green;
`

export const ModalContent = styled.div`
  text-align: left;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ModalHeader = styled.header`
  font-size: 1.5rem;
`

export const CloseButton = styled.button`
  color: #f7eaea;
  float: right;
  font-size: 28px;
  font-weight: bold;

  &:hover, &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`