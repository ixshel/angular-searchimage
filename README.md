* Live App: https://angular-imagesearch.web.app
  - Hosted in Firebase
  - Deployed every-time there is a merge in firebase branch 
  - Automate deploy with Github actions

* Github repo: https://github.com/ixshel/angular-searchimage
  - Gitflow : 
    a) Main should be production
    b) Firebase is my dev environment

```     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
```    

```
Angular CLI: 11.2.5
Node: 14.14.0
OS: darwin x64

Angular: 11.2.6
... animations, common, compiler, compiler-cli, core, forms
... localize, platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.5
@angular-devkit/build-angular   0.1102.5
@angular-devkit/core            11.2.5
@angular-devkit/schematics      11.2.5
@angular/cli                    11.2.5
@schematics/angular             11.2.5
@schematics/update              0.1102.5
rxjs                            6.6.6
typescript                      4.0.7
```

And used nginx to proxy pass the CORS with live preview since Im little lazy: \

```
server {
        listen       80;
        server_name  local.ixshel.com;

        # ng serve config
        location / {

            proxy_pass http://127.0.0.1:4200;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;

            proxy_http_version 1.1;
            proxy_cache_bypass $http_upgrade;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
```

To run it you just need to set your nginx similar to what I did and then run ```npm run start``` I modified the script to run without the host check