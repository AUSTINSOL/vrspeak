// console.log('voice script loaded')

// <script>
//   var msg = new SpeechSynthesisUtterance();
// var voices = window.speechSynthesis.getVoices();
// msg.voice = voices[10]; // Note: some voices don't support altering params
// msg.voiceURI = 'native';
// msg.volume = 1; // 0 to 1
// msg.rate = 1.2; // 0.1 to 10
// msg.pitch = 1; //0 to 2
// msg.text = 'Hello World';
// msg.lang = 'en-US';

// msg.onend = function(e) {
//   console.log('Finished in ' + event.elapsedTime + ' seconds.');
// };

// speechSynthesis.speak(msg);
// </script>

if (annyang) {
  // Let's define a command.
  var commands = {
    'change circle color': function() { changeCircleColor() },
    'change sky color': function() { changeSkyColor() }
  };
  annyang.debug(true);
  // Add our commands to annyang
  annyang.addCommands(commands);
 

  // Start listening.
  annyang.start();
}

// if (annyang) {

//   var commands = {
//     'Hello :variable': function(variable) {
//       alert(variable);
//     }
//   };

//   annyang.addCommands(commands);

// }


// <script type="text/javascript">
//     if (annyang) {

//       var sayThis = function(repeat) {
//         speak(repeat);
//       }

//       // Let's define a command.
//       var commands = {
//         '*repeat': sayThis
//       };

//       // Turn on debugging for the console
//       annyang.debug();

//       // Initialize annyang with our commands
//       annyang.init(commands);

//       // Start listening.
//       annyang.start();
//     }
