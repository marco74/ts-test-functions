# Library to test functions in Typescript (inspired by Sinon)

## Installation
```sh
npm install ts-test-functions
```

## Usage
### Typescript
```typescript
import observer from 'ts-test-functions'


describe("observer class", () => {
	let obs1:observer;
	let f: Function;
	beforeEach(() => {
		obs1 = new observer();
		f = obs1.fake(42);
	});
	describe("fake", () => {
		it("should return a callable", () => {
			assert(f instanceof Function);
		});
		it("callable should return specified value", () => {
			assert(f() == 42);
		});
	});
	describe("callcount", () => {
		it("should return the number of calls", () => {
			assert(obs1.callcount() == 0);
			f();
			f();
			assert(obs1.callcount() == 2);
		});
	});
	describe("calledoncewith", () => {
		it("should return true if called once with specified arguments", () => {
			f(1, 2, 3);
			assert(obs1.calledoncewith(1, 2, 3));
		});
	});
	describe("call", () => {
		it("should return number of calls", () => {
			f(1);
			assert.deepEqual(obs1.call(0), [1]);
		});
	});
});
```
