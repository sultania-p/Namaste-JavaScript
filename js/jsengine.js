/**
 * JS Runtime ENvironment - JS Engine // heart of javascript + API + EventLoop + CallStack Queue + Microtask QUeue
 * API - Based on purpose
 * Node.js is open source applicaiton which can execute javascript program as it has the javascript engine
 * Google Chrome JavaScript Engine - V8 - Enables Chrome to run the js program
 * ECMAScript - Standard language standard
 * JS Engine is a program or function which is written in low level language and takes inout and convert high level input language 
 *      to LLL/Machine Language for execution
 * Code -> Parsing -> Compilation -> Execution // Function of JSEngine
 * In parsing - Tokens are generated
 * Upon Parsing - Syntax Parser - Generate the AST (Abstract Syntax Tree) JSON Structure/Tree like structure for the code
 * JS - Can be either Interpreted (code execution line by line) or Compiled (Optimized code) level language depending on JS Engine
 * JS is a JIT Compilation level language - Both interprettor and compilation, bcj Interpreter interacts with Compiler to ask for optimize the code as much 
 *      as possible during line by line code execution so JS is JIT language
 * Execution -> Call Stack and memory Heap
 * Garbage COllector - COllects all the garbage form Memory heap and sweeps it // Mark and Sweep Algorithm -- The mark-and-sweep algorithm is called a tracing 
 *                                          garbage collector because it traces out the entire collection of objects that 
 *                                          are directly or indirectly accessible by the program. 
 * Google V8 JS Engine - Ignition Interpreter ++ TuroFan Compiler ++ Orinoco (Garbage COllector - Mark and Sweep)
 * 
 * 
 * 
 */