const assert = require('chai').assert;
const operations = require('../multiply');

describe('test for project', function(){
    it('test for result 1', function(){
      //assertEqual(multiply(1, 1), 1);
      assert.equal(operations.multiply(1, 1), 1);
        
    });
    it('test for result 4', function(){
      //assertEqual(multiply(2, 2), 4);
      assert.equal(operations.multiply(2, 2), 4);
        
    });
    it('test for result 9', function(){
      //assertEqual(multiply(3, 3), 9);
      assert.equal(operations.multiply(3, 3), 9);
        
    });
    it('test for result 16', function(){
      //assertEqual(multiply(4, 4), 16);
      assert.equal(operations.multiply(4, 4), 16);
       
    })
    it('test for result 1035', function(){
      //assertEqual(multiply(23, 45), 1035);
      assert.equal(operations.multiply(23, 45), 1035);
    });
});