// You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
// You should be as efficient with time and space as possible.

class Orders{
  constructor(){
   this.orderLog=[];
  }
 record(order_id){
    this.orderLog.push(order_id);
  }
  get_last(order_id){
    console.log(this.orderLog[this.orderLog.length-order_id-1]);
  }
}
let myOrder=new Orders();
myOrder.record(1);
myOrder.record(2);
myOrder.record(3);
myOrder.record(4);
myOrder.record(5);
myOrder.get_last(0);