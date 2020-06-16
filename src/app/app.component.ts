import { Component, OnInit, forwardRef } from '@angular/core';
import { OnApproveData, OnApproveActions } from './types/buttons';
import { OnCancelData, OnErrorData } from './types/buttons';
import { PayPalProcessor, OnApprove } from './paypal';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { 'class': 'mat-typography' },
  providers: [ { provide: PayPalProcessor, useExisting: forwardRef(() => AppComponent) }]
})
export class AppComponent implements OnApprove { 

  width = 220;
  height = 35;
  shape = 'rect';
  color = 'gold';
  label = 'paypal';
  layout = 'vertical';

  order = {
    purchase_units: [{
      amount: {
        currency_code: 'EUR',
        value: '9.99'
      }
    }]
  };

  onApprove(data: OnApproveData, actions: OnApproveActions) {
    
    console.log('Transaction Approved:', data);

    // Captures the trasnaction
    return actions.order.capture().then(details => {

      console.log('Transaction completed by', details.payer);

      // Call your server to handle the transaction
      return Promise.reject('Transaction aborted by the server');
    });
  }

  onCancel(data: OnCancelData) {

    console.log('Transaction Cancelled:', data); 
  }

  onError(data: OnErrorData) { 

    console.log('Transaction Error:', data); 
  }
}
