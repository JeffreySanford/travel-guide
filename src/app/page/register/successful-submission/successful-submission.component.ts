import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-successful-submission',
  templateUrl: './successful-submission.component.html',
  styleUrls: ['./successful-submission.component.css']
})

export class SuccessfulSubmissionComponent implements OnInit {
  name: any
  params: any

  constructor( private route: ActivatedRoute ) {
    let params
    params = this.route.snapshot.params
  }


  ngOnInit() {
    let params = this.route.snapshot.params
    console.log(params)

    let el = document.getElementById('results')
    el.innerHTML = params.name
  }

}
