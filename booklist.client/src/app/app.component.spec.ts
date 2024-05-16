import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve books from the server', () => {
    const mockBooks = [
      { id: '88149647-6D34-47DC-86F4-0D2FDB3B3E83', author: "John", title: "Title One", state: 0 },
      { id: '6375E51B-9BA1-450F-B6D9-9851F1AF20F7', author: "Jane", title: "Title Two", state: 1 }
    ];

    component.ngOnInit();

    const req = httpMock.expectOne('/books');
    expect(req.request.method).toEqual('GET');
    req.flush(mockBooks);

    expect(component.books).toEqual(mockBooks);
  });
});
