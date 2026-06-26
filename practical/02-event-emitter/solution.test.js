const { EventEmitter } = require('./solution');

describe('Event Emitter (Practical #02)', () => {
  test('on + emit calls the listener with args', () => {
    const bus = new EventEmitter();
    const calls = [];
    bus.on('data', (x, y) => calls.push([x, y]));
    bus.emit('data', 1, 2);
    expect(calls).toEqual([[1, 2]]);
  });

  test('emit returns true with listeners, false without', () => {
    const bus = new EventEmitter();
    expect(bus.emit('nope')).toBe(false);
    bus.on('hi', () => {});
    expect(bus.emit('hi')).toBe(true);
  });

  test('multiple listeners fire in registration order', () => {
    const bus = new EventEmitter();
    const order = [];
    bus.on('e', () => order.push('first'));
    bus.on('e', () => order.push('second'));
    bus.emit('e');
    expect(order).toEqual(['first', 'second']);
  });

  test('off removes a listener', () => {
    const bus = new EventEmitter();
    const calls = [];
    const fn = () => calls.push(1);
    bus.on('e', fn);
    bus.off('e', fn);
    bus.emit('e');
    expect(calls).toEqual([]);
  });

  test('off only removes the specified listener', () => {
    const bus = new EventEmitter();
    const calls = [];
    const a = () => calls.push('a');
    const b = () => calls.push('b');
    bus.on('e', a);
    bus.on('e', b);
    bus.off('e', a);
    bus.emit('e');
    expect(calls).toEqual(['b']);
  });

  test('off on an unknown event/listener is a safe no-op', () => {
    const bus = new EventEmitter();
    expect(() => bus.off('ghost', () => {})).not.toThrow();
  });

  test('once fires only a single time', () => {
    const bus = new EventEmitter();
    const calls = [];
    bus.once('e', (x) => calls.push(x));
    bus.emit('e', 'a');
    bus.emit('e', 'b');
    expect(calls).toEqual(['a']);
  });

  test('on, off, and once are chainable (return this)', () => {
    const bus = new EventEmitter();
    const fn = () => {};
    expect(bus.on('e', fn)).toBe(bus);
    expect(bus.once('e', fn)).toBe(bus);
    expect(bus.off('e', fn)).toBe(bus);
  });
});
