// // 1. What is the Virtual DOM?
// React uses a Virtual DOM (VDOM) to optimize UI updates.
// VDOM is a lightweight JavaScript object — a copy of the real DOM.
// Every time the state changes, React creates a new Virtual DOM and compares it with the previous one.
// It calculates the difference (diff) and updates only the changed parts of the real DOM.
// // This improves performance and efficiency.


//  2. What is Reconciliation?
// Reconciliation is the process of comparing:

// Old Virtual DOM VS New Virtual DOM.

// React performs a "diffing algorithm" to find what has changed.

// Based on the differences, React:

// Updates only the necessary elements.

// Avoids re-rendering the entire UI.

// Example: If only 1 list item changed, React only updates that item, not the entire list.

// /