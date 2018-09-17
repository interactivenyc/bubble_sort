describe('Bubble Sort', function(){

  beforeAll(function () {
    // window.doSort.calls.reset();
    spyOn(window, 'doSort').and.callThrough();
    
  });
  
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    console.log('doSort was called: ', window.doSort.calls.count());
    window.doSort.calls.reset();
  });

  it('sorts this array', function() {
      expect( bubbleSort([6, 2, 3, 1, 5, 4]) ).toEqual([1, 2, 3, 4, 5, 6])
      console.log('doSort was called: ', window.doSort.calls.count());
      window.doSort.calls.reset();
  })

  it('sorts this array', function() {
    expect( bubbleSort([8, 9, 6, 2, 3, 7, 1, 5, 4]) ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    console.log('doSort was called: ', window.doSort.calls.count());
    window.doSort.calls.reset();
  })

});
