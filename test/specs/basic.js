
describe('stale element', function() {
    it('test', function() {
        browser.url('https://www.mytoys.de/adidas-performance-shorts-equip-knit-fuer-jungen-11159805.html');
        const availableSizeSelect = $$('//div[@class=\'select-container prod-info__size-select-container\']' +
            '//select[@id=\'selectsize\']/option[not(@data-disabled=\'disabled\')]');
        const deliveryTime = $('.prod-info__delivery-time');
        const addToBasketButton = $('.js-cart-add');
        const successlayercontent = $('.layer.js-layer.layer-add-to-cart.js-layer-add-to-cart > div');
        const articlesToAdd = 1;
        for (let i = 0; i < articlesToAdd; i++) {
            if (availableSizeSelect.length === 0) {
                throw new Error("No available article");
            }
            availableSizeSelect[0].click();
            deliveryTime.waitForDisplayed();
            addToBasketButton.click();
        }
        successlayercontent.scrollIntoView();
        // browser.pause(3000);
        browser.waitUntil(() => {return successlayercontent.isExisting();}, 'Element doesnt exist');
        browser.checkElement(successlayercontent, 'successlayer', {});
    });
});