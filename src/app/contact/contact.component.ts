import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    standalone:true,
    imports: [FormsModule]
})
export class ContactComponent {
    userName: string = '';
    userAge: string = '';
    userEmail:string ='';
    userPassword:string=''
}