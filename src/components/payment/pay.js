/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import PaymentForm from '../../components/payment/PaymentForm';
import { Container } from 'react-bootstrap';


const Pay = () => {
   const bookingID= localStorage.getItem('bookingID');
   const bookingEmail= localStorage.getItem('bookingEmail');
   const amountToPay= localStorage.getItem('amountToPay');

	return (
     <PaymentForm
            bookingEmail={bookingEmail}
            bookingID={bookingID}
            amountToPay={amountToPay}
        />
	);
};

export default Pay;
