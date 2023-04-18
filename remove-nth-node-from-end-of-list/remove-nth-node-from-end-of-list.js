/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    let node = head;
    let arr = [];
    while (node != undefined){
        arr.push(node.val)
        node = node.next
    }
    
    arr.splice(-n,1)
    
    if(arr.length){
        let revisedHead = new ListNode(arr[0] ,null);
        node = revisedHead
        for(let i = 1;i<arr.length;i++){
            node.next = new ListNode(arr[i],null)
            node = node.next
        }
        return revisedHead
    }else{
        return null
    }
    
   
    
};