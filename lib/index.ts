export default class observer {
	constructor() {}

	private fn:Function | undefined;
	private calls:any[][] = [];
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

	public fake(returnvalue?:any) {
		
		this.fn = (...args:any[]) => {
			this.calls.push(args);
			return returnvalue;
		}
		return this.fn; 
	}
}