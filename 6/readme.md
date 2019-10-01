在package.json中配置命令 
  "scripts": {
    "bundle": "webpack"
  }

  运行 npm run bundle  也会调用项目路径下webpack进行打包， 运行npm run dundle和直接运行 wepack还是不同的， 直接运行webpack会先找全局webpack进行打包 ，而运行npm run dundle会先找本地webpack配置