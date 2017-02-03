System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  //map tells the System loader where to look for things
  map: {
    'app': './app',
    
    'jquery': 'npm:jquery@2.2.4',
    'moment': 'npm:moment',
    'bootstrap': 'npm:bootstrap@3.3.7',
    'eonasdan-bootstrap-datetimepicker': 'npm:eonasdan-bootstrap-datetimepicker@v4.17.43',
    'ng2-eonasdan-datetimepicker': 'npm:ng2-eonasdan-datetimepicker/dist/datetimepicker.directive.js',
    
    '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
    '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
    '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
    '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
    
    '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
    '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
    '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
    '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
    '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
    '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
    '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',
    
    'rxjs': 'npm:rxjs',
    'typescript': 'npm:typescript@2.0.2/lib/typescript.js'
  },
  meta: {
    // 'ng2-eonasdan-datetimepicker': {
    //   deps: ['eonasdan-bootstrap-datetimepicker']
    // },
    // 'eonasdan-bootstrap-datetimepicker': {
    //   deps: ['jquery', 'moment', 'bootstrap']
    // },
    // 'bootstrap': {
    //   deps: ['jquery']
    // },
    // 'jquery': {
    //   format: 'global'
    // }
    // 'eonasdan-bootstrap-datetimepicker': {
    //   format: 'global'
    // },
    // 'moment': {
    //   format: 'global'
    // },
  },
  //packages defines our app package
  packages: {
    app: {
      main: './main.ts',
      defaultExtension: 'ts'
    },
    rxjs: {
      defaultExtension: 'js'
    }
  }
});