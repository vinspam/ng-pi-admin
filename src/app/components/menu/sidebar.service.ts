import { Injectable } from '@angular/core';
import { SIDEBAR_JSON } from '../../pages/sidebar-json';

@Injectable()
export class sidebarService {
  
  constructor() {
    this.queryAllNode(SIDEBAR_JSON);
  }
  
  private parentNode = null;
  private node = null;
  private arr1 = [];

  public queryParentNode(json:any, nodeId:any) {
    for (var i = 0; i < json.length; i++) {
      if (this.node) {
        break;
      }
      var obj = json[i];
      if (!obj || !obj.path) {
        continue;
      }
      if (obj.path == nodeId) {
        this.node = obj;
        break;
      } else {
        if (obj.children) {
          this.parentNode = obj;
          this.queryParentNode(obj.children, nodeId);
        } else {
          continue;
        }
      }
    }
    if (!this.node) {
      this.parentNode = null;
    }
    return {
      parentNode: this.parentNode,
      node: this.node
    };
  }

  public creatRouterLink(nodeId:any) {
    this.node = null;
    this.parentNode = null;
    
    let obj = this.queryParentNode(SIDEBAR_JSON, nodeId);

    if (obj.parentNode && obj.parentNode.path) {
      this.arr1.unshift(obj.parentNode.path);
      return this.creatRouterLink(obj.parentNode.path);
    } else {
      return this.arr1.join('/');
    }
  }

  public queryAllNode(Json:any) {

    Json.forEach((index) => {
      this.arr1 = [index.path];
      index.routerLink = this.creatRouterLink(index.path);
      if (index.children) {
        this.queryAllNode(index.children);
      }
    })
    
  }

  public putSidebarJson() {
    return SIDEBAR_JSON;
  }
}
