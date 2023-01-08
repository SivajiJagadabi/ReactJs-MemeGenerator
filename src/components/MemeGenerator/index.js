import {Component} from 'react'
import {
  AppContainer,
  MemeGeneratorContainer,
  Heading,
  MemeContainer,
  FormMemeContainer,
  FormContainer,
  CustomInput,
  TextContent,
  CustomLabel,
  CustomSelect,
  CustomOption,
  GenerateButton,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    backgroundImage: '',
    topText: '',
    bottomText: '',
    selectedFontSize: '',
    backGroundImageInput: '',
    topTextInput: '',
    bottomTextInput: '',

    optionId: fontSizesOptionsList[0].optionId,
  }

  onChangeImageUrl = event => {
    this.setState({backGroundImageInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onGenerateMeme = event => {
    event.preventDefault()
    const {
      backGroundImageInput,
      topTextInput,
      bottomTextInput,
      optionId,
    } = this.state
    this.setState({
      backgroundImage: backGroundImageInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      selectedFontSize: optionId,
    })
  }

  render() {
    const {
      backgroundImage,
      topText,
      bottomText,
      backGroundImageInput,
      topTextInput,
      bottomTextInput,
      selectedFontSize,
      optionId,
    } = this.state
    return (
      <AppContainer>
        <MemeGeneratorContainer>
          <Heading>Meme Generator</Heading>
          <FormMemeContainer>
            <FormContainer onSubmit={this.onGenerateMeme}>
              <CustomLabel htmlFor="bgImageUrl">Image URL</CustomLabel>
              <CustomInput
                type="text"
                id="bgImageUrl"
                value={backGroundImageInput}
                onChange={this.onChangeImageUrl}
                placeholder="Enter the Image URL"
              />
              <CustomLabel htmlFor="topText">Top Text</CustomLabel>
              <CustomInput
                type="text"
                id="topText"
                value={topTextInput}
                onChange={this.onChangeTopText}
                placeholder="Enter the Top Text"
              />
              <CustomLabel htmlFor="bottomText">Bottom Text</CustomLabel>
              <CustomInput
                type="text"
                id="bottomText"
                value={bottomTextInput}
                onChange={this.onChangeBottomText}
                placeholder="Enter the Bottom Text"
              />
              <CustomLabel htmlFor="select">Font Size</CustomLabel>
              <CustomSelect
                id="select"
                value={optionId}
                onChange={this.onChangeOptionId}
              >
                {fontSizesOptionsList.map(eachOption => (
                  <CustomOption
                    value={eachOption.optionId}
                    key={eachOption.optionId}
                  >
                    {eachOption.displayText}
                  </CustomOption>
                ))}
              </CustomSelect>
              <GenerateButton type="submit">Generate</GenerateButton>
            </FormContainer>
            <MemeContainer data-testid="meme" backgroundImage={backgroundImage}>
              <TextContent selectedFontSize={selectedFontSize}>
                {topText}
              </TextContent>
              <TextContent selectedFontSize={selectedFontSize}>
                {bottomText}
              </TextContent>
            </MemeContainer>
          </FormMemeContainer>
        </MemeGeneratorContainer>
      </AppContainer>
    )
  }
}

export default MemeGenerator
