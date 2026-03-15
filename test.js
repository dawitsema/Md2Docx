const axios = require('axios');
const fs = require('fs');

async function testApi() {
  try {
    const res = await axios.post('http://localhost:3000/api/convert', {
      markdown: '# Hello DOCX\n\nThis is a **test** document generated via the Next.js API.'
    }, {
      responseType: 'arraybuffer'
    });
    
    fs.writeFileSync('test.docx', res.data);
    console.log('Successfully wrote test.docx. File size:', res.data.length);
  } catch (err) {
    console.error('API Error:', err.message);
    if (err.response) {
      console.error(err.response.data.toString());
    }
  }
}

testApi();
