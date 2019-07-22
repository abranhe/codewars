import test from 'ava';
import {getMiddle} from '../src';

test('Check middle-character.js', t => {
	t.is(getMiddle('test'), 'es');
	t.is(getMiddle('testing'), 't');
	t.is(getMiddle('middle'), 'dd');
	t.is(getMiddle('A'), 'A');
});
