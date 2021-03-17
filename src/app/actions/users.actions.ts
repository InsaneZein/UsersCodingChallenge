import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../models/user'

export const ADD_USER = '[USER] Add';
export const EDIT_USER = '[USER] Edit';

export class AddUser implements Action {
    readonly type = ADD_USER

    constructor(public payload: User) {}
}

export class EditUser implements Action {
    readonly type = EDIT_USER

    constructor(public payload: number) {}
}

export type Actions = AddUser | EditUser