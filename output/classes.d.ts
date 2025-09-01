declare class Product {
    productName: string;
    productPrice: number;
    productId: number;
    isInCart: boolean;
    constructor(productName: string, productPrice: number, productId: number);
    addToCart(): void;
    removeFromCart(): void;
    buyProduct(): void;
}
declare const laptop: Product;
declare const addingLaptopToCart: void;
declare const buyingLaptop: void;
declare const mobile: Product;
declare const addingMobileToCart: void;
declare const buyingMobile: void;
declare const tablet: Product;
declare const addingTabletToCart: void;
declare const buyingTablet: void;
