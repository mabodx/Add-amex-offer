//https://mp.weixin.qq.com/s/LTIlGnY5Y_nFBAY_EO82tw
offers = Array.from(document.querySelectorAll("button[title='Add to Card']"))
for (const offer of offers) {
  offer.click();
  await new Promise(r => setTimeout(r, 2000));
}
