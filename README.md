# Speech to Text Converter
<div align="center">
  <img src="https://github.com/adityaS011/speech-to-text-app/blob/main/public/s2t_app.png" width="600px" height="600px" alt="Web App">
</div>


This is a React web app that converts speech to text using React hooks. It uses the Web Speech API to access the speech recognition and synthesis features of the browser. It also uses the useSpeechRecognition and useSpeechSynthesis hooks from the react-speech-kit library to simplify the integration of the Web Speech API.

## Features

- The app has a simple and intuitive user interface that allows the user to start and stop the speech recognition and synthesis processes.
- The app displays the transcript of the speech input in a text area, and also speaks back the transcript using the speech synthesis feature.
- The app allows the user to choose from different languages and dialects for both speech recognition and synthesis.
- The app also shows the confidence level of the speech recognition result, and highlights the words that have low confidence.

## Installation

To install the app, you need to have Node.js and npm installed on your system. Then, follow these steps:

- Clone this repository to your local machine using `git clone https://github.com/your-username/speech-to-text-converter.git`
- Navigate to the project directory using `cd speech-to-text-converter`
- Install the dependencies using `npm install`
- Start the development server using `npm start`
- Open your browser and go to `http://localhost:3000` to see the app in action

## Usage

To use the app, follow these steps:

- Select a language and a dialect for both speech recognition and synthesis from the drop-down menus
- Click on the microphone icon to start the speech recognition process
- Speak into your microphone and see the transcript appear in the text area
- Click on the microphone icon again to stop the speech recognition process
- Click on the speaker icon to start the speech synthesis process
- Hear the transcript spoken back to you by your browser
- Click on the speaker icon again to stop the speech synthesis process

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
