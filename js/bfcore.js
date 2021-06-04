const bfcore = {};

bfcore.bfchars = ['+', '-', '<', '>', '[', ']', '.', ','];
bfcore.bf = class{
  // field
  _source; // source
  _code; // source with comment removed
  _codearr; // code object (array)

  // constructor
  constructor(source){
    if(typeof(source) !== 'string') throw new Error('source must be string type');
    this._source = source;
  }

  // set/get

  // method
};