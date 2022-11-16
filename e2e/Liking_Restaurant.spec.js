Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty favorites resto', ({ I }) => {
    I.seeElement('.empty-favorite');
    I.see('Masih kosong nih', '.empty-favorite h3');
});

Scenario('Liking and unlike a restaurant', ({ I }) => {
    I.wait(3);
    I.seeElement('.empty-favorite');
    I.see('Masih kosong nih', '.empty-favorite h3');
    // Like the restaurant
    I.amOnPage('/');
    I.wait(3);
    I.amOnPage('http://localhost:8080/#/detail/s1knt6za9kkfw1e867');
    I.wait(3);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.amOnPage('http://localhost:8080/#/detail/s1knt6za9kkfw1e867');
    I.wait(3);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/favorite');
    I.seeElement('.empty-favorite');
    I.see('Masih kosong nih', '.empty-favorite h3');
});
