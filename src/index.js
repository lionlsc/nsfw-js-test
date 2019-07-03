import * as nsfwjs from 'nsfwjs'
import "babel-polyfill";  /*使得ES6语法完全支持*/
async function test() {
    const img = document.getElementById('img')
    const model = await nsfwjs.load()
    const predictions = await model.classify(img)
    console.log('Predictions: ', predictions)  /*分级结果*/
}
test()