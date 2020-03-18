import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { AuthService } from '../_services/auth.service'

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log("registration subcessfully");
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log("cancelled");
  }
}
