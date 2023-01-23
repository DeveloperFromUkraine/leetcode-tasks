class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let node = new ListNode(0)
    let carry = 0

    let head = node;

    do {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry

        carry = Math.floor(sum / 10);

        sum %= 10;

        node.next = new ListNode(sum);


        l1 = l1 && l1.next;
        l2 = l2 && l2.next;

        node = node.next

    } while (l1 || l2)

    if (carry > 0 ) {
        node.next = new ListNode(carry);
    }

    return head.next
};
