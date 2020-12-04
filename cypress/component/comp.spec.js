const { mount } = require('cypress-react-unit-test');
const Comp = require('../../components/comp').default;

it('should use env vars', () => {
  mount(<Comp />);
  cy.contains('→ I AM NEXT_PUBLIC_VAR ←').should('exist');
});
