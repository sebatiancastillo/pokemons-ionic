import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonHabitatPage } from './pokemon-habitat.page';

describe('PokemonHabitatPage', () => {
  let component: PokemonHabitatPage;
  let fixture: ComponentFixture<PokemonHabitatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonHabitatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonHabitatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
