// let n = 4;

// let arr = Array.from({ length: n }, () => []);

// console.log(arr);
// let n=4;
// let arr = [];
//     for (let i = 0; i < n; i++) {
//        arr.push([]);
// }
// console.log(arr);

// let n=2;
// let arr=[];
// for (let i=0;i<n;i++){
//     arr.push([])
// }
// console.log(arr);

// arr=[1,2,3,4,5];
// d=2;
// let result=[];
// let n=arr.length;
// for(let i=0;i<n;i++){
//     let index=(i-d+n)%n;
//     result[index]=arr[i];

// }
// console.log(result);


// arr=[5,6,7,8,9];
// d=2;
// let result=[];
// let x=arr.length;
// for(let i=0;i<x;i++){
//     let index=(i-d+x)%x;//4,5
//     result[index]=arr[i];

// }
// console.log(result);
// let arr = [1,2,3,4,5];
// let d = 2;
// let n = arr.length;
// let result = [];

// for (let i = 0; i < n; i++) {
//     let index = (i - d + n) % n;
//     result[index] = arr[i];
// }

// console.log(result);

// function rotateLeft(d, arr) {
//     let n = arr.length;
//     let result = [];

//     for (let i = d; i < n; i++) {
//         result.push(arr[i]);
//     }

//     for (let i = 0; i < d; i++) {
//         result.push(arr[i]);
//     }

//     return result;
// }
// console.log(rotateLeft(3,[8,4,3,2,1]));

// function rotateLeft(d, arr) {
//     let n = arr.length;
//     let result = [];

//     for (let i = d; i < n; i++) {//i=3,d=3,n=5====3,4
//         result.push(arr[i]);//3,4
//     }

//     for (let i = 0; i < d; i++) {//i=0,1,2
//         result.push(arr[i]);
//     }

//     return result;
// }
// console.log(rotateLeft(3,[8,4,3,2,1]));

// let arr=[1,2,3];
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);

// }

// function rotateLeft(d,arr){
//     let n=arr.length;
//     let result=[];
//     for(let i=d;i<n;i++){//i=3,d=3,i=3,4,5
//         result.push(arr[i]);
//     }
//     for(let i=0;i<d;i++){//i=0,1,2
//         result.push(arr[i]);

//     }
//     return result
// }

// console.log(rotateLeft(3,[9,4,6,3,8]));

// strings = ["ab", "ab", "abc"]
// queries = ["ab", "abc", "bc"]
//sparse arrays
// let  arr=[];
// arr[0]=1;
// arr[6]=4;
// console.log(arr)

// strings = ["ab", "ab", "abc"]
// queries = ["ab", "abc", "bc"]

// function matchingStrings(strings, queries) {
//     // your code
//     let result={};
//     for(let i=0;i<strings.length;i++){//i=0,1,2,3,4
//         if(result[strings[i]]){
//             result[strings[i]]++;//red:2,blue:2,green:1
//         }else{
//             result[strings[i]]=1;
//         }
//     }
//     return result;

//     // let output=[];

//     // for(let j=0;j<queries.length;j++){//j=0,1,2
//     //     if(result[queries[j]]){
//     //         output.push(result[queries[j]]);
//     //     }else{
//     //         output.push(0);
//     //     }

//     // }
//     // return output;

// }
// console.log(matchingStrings(["red", "blue", "red", "yellow", "blue"], ["red", "blue", "yellow"]))

// let num=[1,2,1,4,5];
// let obj={};

// for(let i=0;i<num.length;i++ ){
//     if(obj[num[i]]){
//         obj[num[i]]++;
        

//     }else{
//         obj[num[i]]=1;
//     }

// }
// console.log(obj);

// let result = {};

//     // Step 1: count frequency
//     for (let i = 0; i < strings.length; i++) {
//         if (result[strings[i]]) {
//             result[strings[i]]++;
//         } else {
//             result[strings[i]] = 1;
//         }
//     }

//     // Step 2: answer queries
//     let output = [];

//     for (let j = 0; j < queries.length; j++) {
//         if (result[queries[j]]) {
//             output.push(result[queries[j]]);
//         } else {
//             output.push(0);
//         }
//     }

//     return output;


//Starting with a 1-indexed array of zeros and a list of operations, 
// for each operation add a value to each array element between two given indices,
//  inclusive. 
// Once all operations have been performed, return the maximum value in the array.

