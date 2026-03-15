import { NextResponse } from 'next/server';
import { marked } from 'marked';
import HTMLToDOCX from 'html-to-docx';

export async function POST(req: Request) {
  try {
    const { markdown } = await req.json();

    if (!markdown) {
      return NextResponse.json({ error: 'Markdown content is required' }, { status: 400 });
    }

    // Convert markdown to HTML string
    const htmlString = await marked.parse(markdown);

    // Optional styling for the word document
    const docxOptions = {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
      font: 'Arial',
    };

    // Construct full HTML to ensure good conversion
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head><meta charset="UTF-8"></head>
      <body>${htmlString}</body>
      </html>
    `;

    // Convert HTML to DOCX buffer
    const fileBuffer = await (HTMLToDOCX as any)(fullHtml, null, docxOptions);

    // Return the word document
    return new Response(fileBuffer as any, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="document.docx"',
      },
    });
  } catch (error) {
    console.error('Conversion Error:', error);
    return NextResponse.json({ error: 'Failed to convert document' }, { status: 500 });
  }
}
