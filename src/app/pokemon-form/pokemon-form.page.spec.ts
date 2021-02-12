import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonFormPage } from './pokemon-form.page';

describe('PokemonFormPage', () => {
  let component: PokemonFormPage;
  let fixture: ComponentFixture<PokemonFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
