function isValidShopCard(shopCard) {

    if (typeof shopCard !== 'object') {
        console.error('ERROR: turi buti objektas');
        return false;
    }
    if (!shopCard.selector || 
        typeof shopCard.selector !== 'string' || 
        shopCard.selector === '') {
        console.error('ERROR: objekto selectorius turi buti ne tuscias');
        return false;
        }
        if (!shopCard.title || 
            typeof shopCard.title !== 'string' || 
            shopCard.title === '') {
            console.error('ERROR: objekto turinys turi buti ne tuscias');
            return false;
        }
        
        return true;
    
}

export { isValidShopCard }