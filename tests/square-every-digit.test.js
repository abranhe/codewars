import test from 'ava';
import { squareDigits } from '../src';

test('Check square-every-digit.js', t => {
    t.is(squareDigits(9119), 811181);
});
