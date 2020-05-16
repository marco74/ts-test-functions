export default class observer {
    constructor();
    private calls;
    private returnvalue;
    private fn;
    callcount(): number;
    call(index: number): any[];
    calledoncewith(...args: any[]): boolean;
    fake(returnvalue?: any): Function;
}
