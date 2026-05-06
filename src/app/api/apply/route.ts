import { NextResponse } from 'next/server';

// Note: To send actual emails, you would typically use a service like Resend, SendGrid, or Nodemailer.
// Example using a generic placeholder logic:

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const file = formData.get('file');

    console.log('Form submission received:', { name, email, message, fileName: (file as File)?.name });

    // In a real implementation, you would use an email provider:
    // await resend.emails.send({
    //   from: 'Welwaat <onboarding@resend.dev>',
    //   to: 'welwaat@gmail.com',
    //   subject: `New Portfolio Submission from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nLooking for: ${message}`,
    //   attachments: [
    //     {
    //       filename: (file as File).name,
    //       content: await (file as File).arrayBuffer(),
    //     }
    //   ]
    // });

    return NextResponse.json({ success: true, message: 'Application sent to welwaat@gmail.com' });
  } catch (error) {
    console.error('Submission error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send application' }, { status: 500 });
  }
}
