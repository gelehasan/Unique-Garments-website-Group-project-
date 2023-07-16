import { render,cleanup,screen } from "@testing-library/react";
import { CartShopConext } from "../../../Context/cartShopContext";

import CartBag from "../CartBag";


describe('Bag items test', () => {
    test('It should render empty message if Bag item is empty ', () => {
      const bagItem = []; // Empty bag item array
  
      render(
        <CartShopConext.Provider value={{ bagItem }}>
          <CartBag />
        </CartShopConext.Provider>
      );
  
      expect(screen.getByText('Please add items to your bag')).toBeInTheDocument();
    });


    test('It should render items in dropdown if items are present', () => {
        const bagItem = [
          { id: 1, name: 'Kids clothes', imageUrl: 'test', price: 10, quantity: 1 },
          { id: 2, name: 'T-shirt', imageUrl: 'test', price: 20, quantity: 2 },
        ];
    
        render(
          <CartShopConext.Provider value={{ bagItem }}>
            <CartBag />
          </CartShopConext.Provider>
        );
    
        expect(screen.getByText('Kids clothes')).toBeInTheDocument();
        expect(screen.getByText('T-shirt')).toBeInTheDocument();
        expect(screen.queryByText('Please add items to your bag')).toBeNull();
      });

})
