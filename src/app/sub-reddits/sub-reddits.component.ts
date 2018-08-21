import { Component } from '@angular/core';
import { Reddit } from '../reddit.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-reddits',
  templateUrl: './sub-reddits.component.html',
  styleUrls: ['./sub-reddits.component.css']
})
export class SubRedditsComponent {
  constructor(private router: Router){}
  reddits: Reddit[] = [
    new Reddit("science", "Researchers discover enzymes that turn Type A and B blood into universal Type O", "Article Link",1),
    new Reddit("aww", "Growing up with your best friend, the brick.", "Pictures",2),
    new Reddit("gifs", "Good boy likes to play ball with anyone that passes by", "Gif", 3),
    new Reddit("tippytaps", "She's a maaaaaaniac, maaaaaniac", "gif",4),
    new Reddit("GetMotivated", "[Image] It's ok to suck", "image",5)
  ];
  goToDetailPage(clickedCategory: Reddit) {
  this.router.navigate(['categories', clickedCategory.category]);
};

}
