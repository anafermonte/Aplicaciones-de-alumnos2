///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2018 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(['dojo/_base/declare',
  'dijit/_WidgetBase',
  'dijit/_TemplatedMixin',
  'dojo/text!./templates/LoadingShelter.html',
  'dojo/_base/html'
],
function(declare, _WidgetBase, _TemplatedMixin, template, html) {
  return declare([_WidgetBase, _TemplatedMixin], {
    'baseClass': 'jimu-loading-shelter',
    declaredClass: 'jimu.dijit.LoadingShelter',
    templateString: template,
    loadingText:null,
    hidden:false,
    showLoading: true,

    postMixInProperties:function(){
      this.nls = window.jimuNls.loadingShelter;
    },

    postCreate: function(){
      this.inherited(arguments);
      if(this.hidden){
        html.setStyle(this.domNode, 'display', 'none');
      }
      html.setStyle(this.domNode, {width: '100%', height: '100%'});
      if(!this.showLoading){
        html.setStyle(this.imgDiv, 'display', 'none');
      }
      if(typeof this.loadingText === 'string'){
        this.textNode.innerHTML = this.loadingText;
      }
    },

    show:function(loadingText){
      if(!this.domNode){
        return;
      }
      if (this.hidden){
        if(typeof loadingText === 'string'){
          this.textNode.innerHTML = loadingText;
        }
        html.setStyle(this.domNode, 'display', 'block');
        this.hidden = false;
      }
    },

    hide:function(){
      if(!this.domNode){
        return;
      }
      if (!this.hidden){
        html.setStyle(this.domNode, 'display', 'none');
        this.hidden = true;
      }
    }
  });
});