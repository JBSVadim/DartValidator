"use strict"

class Validator {
  constructor (from, to) {
    this._from = from;
    this._to = to;
  }

  get from () {
    return this._from
  }

  set from (n) {
    if (typeof n !== 'number') {
      throw new TypeError('U write not a number');
    }

    if (n > this._to) {
      throw new RangeError ('This number cant be smallr when to')
    }

    this._from = n;
  }

  get to () {
    return this._to
  }

  set to (n) {
    if (typeof n !== 'number') {
      throw new TypeError('U write not a number')
      
  }
  if (n < this._from) {
    throw new RangeError ('This number must be bigger then From');
  }
  this._to = n
  }
  get range () {
    return [this._from, this._to]
  }

  validate (n) {
    if (typeof n !== 'number') {
      throw new TypeError ('this not a number')
    }

    if (n < this._from  n > this_to) {
      throw new RangeError ('this number is out of valid space')
    }
    

    return n
  }
}
