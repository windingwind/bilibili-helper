
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BHLoggerService } from './logger.service'


@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule
    ],
    declarations: [
    ],
    providers: [
        BHLoggerService
    ],
    exports: [
        BHLoggerService
    ]
}) export class BHLoggerModule {
    constructor() {}
}