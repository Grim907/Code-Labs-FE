import { ProviderAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { AccountService } from '../account.service';

import { LoggingService } from '../logging.service'
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
  //Providers: [LoggingService]
})
export class NewAccountComponent {


  constructor(private loggingService: LoggingService, private accountsService: AccountService) {
    //this.accountsService.statusUpdated.subscribe(
      (status: string) => alert('New Status ' + status)
    
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus)
    //this.loggingService.logStatusChange(accountStatus);
  }
}
