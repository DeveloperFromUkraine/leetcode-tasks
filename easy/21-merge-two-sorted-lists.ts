class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 == null){
        return list2;
    }

    if(list2 == null){
      return list1;
    }

    let firstElement: ListNode; // head
    let listOfElems: ListNode; // temp

    if(list1.val > list2.val) {
        listOfElems = firstElement = new ListNode(list2.val);
        list2 = list2.next;
    } else {
        listOfElems = firstElement = new ListNode(list1.val);
        list1 = list1.next;
    }

    while(list1 != null || list2 != null) {
        if(list1 == null && list2 !=null) {
            listOfElems.next = new ListNode(list2.val);
            list2 = list2.next;
        } else if (list1 != null && list2 == null) {
            listOfElems.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            if(list1?.val > list2?.val){
                listOfElems.next = new ListNode(list2?.val);
                list2 = list2?.next;
            } else {
                listOfElems.next = new ListNode(list1?.val);
                list1 = list1?.next;
            }
        }
        listOfElems = listOfElems.next;
    }

    return firstElement;
};
