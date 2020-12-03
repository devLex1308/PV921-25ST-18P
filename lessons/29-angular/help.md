https://angular.io/guide/user-input

[] - binding

https://metanit.com/web/angular2/2.5.php
<h1>Добро пожаловать {{name}}!</h1>
<input type="text" [value]="name" /> - прив'язка до атрибуту
<input type="text" (input)="onInput(myInput.value)" #myInput/>
[attr.назва_атрибута]="значення"
<button (click)="addItem(text, price)">Добавить</button>
<input [(ngModel)]="name" placeholder="name">
<button on-click="increase()">Click</button>`

() - event Binding

https://angular.io/guide/user-input
https://metanit.com/web/angular2/3.1.php