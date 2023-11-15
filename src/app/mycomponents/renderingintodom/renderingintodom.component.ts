import { Component } from '@angular/core';

@Component({
  selector: 'app-renderingintodom',
  templateUrl: './renderingintodom.component.html',
  styleUrls: ['./renderingintodom.component.css']
})
export class RenderingintodomComponent {

  copyTextToClipboard() {
    const myDivText = document.getElementById("myDivc2")?.innerText;

    if (myDivText) {
      navigator.clipboard.writeText(myDivText)
        .then(() => {
          console.log('Text copied to clipboard');
        })
        .catch((error) => {
          console.error('Could not copy text: ', error);
        });
    }
  }
}

console.log("Hello World");