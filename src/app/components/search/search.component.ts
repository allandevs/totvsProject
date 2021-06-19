import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ModalManager } from 'ngb-modal';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public news: any = [];
  public search: any;
  public panelOpenState: any = [];
  public loading: boolean = true;

  @ViewChild('myModal') myModal: any;
  private modalRef: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private modalService: ModalManager
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.search = res.filter;
      this.getDate(this.search);
    });
  }

  getDate(params: any) {
    this.loading = true;
    this.apiService.getApi().subscribe((result: any) => {
      this.news = result.articles.filter(({ title }: any) =>
        title.toLowerCase().includes(params.toLowerCase())
      );
      this.loading = false;
      console.log(this.news);
    });
  }

  openModal() {
    this.modalRef = this.modalService.open(this.myModal, {
      size: 'md',
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: 'modal-backdrop',
    });
  }

  closeModal() {
    this.modalService.close(this.modalRef);
  }
}
