import React, {Component} from 'react';

// Common
import logo from '../images/logo.svg';
import Layout from './_layout';

// Styles
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Layout className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>KetoPlan AI</h2>
        </div>
        <p className="App-intro">
          Welcome to KetoPlan AI.
        </p>
        <p className="App-intro">
          KetoPlan AI is a Ketogenic-diet meal plan generator, powered by Artificial Intelligence and Machine Learning.
          <br />
          KetoPlan AI takes your daily macro goals and ratings of various foods, recipes, meals, and previously
          {' '}
          generated meal plans, and combines them to create highly personalized and delicious meal plans specifically
          {' '}
          good for the Ketogenic diet.
        </p>
        <p className="App-intro">
          KetoPlan AI is an open-source project licensed under the
          {' '}
          <a href="https://opensource.org/licenses/MIT" rel="noreferrer noopener" target="_blank">
            MIT License
          </a>.
          <br />
          You can check out
          {' '}
          <a href="https://github.com/mduleone/ketoplan" rel="noreferrer noopener" target="_blank">
            this React application
          </a>
          {' '}
          and the
          {' '}
          <a href="https://github.com/mduleone/ketoplan" rel="noreferrer noopener" target="_blank">
            Node Express server
          </a>
          {' '}
          powering it on GitHub.
          <br />
          This project is a work in progress, and currently the work of a single engineer, otherwise employed full time.
          <br />
          Thank you for understanding the slow pace of development.
        </p>
      </Layout>
    );
  }
}

export default App;
