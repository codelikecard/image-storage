const list = document.getElementsByClassName('')
for (let i = 0; i< list.length;i++){
    const l = list[i];
    if (l.getAttribute('aria-label') === 'Xác nhận'){
      setTimeout(() => {
        l.click();
      }, 800)
    }
}
