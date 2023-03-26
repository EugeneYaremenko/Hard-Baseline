/**
 * Sleep is a process control approach that tells your script to wait a specified number of milliseconds before continuing to the next line of code.
 * To improve the performance of your web applications, you should consider using the sleep() function on specific scenarios.
 * Using the sleep approach, one advantage is that you can reduce the number of HTTP requests and improve the performance of your code.
 * If user input or for APIs that have rate limits, it can be useful.
 */
export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedGreeting() {
  console.log('Hello');
  await sleep(2000);
  console.log('world');
}

delayedGreeting();
console.log('bye bye');
