class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val===undefined ? 0 : val)
		this.next = (next===undefined ? null : next)
	}
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
	let currentNode = head;

	if(head == null) return null;

	do {
		if (currentNode?.val === currentNode.next?.val){
			currentNode.next = currentNode.next.next
		} else {
			currentNode = currentNode.next
		}
	} while(currentNode !== null && currentNode.next !== null)


	return head;
};
