import test from 'ava';
import {spinWords} from '../src';

test('Check spin-words.js', t => {
	t.is(spinWords('Welcome'), 'emocleW');
	t.is(spinWords('Hey fellow warriors'), 'Hey wollef sroirraw');
	t.is(spinWords('This is a test'), 'This is a test');
	t.is(spinWords('This is another test'), 'This is rehtona test');
	t.is(spinWords('You are almost to the last test'), 'You are tsomla to the last test');
	t.is(spinWords('Just kidding there is still one more'), 'Just gniddik ereht is llits one more');
	t.is(spinWords('Seriously this is the last one'), 'ylsuoireS this is the last one');
});
