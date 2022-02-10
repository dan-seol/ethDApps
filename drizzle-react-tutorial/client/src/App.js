import logo from './logo.svg'
import './App.css'
import React from 'react'
import SenryuGenerator from './components/SenryuGenerator'
import SenryuTypeArea from "./components/SenryuTypeArea"
import SenryuView from './components/SenryuView'
import Tabs from './components/Tabs'

class App extends React.Component {
  state = { loading: true, drizzleState: null }
  componentDidMount() {
    const { drizzle } = this.props

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState()

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({ loading: false, drizzleState })
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    if (this.state.loading) return "Loading Drizzle..."
    return (
      <div className="App">
        <SenryuView
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <Tabs>
          <div label="Generate one">
            <SenryuGenerator />
          </div>
          <div label="Type your own">
            <SenryuTypeArea />
          </div>
        </Tabs>

      </div>
    )
  }
}

export default App
