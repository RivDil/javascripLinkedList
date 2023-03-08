class Node{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


class LinkedLink{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //adds a new node containing value to the end of the list
    append(value){
        let node = new Node(value)
        let current = this.head;
        let previous;
        if (current == null){
            this.prepend(value)
        }while (current){
            previous = current;
            current = current.next;
        }
        previous.next = node
        this.size++;
    }


    //adds a new node containing value to the start of the list
    prepend(value){
        this.head = new Node(value, this.head)
        this.size++;
    }

    //size returns the total number of nodes in the list
    size(){
        return this.size
    }
    //head returns the first node in the list
    head(){
        return this.head
    }

    //tail returns the last node in the list
    tail(){
        let current = this.head;
        while(current.next){
            current = current.next
        }
        return current.value
    }
    //at(index) returns the node at the given index
    at(index){
        if (index > this.size || index < 0){
            return
        }
        let count=0;
        let current = this.head;
        while (current){
            if (count == index){
                return current.value
            }
            current = current.next
            count++
        }
    }
    

    //represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    toString(){
        let current = this.head;
        let result='';
        
        while(current){
            result +=  '(' + current.value + ') -> ';
            current = current.next
        }
        result += 'null';
        return result
    }
}

const ll = new LinkedLink;

ll.prepend(5);
ll.prepend(6);
ll.prepend(7);
ll.append(8);
ll.append(9);
ll.append(9);
ll.prepend(10);
console.log(ll.toString())
console.log(ll.size)
console.log(ll.tail())
console.log(ll.at(5))
