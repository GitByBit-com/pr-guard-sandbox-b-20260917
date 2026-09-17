import { test } from 'vitest';
test('bounded pending test', async () => { await new Promise(r => setTimeout(r, 60000)); }, 75000);
// before-pending
