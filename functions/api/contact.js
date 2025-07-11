export async function onRequestPost(context) {
  const { request } = context;
  
  console.log('Contact form submission received');
  
  try {
    // Parse the form data
    const formData = await request.json();
    console.log('Form data received:', formData);
    
    const { name, email, phone, message } = formData;
    
    // Basic validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Missing required fields' 
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid email format' 
        }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    const RESEND_API_KEY = context.env.RESEND_API_KEY;
    const FROM_EMAIL = 'noreply@jacobaycondos.com';
    
    const EMAIL_RECIPIENTS = [
      'sp.pattanaik4@gmail.com'
    ];

    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Email service not configured' 
        }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Send email using Resend to multiple recipients
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: EMAIL_RECIPIENTS,
        subject: 'New Contact Form Submission - Jacó Bay Condos',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1993e5; border-bottom: 2px solid #1993e5; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Contact Information</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            </div>
            
            <div style="background: #fff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
              <h3 style="color: #333; margin-top: 0;">Message</h3>
              <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e9ecef; font-size: 12px; color: #6c757d;">
              <p>This message was sent from the Jacó Bay Condos contact form.</p>
              <p>Time: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `
      })
    });
    
    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error('Resend API error:', errorData);
      console.error('Resend API status:', emailResponse.status);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Failed to send email: ${emailResponse.status} - ${errorData}` 
        }), 
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      }), 
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error' 
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

// Handle CORS preflight requests
export async function onRequestOptions(context) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
} 