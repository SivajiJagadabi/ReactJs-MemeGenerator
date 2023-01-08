// Style your components here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`
export const MemeGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  max-width: 1050px;
  padding-left: 24px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 25px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 15px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`
export const FormMemeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-direction: column-reverse;
  }
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 45%;

  height: 400px;
  @media screen and (max-width: 768px) {
    width: 95%;
    margin-bottom: 30px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.selectedFontSize}px;
  font-weight: 500;
  font-family: 'Open Sans';
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 95%;
    margin-bottom: 30px;
  }
`

export const CustomLabel = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-weight: 500;
  font-size: 11px;
  margin-bottom: 0px;
`

export const CustomInput = styled.input`
  font-family: 'Open Sans';
  color: #5a7184;
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  background-color: 'white';
  padding: 10px;
  outline: none;
  margin-top: 5px;
  margin-bottom: 20px;
`

export const CustomSelect = styled.select`
  font-family: 'Open Sans';
  color: #5a7184;
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  background-color: 'white';
  padding: 10px;
  outline: none;
  margin-top: 5px;
  margin-bottom: 20px;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
`

export const GenerateButton = styled.button`
  color: white;
  background-color: #0b69ff;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  width: 150px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  margin-top: 15px;
  border: none;
  font-family: 'Open Sans';
  font-size: 15px;
`
