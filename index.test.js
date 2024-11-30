const fs = require('fs');
const path = require('path');

test('HTML contains Hola Mundo', () => {
    const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    expect(html).toMatch(/¡Hola Mundo!/);
});
