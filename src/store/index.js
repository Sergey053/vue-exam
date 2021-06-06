import { createStore } from 'vuex'

export default createStore({
  state: {// храним данные к которым будут обращаться разные компоненты
    basket: [], // книги которыми поделился пользователь
    usersModel:  [ 
      {
          id: 1,
          title: "ПК DEXP Aquilon O247",
          description: "Intel Celeron J4025, 2x2000 МГц, 4 ГБ DDR4, SSD 120 ГБ, без ОС",
          img: "./assets/comp1.jpg",
          price: 11499 + "p",
          category: 'computers'
      },
      {
          id: 2,
          title: "ПК Lenovo IdeaCentre 3 07IMB05",
          description: "Intel Core i3 10100, 4x3600 МГц, 8 ГБ DDR4, SSD 256 ГБ, Wi-Fi, без ОС",
          img: "./assets/comp2.jpg",
          price: 24999 + "p",
          category: 'computers'
      },
      {
          id: 3,
          title: "ПК HP Pavilion Gaming TG01-1024ur",
          description: "AMD Ryzen 5 4600G, 6x3700 МГц, 16 ГБ DDR4, GeForce GTX 1650, SSD 512 ГБ, Wi-Fi, без ОС",
          img: "./assets/comp3.jpg",
          price: 64999 + "p",
          category: 'computers'
      },
      {
          id: 4,
          title: "23.5 Монитор Samsung S24F354FHI",
          description: "1920x1080@60 Гц, PLS, 4 мс, 1000:1, 250 Кд/м², 178°/178°, HDMI, VGA (D-sub), AMD FreeSync",
          img: "./assets/mon1.jpg",
          price: 8899 + "p",
          category: 'monitors'
      },
      {
          id: 5,
          title: "23.8 Монитор Acer KA242Ybi",
          description: "1920x1080@75 Гц, IPS, 1 мс, 1000:1, 250 Кд/м², 178°/178°, HDMI, VGA (D-sub), AMD FreeSync",
          img: "./assets/mon2.jpg",
          price: 9199 + "p",
          category: 'monitors'
      },
      {
          id: 6,
          title: "27 Монитор LG UltraGear 27GL83A-B",
          description: "2560x1440@144 Гц, IPS, 1 мс, 1000:1, 350 Кд/м², 178°/178°, HDMI, DisplayPort, AMD FreeSync, NVIDIA G-SYNC Compatible",
          img: "./assets/mon3.jpg",
          price: 27999 + "p",
          category: 'monitors'
      },
      {
        id: 7,
        title: "14 Ноутбук Lenovo IdeaPad Slim 1-14AST-05 голубой",
        description: "1366x768, TN+film, AMD A4 9120e, 2 х 1.5 ГГц, RAM 4 ГБ, eMMC 64 ГБ, Radeon R3 , Wi-Fi, Windows 10 Home",
        img: "./assets/note1.jpg",
        price: 20999 + "p",
        category: 'notebooks'
    },
    {
        id: 8,
        title: "15.6 Ноутбук ASUS Laptop F515JA-EJ672T серебристый",
        description: "1920x1080, TN+film, Intel Pentium 6805U, 2 х 1.1 ГГц, RAM 4 ГБ, SSD 128 ГБ, Intel Iris Plus , Wi-Fi, Windows 10 Home",
        img: "./assets/note2.jpg",
        price: 28999 + "p",
        category: 'notebooks'
    },
    {
        id: 9,
        title: "15.6 Ноутбук Lenovo IdeaPad 3 Gaming 15ARH05",
        description: "1920x1080, IPS, AMD Ryzen 5 4600H, 6 х 3 ГГц, RAM 8 ГБ, SSD 512 ГБ, GeForce GTX 1650 4 Гб, Wi-Fi, DOS",
        img: "./assets/note3.jpg",
        price: 52199 + "p",
        category: 'notebooks'
    }
  ]
  },
  getters:{// отфильтрованные данные из state
    basketModel(state){
return state.usersModel.filter(model => model.category);

    },
    basketModelCount(state, getters){
return getters.categoryModel.length;

    },
    modelById: state => (category) => {//вместо айди передаем все данные которые хотим передать в геттер
      return state.usersModel.filter(model => model.category == category)[0];

    }
  },
  mutations: {// содержат методы позволяющие изменять состояния хранилища
    basketModel(state, model){
      //при вызове любого иетода из мутации первым элементом будет передаваться метод стате
      state.basket.push(model);
//  в мутации не должно быть асинхронных методов
    },
    markRead(state, index){
      state.usersModel[index].category = true;
    },
    addToUserModel(state, model){
for (let i=0; i< model.length; i++){
    state.usersModel.push(model[i]);
}

    }
  },
  actions: {
    //   любые асинхронные запросы в actions
    loadData(context){
        fetch('http://localhost:8080/usermodel')
        // отправка запрсов на сервер, первыйм аргументом- адрес сервера,
        // когда запрос на сервер придет и сервер даннные отправит мы получим даннные в response  и получаем в виде строки
        .then(response => response.json())
        .then(jsonData => context.commit('addToUserModel', jsonData));
    }
  },
  modules: {
  }
})
