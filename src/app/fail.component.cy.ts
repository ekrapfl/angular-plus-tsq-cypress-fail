import {
  provideAngularQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';

import { FailComponent } from '../../src/app/fail.component';

describe('Fail', () => {
  it('standalone - should display selected tab on click', () => {
    cy.mount(FailComponent, {
      providers: [provideAngularQuery(new QueryClient())],
    });

    cy.get('.first').should('have.class', 'selected');

    cy.get('.second').click();
    cy.get('.second').should('have.class', 'selected');

    cy.get('.third').click();
    cy.get('.third').should('have.class', 'selected');
  });
});
