import test from 'ava';
import {maskify} from '../src';

test('Check credit-card-mask.test', t => {
	t.is(maskify('4556364607935616'), '############5616');
	t.is(maskify('1'), '1');
	t.is(maskify('11111'), '#1111');
});
