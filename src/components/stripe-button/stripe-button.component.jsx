import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_a1jO0CUSqdXrXS247IAvwzB800yCaNJh3p';

  const onToken = token => {
    console.log(token);
    alert('payment was made');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing LTD'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amout={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