// let operations=[[1,2,100],[2,5,100],[3,4,100]]
// console.log(operations.length)

// let arr=[0,0,0,0,0];
// let queries=[[1,2,100],[2,5,100],[3,4,100]]
// for(let i=0;i<queries.length;i++){
//     let a=queries[i][0];
//     let b=queries[i][1];
//     let k=queries[i][2];
    

//     console.log(a);
//     console.log(b);
//     console.log(k);


    
//     }   

// console.log(arr);

// function arrayManipulation(n, queries) {
//     // Write your code here
    

// }

// let ne=new Array(20,30,40,50,30)
// console.log(typeof(ne))


// function getCount(head) {
//     let count = 0;
//     let current = head;

//     while (current !== null) {
//         count++;
//         current =current.next;
//     }

//     return count;
// }
// console.log(getCount(2,3,22,4,5))

// class Node {
//     constructor(x) {
//         this.val = x;
//         this.next = null;
//     }
// }

// function insertPos(head, pos, val) {

//     if (pos < 1) return head;

//     // head will change if pos = 1
//     if (pos === 1) {
//         let newNode = new Node(val);
//         newNode.next = head;
//         return newNode;
//     }

//     let curr = head;

//     // Traverse to the node just before the new node
//     for (let i = 1; i < pos - 1 && curr !== null; i++) {
//         curr = curr.next;
//     }

//     // If position is greater than number of nodes
//     if (curr === null) return head;

//     let newNode = new Node(val);

//     // update the next pointers
//     newNode.next = curr.next;
//     curr.next = newNode;

//     return head;
// }

// function printList(head) {
//     let curr = head;
//     while (curr !== null) {
//         process.stdout.write(curr.val.toString());
//         if (curr.next !== null) {
//             process.stdout.write(" -> ");
//         }
//         curr = curr.next;
//     }
//     console.log();
// }

// // Driver code

// // Creating the list 1->2->4
// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(4);

// let val = 3, pos = 3;
// head = insertPos(head, pos, val);
// printList(head);


// JavaScript program to insert given element at a given 
// position in an array using custom method

// let n = 4;
// let arr = [10, 20, 30, 40, 0];
// let ele = 50;
// let pos = 2;
// console.log("Array before insertion");
// console.log(arr);

// // Shifting elements to the right
// for (let i = n; i >= pos; i--)//i=4,3,2
//     arr[i] = arr[i - 1];//

// // Insert the new element at index pos - 1
// arr[pos - 1] = ele;//

// console.log("\nArray after insertion");
// console.log(arr);


// if (position === 0) {
//         newNode.next = head;
//         return newNode;
//     }

//     let current = head;

//     // move to position - 1
//     for (let i = 0; i < position - 1; i++) {
//         current = current.next;
//     }

//     // insert
//     newNode.next = current.next;
//     current.next = newNode;

//     return head;
// }

// delete node
// let arr=[1,2,3,4,5];
// let pos=2;
// for(let i=pos-1;i<arr.length-1;i++){//i=1,2,3
//     arr[i]=arr[i+1];//arr[1]=arr[2],arr[2]=arr[3],arr[3]=arr[4]
// }
// console.log(arr);


// function reversePrint(llist) {
//     let reverse=[];
   
//     let current=llist;
//     while(current!==null){
//         reverse.push(current.data);
//         current=current.next;
//     }
//     return reverse.reverse();
// }
// console.log(reversePrint([1,2,3,4,5]));

// function printReverseArray(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         console.log(arr[i]);
//     }
// }   
// printReverseArray([1,2,3,4,5]);


// function reversePrint(llist) {
    
//     let reverseList=[];
//     for(let i=llist.length-1;i>=0;i--){//i=4,3,2,1,0
//         reverseList.push(llist[i])//reverseList=[5,4,3,2,1]
//     }
//     return reverseList
    

// }
// console.log(reversePrint([1,2,3,4,5]));

// function reverse(llist) {
//     // Write your code here
//     let reverseList=[];
//     for(let i=llist.length-1;i>=0;i--){
//         reverseList.push(llist[i]);
//     }
//     return reverseList;
// }
// console.log(reverse([1,2,3,4,5]));

