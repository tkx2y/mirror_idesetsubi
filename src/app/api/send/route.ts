import { InquiryToUserTemplate } from '../../components/Email/InquiryToUserTemplate';
import { InquiryToManagerTemplate } from '../../components/Email/InquiryToManagerTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

// 環境変数からResendのAPIキーを取得
const resend = new Resend(process.env.RESEND_API_KEY);

// 環境変数から送信元に指定するメールアドレスを取得
const fromEmail = process.env.RESEND_FROM_EMAIL;

export async function POST(request: Request) {
    // お問い合わせフォームからのデータを取得
    // name, email, message
    const req = await request.json();

    const msg = [
        {
            from: fromEmail ?? '',
            to: [req.email],
            subject: 'お問い合わせありがとうございます',
            react: InquiryToUserTemplate({
                senderName: req.name,
                content: req.message,
            }) as React.ReactElement,
        },
        {
            from: fromEmail ?? '',
            to: fromEmail ?? '',
            subject: 'サイトからの問い合わせ',
            react: InquiryToManagerTemplate({
                senderName: req.name,
                content: req.message,
                email: req.email,
            }) as React.ReactElement,
        },
    ];

    try {
        let sendData:any = []
        for (let i = 0; i < msg.length; i++) {
            const { data, error } = await resend.emails.send(msg[i]);
            if (error) {
                return NextResponse.json({ error });
            }
            sendData.push(data);
        }

        return NextResponse.json({ sendData });
    } catch (error) {
        return NextResponse.json({ error });
    };
};