import { EventEmitter } from "node:events";

class Utils extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  speak(message) {
    this.emit("speak", message);
  }
}

const shou = new Utils("shou");

shou.on("speak", (message) => {
  console.log(`${shou.name} said: ${message}`);
});

shou.speak("hello");