// function reverse(llist) {
//     // Write your code here
//     let reverseList=[]
    
//     for(let i=llist.length-1;i>=0;i--){
//         reverseList.push(llist[i])     
//     }
//     return reverseList
// }
// console.log(reverse([1,2,3,4,5]));

// function reverse(llist) {
//     // Write your code here
//     let current=llist;
//     let prev=null;
//     let next;
//     let result=[]

//     while(current !==null){
//         result.push(current.data);
//         c
//         next=current.next;
//         current.next=prev;
//         prev=current;//prev=1,2,3,4,5
//         current=next;//

//     }
//     return prev;
// }
// console.log(reverse([1,2,3,4,5]));

// class Node {
//     constructor(newData) {
//         this.data = newData;
//         this.next = null;
//     }
// }
 
// function reverseList(head) {
 
//     let curr = head;
//     let prev = null;
//     let next;
 
//     // traverse all the nodes of Linked List
//     while (curr !== null) {
//         // store next
//         next = curr.next;
 
//         // reverse current node's next pointer
//         curr.next = prev;
 
//         // move pointers one position ahead
//         prev = curr;
//         curr = next;
//     }
 
//     return prev;
// }
 
// function printList(node) {
//     let result = [];
//     while (node !== null) {
//         result.push(node.data);
//         node = node.next;
//     }
//     console.log(result.join(" -> "));
// }
 
// // Driver Code

// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);
 
// head = reverseList(head);
// printList(head);


// function arrayManipulation(n, queries) {
//     let arr = new Array(n).fill(0);

//     for (let i = 0; i < queries.length; i++) {
//         let a = queries[i][0];//a=1,2,3
//         let b = queries[i][1];//b=2,5,4
//         let k = queries[i][2];//k=100,100,100
//         arr[a - 1] += k; //arr[0]+=100,arr[1]+=100,arr[2]+=100] Increment the start index
//         arr[b-1]+=k;
       

//     }
//     console.log(arr)

//     let max = 0;
//     let current = 0;
//     for (let i = 0; i < n; i++) {
//         current = arr[i];
//         if (current > max) {
//             max = current;
//         }
//     }
//     return max;
// }
// console.log(arrayManipulation(5,[[1,2,100],[2,5,100],[3,4,100]]))
    

// let arr=new Array(n).fill(0);
// console.log(arr)

// function arrayManipulation(n, queries) {
//     // Write your code here
//     let arr=new Array(n).fill(0)
//    for (let i = 0; i < queries.length; i++) {
//         let a = queries[i][0];//a=1,2,3
//         let b = queries[i][1];//b=2,5,4
//         let k = queries[i][2];//k=100,100,100
//         for(let j=a-1;j<b;j++){
//             arr[j] += k; 
            
            
//         }        
//     }
    
//     let max = 0;
//     let current = 0;
//     for (let i = 0; i < n; i++) {
//         current = arr[i];
//         if (current > max) {
//             max = current;
//         }
//     }
//     return max;
// }
// console.log(arrayManipulation(5,[[1,2,100],[2,5,100],[3,4,100]]))

// let arr=[1,2,3,4,5];
// arr.splice(1,3,5)
// console.log(arr)

// function dynamicArray(n, queries) {
//     let arr = [];
//     for (let i = 0; i < n; i++) {
//        arr.push([]);
    
// }
//     let lastAnswer = 0;
//     for (let i = 0; i < queries.length; i++) {
        
        
//     }
//     return lastAnswer;

    
// }
// console.log(dynamicArray(5,[[1,2,3],[4,5,6],[7,8,9]]))


// function CompareLists(llist1, llist2) {

//     if(llist1===llist2){
//         if(llist1.length===llist2.length){   
//         }
//         return 1
        
//     }
//     else{
//         return 0
//     }


// }
// console.log(CompareLists([1,2,3],[1,2,3]))

// function areIdentical(head1, head2) {
//     let current1 = head1;
//     let current2 = head2;
//     while (current1 !== null && current2 !== null) {
        
//         if (current1.data !== current2.data) {
//             return false;
//         }
//         current1 = current1.next;
//         current2 = current2.next;
//     }

//     return current1 === null && current2 === null;
// }   
// console.log(areIdentical([1,2,3],[1,2,3]))

let userInput=Number(prompt("Enter a number"))
