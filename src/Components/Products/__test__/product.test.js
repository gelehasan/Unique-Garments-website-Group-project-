import { render, screen, fireEvent } from '@testing-library/react';
import Product from '../Products';


describe("Testing the product page", ()=>{

    test('It should render the important product details', () => {
        const item = {
          name: 'Kids clothes',
          Price: 10,
          ImageUrl: 'test-url',
        };
      
        render(<Product item={item} />);
      
        expect(screen.getByText('Kids clothes')).toBeInTheDocument();
        expect(screen.getByText('10')).toBeInTheDocument();
        expect(screen.getByRole('img', { src: 'test-url' })).toBeInTheDocument();
      });

     
      test('It should render the "Add product" button', () => {
    
        const item = {
          name: 'Product A',
          Price: 10,
          ImageUrl: 'test-url',
        };
      
        
        render(<Product item={item} />);
        
  
        const addProductButton = screen.getByText('Add product');
        expect(addProductButton).toBeInTheDocument();


      });
      
     
})
