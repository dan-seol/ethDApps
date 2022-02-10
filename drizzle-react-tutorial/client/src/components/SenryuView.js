import { useSelector } from 'react-redux'
import React, { useRef, useEffect } from 'react'
import p5 from 'p5'

export default function SenryuView() {

  const senryu = useSelector((state) => state.senryu.value)
  const processingRef = useRef();
  const Sketch = p => {
    p.setup = () => {
      p.createCanvas(1000, 400)
      p.textFont('Georgia');
      p.textSize(60);
      p.textAlign(p.CENTER, p.CENTER);

    }
    p.draw = () => {
      // get the contract state from drizzleState
      // using the saved `dataKey`, get the variable we're interested in
      // get the contract state from drizzleState
      //console.log(senryuObtained)

      //console.log(senryu)
      p.background(160);
      // Align the text in the center
      // and run drawWords() in the middle of the canvas
      p.textAlign(p.CENTER);
      p.fill(0);
      p.text(senryu.firstLine, p.width * 0.5, 80);
      p.fill(65);
      p.text(senryu.secondLine, p.width * 0.5, 150);
      p.fill(190);
      p.text(senryu.thirdLine, p.width * 0.5, 220);
      p.fill(255);
    }
  }
  useEffect(() => {
    let newp5 = new p5(Sketch, processingRef.current)
    return () => newp5.remove()
  }, [Sketch, senryu])

  return <div ref={processingRef} />
}