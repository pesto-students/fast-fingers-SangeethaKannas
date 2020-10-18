const SessionStorageService = {

  set : (itemName, item) => sessionStorage.setItem(itemName, typeof item == 'string' ? item : JSON.stringify(item)),

  get : (itemName = '') => sessionStorage.getItem(itemName)

}

export default SessionStorageService;