type genericfunction = (...args: any[]) => void | any;

export default class observer {
	constructor() {}

	private calls:any[][] = [];
	private returnvalue:undefined | any;
	private fn(...args:any[]):genericfunction {
		this.calls.push(args);
		return this.returnvalue;
	}
	public callcount () {
		return this.calls.length;
	}

	public call(index:number) {
		return this.calls[index];
	}

	public calledoncewith(...args:any[]) {
		if (this.calls.length != 1) {
			return false;
		}
		if (this.calls[0].length != args.length) {
			return false;
		}
		for (let i=0; i<args.length; i++) {
			if (this.calls[0][i] != args[i]) {
				return false;
			}
		}
		return true;
	}

	public fake(returnvalue?:any):genericfunction {
		this.returnvalue = returnvalue;
		return this.fn; 
	}
}