import {TwingNode, TwingNodeOutputType, TwingNodeType} from "../node";

import {TwingCompiler} from "../compiler";

/**
 * Represents a block call node.
 *
 * @author Fabien Potencier <fabien@symfony.com>
 */
export class TwingNodeBlockReference extends TwingNode {
    constructor(name: string, lineno: number, tag: string = null) {
        super(new Map(), new Map([['name', name]]), lineno, tag);

        this.type = TwingNodeType.BLOCK_REFERENCE;
        this.outputType = TwingNodeOutputType.OUTPUT;
    }

    compile(compiler: TwingCompiler) {
        compiler
            .addDebugInfo(this)
            .write(`this.displayBlock('${this.getAttribute('name')}', context, blocks);\n`)
        ;
    }
}
