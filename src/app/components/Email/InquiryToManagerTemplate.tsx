import * as React from 'react';

interface InquiryEmailTemplateProps {
    senderName: string;
    email: string;
    content: string;
}

export const InquiryToManagerTemplate: React.FC<
    Readonly<InquiryEmailTemplateProps>
> = ({ senderName,email, content }) => (
    <div>
        <h2>サイトからお問合せがありました。</h2>
        <p>【お名前】</p>
        <p>{senderName}</p>
        <p>【メールアドレス】</p>
        <p>{email}</p>
        <p>【お問い合わせ内容】</p>
        <p>{content}</p>
    </div>
);

export default InquiryToManagerTemplate;