const cowsay = require("cowsay");
const {name, campus} = require('./information.js')
console.log(cowsay.say({
    text : `Hello im ${name} from campus ${campus}`,
    e : "oO",
    T : "U ",
}));
