'use strict';

import {NativeModules} from 'react-native';
const RCTDownUpdataAndroid = NativeModules.DownUpdataAndroid;

var DownUpdataAndroid = {


    updataApp: function (
    version: string,
    downUrl: string
  ): void {
        console.warn('downUrl',downUrl)
    RCTDownUpdataAndroid.updataApp(version, downUrl);
  },
  initDirectory:function(directory:string){
    RCTDownUpdataAndroid.initDirectory(directory);
  }
};

module.exports = DownUpdataAndroid;
