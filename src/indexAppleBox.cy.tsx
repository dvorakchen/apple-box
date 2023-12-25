import React from 'react'
import { AppleBox } from './index'

describe('<AppleBox />', () => {

  const EXPECTED_CONTENT = 'CONTENT';

  it('renders 400*400', () => {
    cy.mount(
      <div style={{ height: '400px', width: '400px', backgroundColor: 'rgb(212, 212, 212)' }}>
        <AppleBox content={EXPECTED_CONTENT} />
      </div>
    )
    cy.get('[data-cy="container"]').should('have.css', 'height', '400px')
      .should('have.css', 'width', '400px');

    cy.get('[data-cy="content"]').should('have.text', EXPECTED_CONTENT);
  })

  it('renders 300*200', () => {
    cy.mount(
      <div style={{ height: '200px', width: '300px', backgroundColor: 'rgb(212, 212, 212)' }}>
        <AppleBox content={EXPECTED_CONTENT} />
      </div>
    )
    cy.get('[data-cy="container"]').should('have.css', 'height', '200px')
      .should('have.css', 'width', '300px');

    cy.get('[data-cy="content"]').should('have.text', EXPECTED_CONTENT);
  })
})