import { Injectable } from "@angular/core";
import { EventEmitter } from "stream";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
  accounts = [
  {
    name: 'Master Account',
    status: 'active'
  },
  {
    name: 'Testaccount',
    status: 'inactive'
  },
  {
    name: 'Hidden Account',
    status: 'unknown'
  }
 ];
 statusUpdated = new EventEmitter
 constructor(private loggingService: LoggingService) {}

 addAccount (name: string, status: string) {
  this.accounts.push({name: name, status: status})
  this.loggingService.logStatusChange(status)
 }

 updateStatus(id: number, status: string) {
  this.accounts[id].status = status;
  this.loggingService.logStatusChange(status)
 }
}

