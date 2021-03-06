import {TwingNodeExpressionBinary} from "../binary";
import {TwingCompiler} from "../../../compiler";
import {TwingNodeType} from "../../../node-type";

export const type = new TwingNodeType('expression_binary_sub');

export class TwingNodeExpressionBinarySub extends TwingNodeExpressionBinary {
    get type() {
        return type;
    }

    operator(compiler: TwingCompiler): TwingCompiler {
        return compiler.raw('-');
    }
}
