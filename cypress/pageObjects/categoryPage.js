import 'cypress-xpath';

class CategoryPage {
  elements = {
    tittleCategory: () => cy.get('h2').contains('Laptops & Notebooks'),
    quantityProducts: () => cy.get('div[class="product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12"]')
  }

  validateCategoryPageAccess() {
    cy.url().should("include", "/category");
    this.elements.tittleCategory().should('exist');
    this.elements.quantityProducts().should('have.length.gt', 2);
  }

  selectProduct(productNameSelect) {
    cy.xpath('//a[contains(text(),"' + productNameSelect + '")]').click();
  }
}

export default CategoryPage;