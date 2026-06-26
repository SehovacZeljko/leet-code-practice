/*
 * Practical #02 - Event Emitter
 * Difficulty: Medium | Category: Patterns, API Design
 * Target: O(1) subscribe | O(n) emit over n listeners
 * Approach: (fill in once solved — e.g. Map of event -> listener array)
 * Status: ✗ unsolved
 *
 * Implement a simple pub/sub Event Emitter, like Node's EventEmitter or a
 * frontend event bus.
 *
 * Build a class `EventEmitter` supporting:
 *
 *   on(event, listener)    -> Register `listener` (a function) for `event`.
 *                             The same event can have multiple listeners.
 *                             Return `this` so calls can be chained.
 *
 *   off(event, listener)   -> Remove a previously-registered `listener` for
 *                             `event`. Removing a listener that isn't there is
 *                             a no-op. Return `this`.
 *
 *   once(event, listener)  -> Like `on`, but the listener fires at most once,
 *                             then is automatically removed. Return `this`.
 *
 *   emit(event, ...args)   -> Call every listener registered for `event`, in
 *                             registration order, passing along `...args`.
 *                             Return true if there was at least one listener,
 *                             otherwise false.
 *
 * Example:
 *   const bus = new EventEmitter();
 *   const onData = (x) => console.log('got', x);
 *   bus.on('data', onData);
 *   bus.emit('data', 42);   // logs "got 42", returns true
 *   bus.off('data', onData);
 *   bus.emit('data', 7);    // nothing logged, returns false
 *
 * Edge cases to handle:
 *   - Multiple listeners on the same event fire in the order they were added.
 *   - `once` listeners are removed after firing, even if `emit` is called
 *     again later.
 *   - `emit` with no listeners returns false and doesn't throw.
 *   - Listeners receive all the args passed to `emit`.
 *
 * Interview relevance: event-driven patterns are core to both Node backends
 * and frontend UIs. Implementing one tests your grasp of callbacks, closures,
 * and clean API design.
 */

class EventEmitter {
  constructor() {
    // TODO: initialize storage for event -> listeners
  }

  /**
   * @param {string} event
   * @param {Function} listener
   * @return {this}
   */
  on(event, listener) {
    // TODO: implement
    return this;
  }

  /**
   * @param {string} event
   * @param {Function} listener
   * @return {this}
   */
  off(event, listener) {
    // TODO: implement
    return this;
  }

  /**
   * @param {string} event
   * @param {Function} listener
   * @return {this}
   */
  once(event, listener) {
    // TODO: implement
    return this;
  }

  /**
   * @param {string} event
   * @param {...*} args
   * @return {boolean} true if at least one listener was called
   */
  emit(event, ...args) {
    // TODO: implement
    return false;
  }
}

module.exports = { EventEmitter };
