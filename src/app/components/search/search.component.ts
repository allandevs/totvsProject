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
  public offers: any;
  public results: any = [];
  public concatDate: any;
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
      this.getDate();
      this.getOffers();
    });
  }

  getDate() {
    this.loading = true;
    this.apiService.getApi().subscribe(
      (result: any) => {
        this.news = result.articles;
        this.loading = false;
      },
      (error) => {
        this.getOffers();
        this.results = this.offers.filter(({ title }: any) =>
          title.toLowerCase().includes(this.search.toLowerCase())
        );
        this.loading = false;
      }
    );
  }

  getOffers() {
    this.loading = true;
    this.offers = this.apiService.getOfertas();
    this.concatDate = this.news.concat(this.offers);
    this.result(this.search);
  }

  result(params?: any) {
    this.results = this.concatDate.filter(({ title }: any) =>
      title.toLowerCase().includes(params.toLowerCase())
    );
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
