import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { AuthService } from "../_services/auth.service";
import { AlertifyService } from "../_services/alertify.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log("registration subcessfully");
        this.alertify.success("registration subcessfully");
      },
      error => {
        this.alertify.error(error);
      }
    );
    console.log(this.model);
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log("cancelled");
  }
}
