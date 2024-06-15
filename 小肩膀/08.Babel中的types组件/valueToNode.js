const t = require('@babel/types');
const generate = require('@babel/generator').default;
// (value: undefined): Identifier;
// (value: boolean): BooleanLiteral;
// (value: null): NullLiteral;
// (value: string): StringLiteral;
// (value: number): NumericLiteral | BinaryExpression | UnaryExpression;
// (value: RegExp): RegExpLiteral;
// (value: ReadonlyArray<unknown>): ArrayExpression;
// (value: object): ObjectExpression;
// (value: unknown): Expression;
t.valueToNode(1); // 1

let loaclAst = t.valueToNode([1, "2", false, null, undefined, /\w\s/g, { x: '1000', y: 2000}]);
let code = generate(loaclAst).code;
console.log(code); // [1, "2", false, null, undefined, /\w\s/g, { x: '1000', y: 2000}]