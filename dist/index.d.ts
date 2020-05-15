export default class observer {
    constructor();
    private fn;
    private calls;
    callcount(): number;
    call(index: number): any[];
    calledoncewith(...args: any[]): boolean;
    fake(returnvalue?: any): Function;
}
