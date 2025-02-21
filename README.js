
// **Monad自动领水脚本**

/**
* 使用XPath表达式获取元素的值。
*
* @param {string} xpath - 用来定位元素的XPath。
* @return {Node|null} 返回找到的元素节点，如果未找到则返回null。
*/
function getElementByXPath(xpath) {
const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
return result.singleNodeValue;
}
/**

* 根据页面内容处理领取Testnet MON的操作。
*/
function getTestnetMON() {
const button = getElementByXPath("//button[contains(text(), 'Get Testnet MON')]");
if (button) {

console.log("找到按钮：Get Testnet MON，正在点击...");
button.click();
} else {
console.log("未找到 'Get Testnet MON' 按钮，等待后重试...");
}
}
// **首次检查在5秒后执行**

setTimeout(getTestnetMON, 5000);
// **每隔50秒进行一次后续检查**

setInterval(getTestnetMON, 50000);
