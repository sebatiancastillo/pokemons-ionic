import { TestBed } from '@angular/core/testing';

import { PokemonDetalleService } from './pokemon-detalle.service';

describe('PokemonDetalleService', () => {
  let service: PokemonDetalleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonDetalleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
