import { action, makeAutoObservable, observable } from "mobx";

import ToDoItemInterface from '../Models/Models';

const initialList: ToDoItemInterface[] = [
  {
    id: 1,
    title: "hi",
    content: '1',
    isChecked: false,
    isPinned: false,
  },
  {
    id: 2,
    title: "check",
    content: '1',
    isChecked: true,
    isPinned: false,
  },
  {
    id: 3,
    title: "pin",
    content: '1',
    isChecked: false,
    isPinned: true,
  }
];

export default class ItemListStore {
  static store: ItemListStore;

  static get Store():ItemListStore {
    if(!this.store) this.store = new ItemListStore();
    return this.store;
  }

  nextId:number;

  members:number;

  itemList:ToDoItemInterface[];

  constructor() {
    makeAutoObservable(this,{
      itemList: observable,
      nextId: observable,
      members: observable,
      insert: action,
      delete: action,
      pin: action,
      check: action,
      sort: action
    });
    this.nextId = 4;
    this.itemList = initialList;
    this.members = 3;
  }

  insert = (newTitle:string, newContent:string):void => {
    this.itemList.push({
      id: this.nextId,
      title: newTitle,
      content: newContent,
      isPinned: false,
      isChecked: false
    });
    this.nextId += 1;
    this.members += 1;
    this.sort();
  }

  delete = (id:number):void => {
    this.itemList = this.itemList.filter((item) => item.id !== id);
    this.members -= 1;
    this.sort();
  }

  pin = (id:number):void => {
    const index:number = this.itemList.findIndex((item) => item.id === id);
    this.itemList[index].isPinned = !this.itemList[index].isPinned;
    this.sort();
  }

  check = (id:number):void => {
    const index:number = this.itemList.findIndex((item) => item.id === id);
    this.itemList[index].isChecked = !this.itemList[index].isChecked;
    this.sort();
  }

  sort = ():void => {
    if(this.members < 2) return;
    this.itemList.sort((a:ToDoItemInterface,b:ToDoItemInterface):number => {
      if(a.isPinned === b.isPinned) {
        if(a.isChecked === b.isChecked) {
          return a.id < b.id ? -1 : 1;
        }
        if(a.isChecked) return 1;
        return -1;
      }
      if(a.isPinned) return -1;
      return 1;
    });
  }
}
