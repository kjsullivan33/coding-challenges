const queue = [];
//add to the queue at the end, but remove from the beginning
queue.push("google");
queue.push("instagram");
queue.push("youtube");

queue.shift();


const queue2 = [];
//add to the queue at the beginning, but remove from the end
queue2.unshift("google");
queue2.unshift("instagram");
queue2.unshift("youtube");

queue2.pop();