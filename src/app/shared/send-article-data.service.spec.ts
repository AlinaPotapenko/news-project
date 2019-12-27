import { TestBed } from '@angular/core/testing';

import { SendArticleDataService } from './send-article-data.service';

describe('SendArticleDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendArticleDataService = TestBed.get(SendArticleDataService);
    expect(service).toBeTruthy();
  });
});
