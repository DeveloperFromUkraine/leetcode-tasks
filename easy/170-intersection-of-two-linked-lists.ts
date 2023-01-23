/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
	let listA = headA;
	let listB = headB;

	if(listA === listB) {
		return listA
	}

	do {
		listA = !listA ? headB : listA.next;
		listB = !listB ? headA : listB.next;
	} while (listA != listB)

	return listA;
};
