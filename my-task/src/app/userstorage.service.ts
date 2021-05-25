import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserstorageService {

  constructor() { 
    console.log('ON INIT user service');
  }

  saveUser(user: any) {
    const tempList = this.fetchFromLocalStorage();
    console.log(tempList);
    tempList.push(user);
    this.storeInLocalStorage(JSON.stringify(tempList));
  }

  /**
   * == primitive data set ==> int a = 5;int b = 5;  a == b ==> true
   *  == data set ==> int a = 5; var b = 5; a == b ==> true
   *  === data set ==>  int a = 5; var b = 5; a === b ==> false
   * @param user user object 
   * @returns 
   */
  verifyUser(user: any) {
    const tempList = this.fetchFromLocalStorage();
    const result = tempList.find((item:any) => {
      let found = false
      if (item.username === user.username && item.password === user.password) {
        found = true;
      }
      return found;
    });
    return result;
  }

 /**
  * localStorage provided by browser
  * set data in local storage
  */
  storeInLocalStorage(List:any) {
    localStorage.setItem('userList',List);
  }

  /**
  * localStorage provided by browser
  * get data from local storage
  */
  fetchFromLocalStorage() {
    const temp = localStorage.getItem('userList');
    return temp ? JSON.parse(temp) : [];
  }

}
