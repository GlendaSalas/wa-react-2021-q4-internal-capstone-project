import { Input } from '../../components/commons/Input/Input';
import React, { useState } from 'react';

import * as S from './Form.css';

export const CheckoutForm = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    Address: '',
    comments: '',
  });
  const handleChangeForm = (event) => {
    const value = event.currentTarget.value;
    setForm({ ...form, [event.currentTarget.name]: value });
  };
  return (
    <S.FormInfo>
      <div style={{ padding: '1em', display: 'flex', alignItems: 'center' }}>
        Name:
        <Input placeholder="Name" name="name" value={form['name']} onChange={handleChangeForm} />
      </div>
      <div style={{ padding: '1em', display: 'flex', alignItems: 'center' }}>
        Email:
        <Input placeholder="Email" name="email" value={form['email']} onChange={handleChangeForm} />
        Post code:
        <Input placeholder="posta code" name="postalCode" value={form['postalCode']} onChange={handleChangeForm} />
      </div>
      <div style={{ padding: '1em', display: 'flex', flexDirection: 'column' }}>
        Comments:
        <S.TextArea
          placeholder="Comments"
          name="comments"
          value={form['comments']}
          onChange={handleChangeForm}
          rows={4}
        />
      </div>
    </S.FormInfo>
  );
};
