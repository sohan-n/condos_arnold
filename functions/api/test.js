export async function onRequestGet(context) {
  return new Response(
    JSON.stringify({ 
      success: true, 
      message: 'Cloudflare Functions are working!',
      timestamp: new Date().toISOString()
    }), 
    { 
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
} 