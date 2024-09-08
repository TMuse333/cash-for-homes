// app/api/sendEmail/route.ts

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
});



transporter.verify((error:Error | null) => {
    if (error) {
        console.error('Error verifying transporter:', error);
    } else {
        console.log('Transporter is ready to send emails');
    }
});

export async function POST(request: Request) {
    try {
        console.log(process.env.GMAIL_PASSWORD)
        console.log(process.env.EMAIL_USER)
        const body = await request.json();
        const { name, email, phone, projectDetails } = body;

        if (!name || !email || !phone || !projectDetails) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

       

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: 'focusflowsoftware@gmail.com',
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Details: ${projectDetails}`,
            html: `
                <p><strong>Seller Name:</strong> ${name}</p>
                <p><strong>Seller Email:</strong> ${email}</p>
                <p><strong>Seller Phone:</strong> ${phone}</p>
                <p><strong>Property address:</strong> ${projectDetails}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        const errorMessage = (error as Error).message || 'An error occurred';
        return NextResponse.json({ message: 'Failed to send email', error: errorMessage }, { status: 500 });
    }
}

export async function OPTIONS() {
    return NextResponse.json({ message: 'CORS preflight check' }, { status: 200 });
}