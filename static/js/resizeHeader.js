'use strict'

document.addEventListener('DOMContentLoaded', () => {
    
    let cloneNav = undefined;

    let observer = new ResizeObserver( arr => {

        for ( let elem of arr) {

            if (elem.target.tagName=='HEADER' && elem.contentRect.width < 400) {

                    let nav = document.querySelector('nav');
                    
                    if (nav) {
                        
                        cloneNav = nav.cloneNode(true);
                        nav.remove()

                    }

            } else {
                
                let header = document.querySelector('header');
                if (!document.querySelector('nav') && header) {
                    header.prepend(cloneNav);
                }

            }

        }

    } );

    let header = document.querySelector('header');
    if (header) {
        observer.observe(header);
    }

});