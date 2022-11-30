# Our Web Application

## General Info

This browser based web application to help young adults who are new to cooking for themselves to create a balanced diet.
We do this by helping users generate a meal schedule and log their recipes.

* I am Braden and I am exited to practice group projects.
* Hi! I'm Lex! I'm excited to work on this project because I get to apply new things :D
* Hi. My name is Michelle. I'm excited about this project because we will learn a lot.

## Technologies

Technologies used for this project:

* HTML, CSS
* JavaScript
* Bootstrap
* Firebase

## Content

Content of the project folder:

```
 Top level of project folder: 
├── .firebaserc              # 
├── .gitignore               # Git ignore file
├── 404.html                 #
├── firebase.json            #
├── firestore.index.json     #
├── firestore.rules          #
├── index.html               # landing HTML file, this is what users see when you come to url
└── README.md                # this readme
└── storage.rules            # 

It has the following sub-folders and files:
├── .git                     # Folder for git repo
├── calendar-20              # Contains files for our schedule page and the bootstrap calendar template package we downloaded
    /add_schedule.html       # HTML for our form that adds a new schedule
    /schedule.html           # HTML for our calendar (schedule page)
    ├── css
        ├── bootstrap / mixins
            /_buttons.css
            /_grid.css
            /_resize.css
        /bootstrap.min.css
        /bootstrap.min.css.map
        /owl.carousel.min.css
        /rome.css
        /style.css
    ├── fonts/icomoon
        ├── demo-files
            /demo.css
            /demo.js
        ├── fonts
            /icomoon.eot
            icomoon.svg
            icomoon.ttf
            icomoon.woff
        /demo.html
        /Read Ne.txt
        /selection.json
        /style.css
    ├── fullcalendar/packages
        ├── bootstrap
            /LICENSE.txt
            /main.css
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.css
            /main.min.js
            /package.json
            /README.md
        ├── core
            ├── locales
                /af.js
                /ar-dz.js
                /ar-kw.js
                /ar-ly.js
                /ar-ma.js
                /ar-sa.js
                /ar-tn.js
                /ar.js
                /bg.js
                /bs.js
                /ca.js
                /cs.js
                /da.js
                /de.js
                /el.js
                /en-au.js
                /en-gb.js
                /en-nz.js
                /en-us.js
                /es.js
                /et.js
                /eu.js
                /fa.js
                /fi.js
                /fr-ca.js
                /fr-ch.js
                /fr.js
                /gl.js
                /he.js
                /hi.js
                /hr.js
                /hu.js
                /id.js
                /is.js
                /it.js
                /ja.js
                /ka.js
                /kk.js
                /ko.js
                /lb.js
                /lt.js
                /lv.js
                /mk.js
                /ms.js
                /nb.js
                /nl.js
                /nn.js
                /pl.js
                /pt-br.js
                /pt.js
                /ro.js
                /ru.js
                /sk.js
                /sl.js
                /sq.js
                /sr-cyrl.js
                /sr.js
                /sv.js
                /th.js
                /tr.js
                /uk.js
                /vi.js
                /zh-cn.js
                /zh-tw.js
            /LICENSE.txt
            /locales-all.js
            /locales-all.min.js
            /main.css
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.css
            /main.min.js
            /package.json
            /README.md
        ├── daygrid
            /LICENSE.txt
            /main.css
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.css
            /main.min.js
            /package.json
            /README.md
        ├── google-calendar
            /LICENSE.txt
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.js
            /package.json
            /README.md
        ├── interaction
            /LICENSE.txt
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.js
            /package.json
            /README.md
        ├── list
            /LICENSE.txt
            /main.css
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.css
            /main.min.js
            /package.json
            /README.md
        ├── luxon
            /LICENSE.txt
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.js
            /package.json
            /README.md
        ├── moment
            /LICENSE.txt
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.js
            /package.json
            /README.md
        ├── moment-timezone
            /LICENSE.txt
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.js
            /package.json
            /README.md
        ├── rrule
            /LICENSE.txt
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.js
            /package.json
            /README.md
        ├── timegrid
            /LICENSE.txt
            /main.css
            /main.d.ts
            /main.esm.js
            /main.js
            /main.min.css
            /main.min.js
            /package.json
            /README.md
    ├── js
        /_boostrap.min.js
        /_jquery-3.3.1.min.js
        /_main.js
        /_owl.carousel.min.js
        /_popper.min.js
        /_skeleto.js
    ├── scss
        ├── bootstrap
            ├── mixins
                /_alert.scss
                /_background-variant.scss
                /_badge.scss
                /_border-radius.scss
                /_box-shadow.scss
                /_breakpoints.scss
                /_buttons.scss
                /_caret.scss
                /_clearfix.scss
                /_deprecate.scss
                /_float.scss
                /_forms.scss
                /_gradients.scss
                /_grid-framework.scss
                /_grid.scss
                /_hover.scss
                /_image.scss
                /_list-group.scss
                /_lists.scss
                /_nav-divider.scss
                /_pagination.scss
                /_reset-text.scss
                /_resize.scss
                /_screen-reader.scss
                /_size.scss
                /_table-row.scss
                /_text-emphasis.scss
                /_text-hide.scss
                /_text-truncate.scss
                /_transition.scss
                /_visibility.scss
            ├── utilities
                /_align.scss
                /_background.scss
                /_borders.scss
                /_clearfix.scss
                /_display.scss
                /_embed.scss
                /_flex.scss
                /_float.scss
                /_overflow.scss
                /_position.scss
                /_screenreaders.scss
                /_shadows.scss
                /_sizing.scss
                /_spacing.scss
                /_stretched-link.scss
                /_text.scss
                /_visibility.scss
            ├── vendor
                /_rfs.scss
            /_alert.scss
            /_badge.scss
            /_breadcrumb.scss
            /_button-group.scss
            /_buttons.scss
            /_card.scss
            /_carousel.scss
            /_close.scss
            /_code.scss
            /_custom-forms.scss
            /_dropdown.scss
            /_forms.scss
            /_functions.scss
            /_grid.scss
            /_images.scss
            /_input-group.scss
            /_jumbotron.scss
            /_list-group.scss
            /_media.scss
            /_mixins.scss
            /_modal.scss
            /_nav.scss
            /_navbar.scss
            /_pagination.scss
            /_popover.scss
            /_print.scss
            /_progress.scss
            /_reboot.scss
            /_root.scss
            /_spinners.scss
            /_tables.scss
            /_toasts.scss
            /_tooltip.scss
            /_transitions.scss
            /_type.scss
            /_utilities.scss
            /_variables.scss
            /_bootstrap-grid.scss
            /_bootstrap-reboot.scss
            /_bootstrap.scss
        /style.scss

├── HTML                     # Contains the majority of our html (all but landing page)
    /grocery.html            # HTML for our grocery page
    /home.html               # HTML for our home page
    /recipes.html            # HTML for our recipes page

├── images                   # Folder for images
    /landing-background.jpg  # old background
    /login_background.jpg    # old background
    /top-view-delicious-thanksgiving-meal.jpg # current landing background

├── scripts                  # Folder for scripts
    /add-schedule.js         # JS to populate the add recipe feature
    /add-mod-skeleton.js     # JS to populate the modify recipe feature
    /add-to-database.js      # JS to add a recipe to the database
    /authentication.js       # JS to authenticate users
    /firebaseAPI_DTC12.js    # JS to connect to firebase
    /grocery-skeleton.js     # JS to populate the grocery page with grocery list
    /home.js                 # JS to populate the home page
    /mod-to-database.js      # JS to modify a recipe in the database
    /recipe-skeleton.js      # JS to populate the recipe page with recipes
    /search-skeleton.js      # JS to populate the search function
    /skeleton.js             # JS to populate nav and footer

├── styles                     # Folder for styles
    /AbrilFatface-Regular.ttf  # font style for some headings
    /add-schedule.css          # CSS for our form that adds a new schedule
    /grocery.css               # CSS for our grocery page
    /home.css                  # CSS for our home page
    /index.css                 # CSS for our log-in page
    /recipes.css               # CSS for our recipes page
└── text    
    /add-recipe.html           # HTML for our add new recipe feature
    /footer.html               # HTML for our footer
    /mod-recipe.html           # HTML for modifying recipes
    /nav.html                  # HTML for our navbar

Firebase hosting files: 
├── .firebase
    /hosting..cache
