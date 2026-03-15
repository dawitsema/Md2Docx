import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const urlParams = searchParams.get('url');

  if (!urlParams) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    // Transform normal github URLs to raw if the user pasted a standard browser URL
    let fetchUrl = urlParams;
    if (fetchUrl.includes('github.com') && fetchUrl.includes('/blob/')) {
      fetchUrl = fetchUrl.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
    }

    const response = await fetch(fetchUrl);
    
    if (!response.ok) {
      return NextResponse.json({ error: `Failed to fetch: ${response.statusText}` }, { status: response.status });
    }

    const content = await response.text();
    return NextResponse.json({ content });
  } catch (error) {
    console.error('GitHub Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch from GitHub' }, { status: 500 });
  }
}
