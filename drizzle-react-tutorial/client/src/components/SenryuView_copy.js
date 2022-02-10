/*import React from 'react'
import Sketch from 'react-p5'
import { useSelector, useDispatch } from 'react-redux'


class SenryuView extends React.Component {

  constructor(props) {
    super(props)
    this.props = props
    this.draw = this.draw.bind(this)
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
    const senryu = useSelector((state) => state.senryu.value)
    //console.log(senryuObtained)
    console.log(senryu)
    const displayPoem = senryu.value

    p5.background(160);
    // Align the text in the center
    // and run drawWords() in the middle of the canvas
    p5.textAlign(p5.CENTER);
    p5.fill(0);
    p5.text(displayPoem.firstLine, p5.width * 0.5, 80);
    p5.fill(65);
    p5.text(displayPoem.secondLine, p5.width * 0.5, 150);
    p5.fill(190);
    p5.text(displayPoem.thirdLine, p5.width * 0.5, 220);
    p5.fill(255);
  }

  render() {
    return <Sketch
      setup={this.setup}
      draw={this.draw}
    />
  }
}

export default SenryuView;
*/