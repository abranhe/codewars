import test from 'ava';
import {complementaryDNA} from '../src';

test('Check complementary-dna.js', t => {
	t.is(complementaryDNA('AAAA'), 'TTTT', 'String AAAA is');
	t.is(complementaryDNA('ATTGC'), 'TAACG', 'String ATTGC is');
	t.is(complementaryDNA('GTAT'), 'CATA', 'String GTAT is');
});
