import React from 'react'
import Sketch from 'react-p5'
import { checkSenryu } from "./SenryuChecker";

class SenryuView extends React.Component {
  state = { dataKey: null };

  constructor(props) {
    super(props);
    this.props = props;
    this.draw = this.draw.bind(this)
  }

  componentDidMount() {
    const { drizzle } = this.props;
    const contract = drizzle.contracts.MyStringStore;

    // let drizzle know we want to watch the `myString` method
    const dataKey = contract.methods["myString"].cacheCall();

    // save the `dataKey` to local component state for later reference
    this.setState({ dataKey });
  }

  setup(p5, canvasParentRef) {
    p5.createCanvas(1000, 400).parent(canvasParentRef);
    // Set text characteristics
    p5.textFont('Georgia');
    p5.textSize(60);
    p5.textAlign(p5.CENTER, p5.CENTER);

  }

  draw(p5) {
    // get the contract state from drizzleState
    // using the saved `dataKey`, get the variable we're interested in
    // get the contract state from drizzleState
    const { MyStringStore } = this.props.drizzleState.contracts;
    const senryuObtained = MyStringStore.myString[this.state.dataKey];
    console.log(senryuObtained)

    const displayPoem = (senryuObtained && checkSenryu(senryuObtained.value)
      ? senryuObtained.value
      : "Click to generate\nOr type your very senryu\nMake sure it's proper").split(/\r?\n/);

    p5.background(160);
    // Align the text in the center
    // and run drawWords() in the middle of the canvas
    p5.textAlign(p5.CENTER);
    p5.fill(0);
    p5.text(displayPoem[0], p5.width * 0.5, 80);
    p5.fill(65);
    p5.text(displayPoem[1], p5.width * 0.5, 150);
    p5.fill(190);
    p5.text(displayPoem[2], p5.width * 0.5, 220);
    p5.fill(255);
  }

  state = { dataKey: null };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />
  }
}



export default SenryuView;